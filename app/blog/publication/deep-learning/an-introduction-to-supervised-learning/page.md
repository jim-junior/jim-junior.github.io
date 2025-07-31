# An Introduction to Supervised Learning Models

![](/sl.png)

Machine learning is a subset of AI that learns to make decisions by fitting mathematical models to observed data. This area has seen explosive growth and is now (incorrectly) almost synonymous with the term AI. Machine learning models are generally categorized into two. Supervised and Unsupervised learning models. In this article we shall take a look at Supervised Learning models, how they work and different concepts associated with it.

## What is Supervised Learning

Supervised learning is a field of machine learning where mathematical models are trained on labeled data from datasets using the input and expected output inorder for the model to learn the relationship between the input and output. That aim is for the models to be able to predict data from new unseen data.

## Problems in Supervised learning

Problems in Supervised learning are usually classified into two kinds. Supervised learning models primarily address two types of problems. Regression and Classification models.

**Regression problems** are problems that require a model that predicts continuous values. Think of a problem which requires us to predict the price of a house, we are to create a model that takes inputs which are various characteristics like location, size etc, and from these inputs we predict a price. We can also have problems that predict more than one value and these are called multivariable regression problems. Take an example of a model that predicts the age and height of a tree.

**Classification Problems** on the other hand are problems that produce a categorical output, for example a model that predicts if it will rain or not. This is actually called a binary Classification problem since the output has only two states to exist. However, the model can predict an output that can be in one of more than 2 possible categories. These are called multiclass classification problems. Take an example of a model that predicts what animal is in a picture, and the animal can be anything from a dog, cat, cow, goat etc.

## Supervised Learning Models

In supervised learning, we aim to build models that take an input $$x$$ and predict an output $$y$$. The model is a mathematical equation $$f[•]$$  that takes inputs $$x$$ and predicts $$y$$. We can then represent the output as $$y = f(x)$$.

This process of computing a prediction $$y$$ from $$x$$ through the model is called **inference**

The model is a fixed equation that contains parameters $$\theta$$, the choice of parameters $$\theta$$ determines the relationship between the input and prediction. Therefore the prediction $$y$$ varies based on the parameters. We can then rewrite the equation to support the parameters $$\theta$$ as.

$$ y = f[x,\theta] $$

When we say we are _training a model_, we are feeding the models with input output pairs $$(x, y)$$ and aim to find the parameters $$\theta$$ that match inputs $$x$$ to outputs that are as close as possible to the expected output $$y$$.

The mismatch between the output and expected output is called the _loss_ $$L$$. This loss is a scalar value that describes how poorly our model predicts the expected output. We can treat the loss as a function $$L(\theta)$$ of the parameters $$\theta$$. Generally we are training the model to find the parameters that minimize the loss as possible.

After training a model, we must now assess its performance; we run the model on separate test data to see how well it generalizes to examples that it didn’t observe during training. If the performance is adequate, then we are ready to deploy the model.

### Model Inputs

Learning models are usually mathematical equations that take inputs in numerical form, but in the real world, these inputs appear in a variety of formats, so we have to find a way to encode them into numerical form.

Inputs and how they are interpreted can vary in different forms, for example if we are predicting the price of a house, the inputs are location, number of bedrooms etc and it doesn't matter the order in which they are input, the model is expected to predict the same price. Now take an example of a model that predicts if a sentence is realistic or not, the sentences, _"my wife ate the chicken"_ and _"the chicken ate my wife"_ are the same in terms of the words they consist of but the order is different hence the meaning and the expected model prediction is different.

### Model Outputs

The output of the model also varies wildly depending on the type of the problem. Although we said the problems being solved are regression or classification problems, the output in real world applications is not usually a single value (as in classification or regression) but a structured object, such as a sequence, tree, or graph. For example a Speech recognition model that transforms audio waveforms to a sequence of words.

## Conclusion

This is just an overview of Supervised learning models, in the next article,  we shall look at a Practical example using Linear Regression. However, if you want to learn more about supervised learning models, I would recommend Reading Chapter 2 and 3 of the [Understanding Deep Learning Book](https://udlbook.github.io/udlbook/).

