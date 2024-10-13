# JavaScript Proxies | A beginners Guide

![](https://cdn-images-1.medium.com/max/1024/1*QPgIerxoNPJbe6A1ZE5GRQ.png)

Proxies in JavaScript are one of the hidden gems in the language that most JavaScript beginner and intermediate developers do not know of. According to the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) docs, The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties.

From the definition, A proxy can be used to interfere with the underlying operations on an object, for example you can extend how a property is set on a function, you can carry out some operations before that define how an object property is set or printed out etc

To explain that, think of a scenario were you have an object that represents a user profile.

```js
const profile = {
  username: "Anderson",
  image: "/path/to/img"
}
```

In our application we want to be able to update the username. But before a user updates their username, you want to verify if the name is not taken by another user. One way you can do that is by writing a function to verify if the username is valid or not, the other way we can use a proxy.

We first initialize an instance of the Proxy object . The constructor takes in two arguments:

- **Target** : The object that you want to proxy.
- **Handler** : An object that defines which operations will be intercepted and how to redefine intercepted operations.

```js
let profile_proxy = new Proxy(profile, {/* handler blank for now */}
```

With that we have created a proxy for the profile object. the main thing to look at now is the handler object. Its the one used to determine the behavior we want to customize on our object. First lets define a set property. As you might guess, the set property is used for customizing the way an object is set. It is a function that takes in three arguments.

- Object: This is the original object
- Prop: The property your are trying to set
- Value: the value that you want to assign to a property.

So lets redefine our handler.

```js
const handler = {
    set: (obj, prop, value) {
        if (/* certain condition is met */) {
            obj[prop] = value
            return true;
        } else {
            throw new Error("Required condition not met")
        }
    }
}
```

Now we can pass the handler object when initiating the proxy

```js
const profile_proxy = new Proxy(profile, handler)
```

Now if you try to set the username in the profile\_proxy object to a new value, it will first evaluate the condition you set then set the object if possible or throw a new Error.

> Note: After initializing a proxy, when trying to modify the variable, you modify it from the proxy, for example in the above example you would change profile\_proxy.username not profile.username , If you call profile.username the custom setter wont be run.

Now let define the get method.

```js
const handler = {
  get(obj, prop) {
    return prop in obj ?
      obj[prop] :
      "Not found";
  }
};
```

The get method will be called if you try to access a property in the object. Acts like a getter.

```js
// If we run:
console.log(profile_proxy.some_missing_method)
// Output: "Not found"
```

As you might realize that from the above example creating a whole new variable makes the code look weird so a better way is to either be like:

```js
profile = new Proxy(profile, handler)
// Or instead of first defining the object then create a proxy you can do this

const profile = new Proxy({/* All values in here*/}, handle)
```

That’s a simple overview of proxies so now lets look at where proxies are actually being used in real world Projects.

- Vue.js 3: According to vue.js documentation, the latest version of Vue which is Vue 3 utilizes JavaScript Proxies to implement reactive data. fro the reactive function. It is stated [here](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive-proxy-vs-original)
- [Orbiton JS](https://orbiton.js.org): Also utilizes JavaScript proxies to create Proxy Binders that act in the same manner as Vue’s reactive data.

I hope this article helped you understand Proxies. If you want to learn more you can visit the [MDN docmentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

* * *