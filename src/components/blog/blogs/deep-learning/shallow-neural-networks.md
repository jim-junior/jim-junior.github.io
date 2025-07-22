# Shallow Neural Networks

Shallow neural networks describe piecewise linear functions and good at expressing complex relationships between multi dimensional inputs and outputs. Piecewose functions are functions that are composed of multiple linear segments(i.e the slope of the function changes at certain points ) and each segment corresponds to a sections of values in the domain. forexample:

$$
f(x) = 
\begin{cases}
2x + 1 & \text{if} \ x < 0 \\
-3x + 2 & \text{if} \ x \geq 0
\end{cases}
$$

## How do Shallow neural networks work.

Lets take an example of a nueral network $$y = f[x,\theta]$$, this nueral network is a function that takes an input $$x$$ and has parameters $$\phi$$. Say when we expand the equation we get

$$
y = \phi_0 + \phi_1 a(\theta_{10} + \theta_{11}x) + \phi_2 a(\theta_{20} + \theta_{21}x) + \phi_3 a(\theta_{30} + \theta_{31}x)
$$

If you analyse the abov equation clearly, you can split it into multiple components which are, the linear functions ($\theta_{10} + \theta_{11}x$, $\theta_{20} + \theta_{21}x$, $\theta_{30} + \theta_{31}x$), an activation $a[\cdot]$, weights $\phi_1, \phi_2, \phi_3$ and bias $\phi_0$

The set of linear functions are what we call *hidden units* and we can brake them down to

$$
h_1 = a(\theta_{10} + \theta_{11}x)
$$

$$
h_2 = a(\theta_{20} + \theta_{21}x)
$$

$$
h_3 = a(\theta_{30} + \theta_{31}x)
$$

and once we are done calculating them, we then multiply them to the weights and sum it all up with the bias as so

$$
y = \phi_0 + \phi_1 h_1 + \phi_2 h_2 + \phi_3 h_3
$$

The activation function $a[\cdot]$, is there to add non-linearity to the neural network.without it, the neural network is just a big linear equation. There are many examples of activation functions but the most common one and the one we shall use is called *rectified linear unit* or ReLU. its a function that returns the zero($0$) if the input is negative otherwise it returns the same input i.e

$$
\text{ReLU}(z) =
\begin{cases}
0 & \text{if } z < 0 \\
z & \text{if } z \geq 0
\end{cases}
$$

Activation functions accomplish this non-linearity by determining what neuron in the neural network is active or inactive basing on the input. Take an example where we have the following parameters.



| Parameter     | Value |
| ------------- | ----- |
| $\theta_{10}$ | -1    |
| $\theta_{11}$ | 1     |
| $\theta_{20}$ | 0     |
| $\theta_{21}$ | 1     |
| $\theta_{30}$ | 1     |
| $\theta_{31}$ | 1     |
| $\phi_0$      | 0     |
| $\phi_1$      | 2     |
| $\phi_2$      | -1    |
| $\phi_3$      | 1     |

The neural network equation becomes

$$
h_1 = \text{ReLU}(-1 + 1 \cdot x)
$$

$$
h_2 = \text{ReLU}(0 + 1 \cdot x)
$$

$$
h_3 = \text{ReLU}(1 + 1 \cdot x)
$$

$$
y = 0 + 2 \cdot h_1 - 1 \cdot h_2 + 1 \cdot h_3
$$

**Case 1: $x = -2$**

$$
h_1 = \text{ReLU}(-1 + (-2)) = \text{ReLU}(-3) = 0
$$

$$
h_2 = \text{ReLU}(0 + (-2)) = \text{ReLU}(-2) = 0
$$

$$
h_3 = \text{ReLU}(1 + (-2)) = \text{ReLU}(-1) = 0
$$

$$
y = 0 + 2 \cdot 0 - 1 \cdot 0 + 1 \cdot 0 = 0
$$

**Output for $x = -2$ is 0**

---

**Case 2: $x = 0$**

$$
h_1 = \text{ReLU}(-1 + 0) = \text{ReLU}(-1) = 0
$$

$$
h_2 = \text{ReLU}(0 + 0) = \text{ReLU}(0) = 0
$$

$$
h_3 = \text{ReLU}(1 + 0) = \text{ReLU}(1) = 1
$$

$$
y = 0 + 2 \cdot 0 - 1 \cdot 0 + 1 \cdot 1 = 1
$$

**Output for $x = 0$ is 1**

---

**Case 3: $x = 1$**

$$
h_1 = \text{ReLU}(-1 + 1) = \text{ReLU}(0) = 0
$$

$$
h_2 = \text{ReLU}(0 + 1) = \text{ReLU}(1) = 1
$$

$$
h_3 = \text{ReLU}(1 + 1) = \text{ReLU}(2) = 2
$$

$$
y = 0 + 2 \cdot 0 - 1 \cdot 1 + 1 \cdot 2 = -1 + 2 = 1
$$

**Output for $x = 1$ is 1**

---

**Case 4: $x = 3$**

$$
h_1 = \text{ReLU}(-1 + 3) = \text{ReLU}(2) = 2
$$

$$
h_2 = \text{ReLU}(0 + 3) = \text{ReLU}(3) = 3
$$

$$
h_3 = \text{ReLU}(1 + 3) = \text{ReLU}(4) = 4
$$

$$
y = 0 + 2 \cdot 2 - 1 \cdot 3 + 1 \cdot 4 = 4 - 3 + 4 = 5
$$

**Output for $x = 3$ is 5**

At small $x$, all the ReLUs are **inactive** (outputs 0) → output is 0.
As $x$ increases, **hidden units "turn on"** at different points:

* $h_3$ activates first at $x > -1$
* $h_2$ activates at $x > 0$
* $h_1$ activates at $x > 1$

### Universal Approximatation Theorem

In the above example we have shown a neural network with only 3 hidden units, however a shallow neural network can have very many hidden units depending on the complexity/continuity of the function its trying to describe. We can generalize this and consider the case with $D$ hidden units where the $dth$ hidden unit is:

$$
h_d = a(\theta_{d} + \theta_{d}x)
$$

And when combined linearily we can come up with the output layer equation

$$
y_j = \phi_{j0} + \sum_{d=1}^{D} \phi_{jd} h_d
$$

In summary, the Universal Approximatation Theorem proves that *or any continuous function, there exists a shallow network that can approximate this function to any specified precision.*

### Multivariant Inputs and Outputs

THe above example that we have been working with only has one input and one output. But in the gereal case you will find that, you have a neural network that takes in multiple inputs and predicts multiple outputs. In that case the functional representation changes. Lets take and example of a neural network that has 3 inputs $x=[x_1, x_2, x_3]$ and 3 outputs $y=[y_1, y_2]$, in that case we can represent the hidden units as follows:

$$
h_1 = \text{ReLU}(\theta_{10} + \theta_{11}x_1 + \theta_{12}x_2 + \theta_{13}x_3)
$$

$$
h_2 = \text{ReLU}(\theta_{20} + \theta_{21}x_1 + \theta_{22}x_2 + \theta_{23}x_3)
$$

$$
h_3 = \text{ReLU}(\theta_{30} + \theta_{31}x_1 + \theta_{32}x_2 + \theta_{33}x_3)
$$

and the output layer equations are defined as

$$
y_1 = \phi_{10} + \phi_{11} h_1 + \phi_{12} h_2 + \phi_{13} h_3
$$

$$
y_2 = \phi_{20} + \phi_{21} h_1 + \phi_{22} h_2 + \phi_{23} h_3
$$

From these equations, we can derive a **General Case equation** where the input $x = [x_1, x_2, ..., x_{D_i}] \in \mathbb{R}^{D_i}$ and the output $y = [y_1, y_2, ..., y_{D_o}] \in \mathbb{R}^{D_o}$ whereby $D_i$ = *Number of input features (dimensions)* and $D_o$ = *Number of outputs*. In this case each hidden unit computes:

$$
h_d = a \left( \theta_{d0} + \sum_{i=1}^{D_i} \theta_{di} x_i \right)
$$

and the output layer equation is

$$
y_j = \phi_{j0} + \sum_{d=1}^D \phi_{jd} h_d
$$
