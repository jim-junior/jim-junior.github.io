# Designing The Conveyor CI Pipeline Engine

In CI/CD Systems, there is a concept of pipelines. Pipelines define the steps of how code changes throught the entire CI/CD process. Multiple systems like Github Actions, GitLab CI/CD, Jenkins etc all have this functionality of pipelines natively embeded within them, something that conveyor ci curently lacks. You could engineer a walkaround to implement your out pipeline-like functionality in conveyor but natively, this functionality doesnt exist and this is a serious downside existing within conveyor.

This got me thinking, how could I implement it. As you might guess from the name, Conveyor CI was insired by how a conveyor belt in an industry works. Take an example of a car manufacturing factory, the skeleton of the car moves along the conveyor belt and at each step there is a dedicated robot incharge of attaching a certain component to the car of carring out a certain function. By the time the skeleton reached the final stage, its a complete car. From the start I wanted to adopt this kind of concept as the core paradigm of Conveyor CI where by a resource(eg. source code) moves on a belt and at the end of the belt, all necessary actions are carried out.

With this in mind, I split the pipeline into components inorder to easily understand it adopting from components of a conveyor belt ie. Package, Conveyor Belt, and Peripheral equipements. In that I came up with the following:

- **Resource**: The resource is and internal object in conveyor that reporesents what is being acted through out the CI/CD process. Think of it as the Package on a conveyor belt. It can represent anything from source code, and application, a program etc.
- **Drivers**: Drivers are software components that carry out certain actions depending on the state defined in the Resource. Think of them as the Peripheral devices that act on a package as it moves along a conveyor belt. In this case the Packages are the Resources.

Notice i havent methioned a conponent that coressponds to the Conveyor belt. thats is because currently there was none, and to create one was where pipelines come in.

So currently in conveyor ci we have Resources and Drivers. They are generally mature enough as individual components and although you could create an entire CI/CD tool with these only, there are still some issues. Mainly is that there is not order of execution of drivers upon a Resource. This means that once a Resource even occurs, all drivers execute there correcponding actions whenever they recieve the event and they do this in no orderly fashion. This means it not possible to predict what action will occur at what point in the CI/CD process and you also cant create dependecy actions that depend on others being pre-ecexuted. An example is if you have a workflow whereby you compile your source code then upload the output program to a distributuin server, You might have two have twoo drivers, one for compiling and another for uploading. In the current implementation, these drivers will execute at once, yet the uploading driver should depend on the constraint that the compiling driver is done executing. I think you get where the issue now comes it.

To fix this we have to come up with a way to define a workflow that drivers must follow when carring out there executions, something that defines the steps and order that these divers will follow through out execution. Something to act as the conveyor belt. This is where Pipelines Come in. They will define the order of execution followed by drivers. The pipeline can be an object containing the configuration defining the order followed by drivers.

Pipelines also introduce more possibilies like shared context among driver executions, meaning, a pipeline can define some metadata that is shared and used across all the drivers that are executing upon an resource in that pipeline.

## Implementing Pipelines

Now that i had come up with a high level design of what pipelines are expected to work, I had to move on to designing an implementation that would easily fit in into the existing conveyor ci implementation. Inorder to create a implementation that is good, i set a few constraints that i had to follow:

1. Pipelines shouldnt introduce breaking changes that might interfere with the Developer experience and development paradigm for developers developing drivers. It should be more of and incremental change, building upon the already existing development paradigm without breaking already existing codebases.
2. Minimize the risk of over engineering the system while trying to follow contraint one. This is because usually one trade off of mantaining a good developer experience is that you might endup over engineering the system.

With these design constraints in mind, i embarked of designing the Pipeline engine. First I started with the usage workflow from the user viewpoint ie the process that will be followed by a developer when creating a pipeline and using it.

### Use case Workflows

Considering that Developer experience is once of the most important concepts for the sucess of a tool, I had t come up with a really easy to understand workflow and also not breaking the already existing usage workflows in conveyor ci. I came up with this.

- First a pipeline is designed by the developer choosing their appropriate drivers and resources and arranging them in a desired order.
- The pipeline is then sent to the Coveyor CI API Server to be registered and saved.
- Once its saved then a Resource that is using that pipeline is created and sent to the API server
- Then the Pipeline Engine appropriately routes the resource to the drivers.
- Driver do there work

### How the Engine Works

With this in mind, I came up with a system design that can accomplish these functions but also acting as an incrementation on the existing conveyor base.

First a new state object called a *Pipeline* was introduced into the system. This object would store and represent information about a pipeline through out the stages of execution. It would store the order of execution followed by drivers and aditional context information/metadata that is required by driver in said pipeline.

I also had to introduce a *Driver Result* event object. This object, acting as an event was to be used by drivers to comunicate the result of the `Reconcile` function(The function that is run when a driver recieves a resource to act upon). This would be used to inform the Pipeline Engine if a desired driver operation was sucessfull or not.

Inorder, to mantain realtime seemless execution, A new execution process running concurrently with the API Server had to be introduced to Conveyor CI's core runtime program. This would be incharge of listeneing for new resources attached to pipelines, routing those resources to drivers in a pre-defined order as defined in the *Pipeline* objects, and watching for pipeline realworld state changes and reconciling it to the state stored in the Database. This process is what I named the **Pipeline Engine**

#### Execution Workflow

Having introduced the required components, I came up with this workflow.

- The user sends a POST request to the Conveyor API server to register their Pipeline, this is then saved to the ETCD Database.
- Then the user creates a pipeline Resource(a resource that depends on that pipeline), also via the API Server.
- When the API server recieves and saves this Resource t the DB, it sends and EVent to the Pipeline Engine.
- The Pipeline Engine recieves the Event and using the event metadata it ccollects the Pipeline information from the DB and depending on the driver execution order defined by the pipeline it begins to send events to the drivers.
- Once the Driver has finished to carry out its functions, it returns a *Driver Result* and the Driver Manager sends that result as an event back to the Pipeline Engine.
- When the Result event is recieved, the Pipeline engine can then move on to sending the event to the next driver. If no result event has been recieved yet from the Driver, the Engine wont move on to the next Driver.
- Lastly, if the result event on one driver indicates thet the Driver execution failed or an error occured. The pipeline engine wont send events to the remaining drivers and will rather register the pipeline as stopped or done with a status of failed. Else it will finish execution of all driver and still register the pipeline as done/complete.

#### Technical Details

