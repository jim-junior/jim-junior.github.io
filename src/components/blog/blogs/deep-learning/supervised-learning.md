# An Introduction to Supervised Learning


![](/sl.png)


Machine learning is a subset of AI that learns to make decisions by fitting mathematical models to observed data. This area has seen explosive growth and is now (incorrectly) almost synonymous with the term AI. Machine learning models are generally cartegorised into two. Supervised and Unsupervised learning models. In this article we shall take a look at Supervised Learning models, how they work and different concepts associated with it.

## What is Supervised Learning

Supervised learning is a field of machine learning where mathermatical models are trained on labeled data from datasets using the input and expected output inorder for the model to learn the relationship between the input and output. That aim is for the models to be able to peredict data from new unseen data.

## Problems in Supervised learning

Supervised learning is usually used to solve specific kind of problems. There a re mainly two types of problem that Supervised learning models predict. Regression and Classification models.

**Regression problems** are problems that require a model that predicts continous values. Think of a problem which reuires us to predict the price of a house, we are to create a model that takes imputs which are various characteristics like location, size etc, and from these imputs we predict a price. We can also have problems that predict more that one value and these are called multivariable regression problems. Take an example of a model that predicts the age and height of a tree.

**Classification Problems** on the other hand are problems that produce a cartegorical output forexample a model that perdicts of it will rain or not. This is actually called a binary Classification problem since the output has only two states to exist it. However, the model can predict an output that can be in one of more than 2 possible cartegories. These are called multiclass classification problems. Take an example of a model that predicts what animal is in a picture, and the animal can be anything from a dog, cat, cow, goat etc.

## What are Supervised Learning Models

In supervised learning, we aim to build models that take an input $$x$$ and predit an output $$y$$. The model is a mathematical equation $$f[•]$$  that takes inputs $$x$$ and $$y$$. We can then represent the output as $$y = f(x)$$ This process of prediction $$y$$ from $$x$$ through the model is called **inference**

The model is a fixed equation that contains parameters $$\theta$$, the choice of parameters $$\theta$$ determines the relationship between the input and prediction. therefore the prediction $$y$$ varies basing off the parameters.

$$ y = f[x,\theta] $$

When we say we are training a model, we are feeding the models with input output pairs $$(x, y)$$ and aim to find the parameters that match inputs $$x$$ to outputs that are as close as possible to the expected output $$y$$.

The mismatch between the output and expected output is called the loss L. This loss is a scalar value that describes how poorly out model predicts the expected output.

Generaly we are training the model to find the parameters minimise the loss function as possible

After training a model, we must now assess its performance; we run the model on
separate test data to see how well it generalizes to examples that it didn’t observe during
training. If the performance is adequate, then we are ready to deploy the model.

## Model Inputs

Learning models are usually mathematical equations that take inputs in numerical form, but in the real world, these inputs appear in a variety on formats, so we have to find a way to encode them into numerical form.

Take an example of Images, as humans, we identify them through the different color composition of the image, so we have to encode these colors into numerical format. Digitally, images are reprsented by pixels and each pixel is represented by the RGB scheme that represents the intesity of the Red, Blue and Green in that pixel, this forexample can be represented in as a vector of number eg (266, 180, 001)

Inputs and how they are interpreted can vary in different forms, forexample if we are predicting the price of a house, the inputs are location, number of bedrooms etc and it doesnt matter the order in which they are input, they model is expected to predict the same price. Now take an example of a model that predicts if a sentence is realistic or not, the sentences, "my wife ate the chicken" and "the chicken ate my wife" are the same in terms of the words they consist but the order is different hence the meaning and the expected model prediction is different.

## Model Outputs

The output of the model also varies wildely depending on the type of the problem.

Lets take an example of 