# 3 Minutes to Orbiton JS | The Ultimate JavaScript UI library

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f4o5sini57do8wxonqgk.png" alt="Orbiton JS Logo" width="100%" />

The rise of web frameworks has made transformed web development as it was known to be. It has made it possible to ship web concepts to other platforms like mobile as desktop. With focus on front end development in JavaScript, libraries like React, Vue.js and Angular have played a great role in UI development and are taking the biggest portion of the Developer base. But this is changing, with new libraries like Svelte JS that are introducing new concepts like compiled frameworks. Speaking of new, [Orbiton JS](https://orbiton.js.org) comes into the picture. Its a new JavaScript library for building UI s, dubbed as “The Ultimate JavaScript library for building User Interfaces”.

Orbiton JS began as a rendering engine from the Media JS NPM package that was for using built HTML Media elements in a website. It was originally known as Pearl JS but due to naming conflicts on NPM it was renamed. Orbiton JS being new comes with latest trends in the web development world. It is built with for concepts in mind and these include the Performance, Size, Portability and easy adoption by the community. let me explain them in detail.

Orbiton focuses of Performance mainly, to archive this I writes code that tries to utilize minimal memory as possible based on how different JavaScript engines like V8 and Gecko compile and run JavaScript. Orbiton’s one-way data binding also makes sure everything is modular and fast. Although Orbiton JS utilizes the Virtual DOM it, uses an architecture that keeps operations fast to prevent long loops within your application. In an aim to keep performance to the peek, I am developing a new renderer that is built in Rust and compiled to web Assembly and this will be a game changer and will make performance even greater.

I Also try to keep Orbiton at a very small size with the core package plus the DOM renderer at only 11KB which is almost equal to only React's core package without ReactDOM which is around 120KB plus. Orbiton achieves this by using clean code and prevents unnecessary operations. When it comes to matters concerning portability, Orbiton’s core packages is written in universal JavaScript that can run in all JavaScript environments be it Node, Deno and in the browser. This makes it possible for you to run Orbiton in any platform and Orbiton has the concept of registering a custom renderer making it possible to ship Orbiton in any other platform like mobile. Orbiton was also built to easily adopt to the JavaScript Ecosystem by making it easy for Orbiton developers to utilize common JavaScript tools like webpack, babel and other tools. To archive this Orbiton has a set of utils like the official babel plugin and an SWC plugin( comming soon ) that transform JSX to Orbiton functions.

Lets also explore some of the amazing features of Orbiton JS. Orbiton JS uses a component based system making code reusable and Building UIs easy. Its is also written in Typescript so has a seem-less integration with typescript making it easy to catch bugs. Orbiton JS is also reactive in nature with features like state and other proposed features like Proxy-binders. Orbiton has also created the Orbiton-server package to enable server side Rendering in Orbiton. I am also realizing other amazing features in the major release like Fragments, Error boundaries, Context, Suspense, Co-current Rendering, Directives, Lazy Components and Portals. Some special features like Proxy-binders are also going to be introduced

Enough with the talk, lets get into developing something with Orbiton. As I stated Orbiton utilizes JSX so if you are familiar with HTML or JSX itself your are good to go. In order to quickly get started with Orbiton, I provided a quick start template. Install the template by running these commands in your terminal:

```sh
npx degit Orbitionjs/template my-app
```

then run

```sh
cd my-app
npm install
npm start
```

Make sure you have node js installed

Your can now go to the index.js file and create an element. Creating a simple element in Orbiton is easy

```jsx
import Orbiton, {append} from “orbiton”;
const Button = <button> Click Me</button>
append(Button, document.getElementById(“root”))
```

---

Since this article is just for introducing Orbiton I wont go into details on how to develop Orbiton Applications. You can visit the [Official documentation](https://orbiton.js.org/) for more on Orbiton JS. Or even you can view its [Source code on GitHub](https://github.com/Orbitonjs/orbiton). Well that’s all for today.

---

Thanks for reading this article.