# How to create a responsive custom video player in React

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/se424m2u3q6cs4hs01x6.png)

Video players are essential for applications that showcase video content. While the default HTML5 player offers basic functionalities like play, pause, and volume control, its appearance can vary significantly across browsers and devices.  This inconsistency can be a drawback for a polished user experience.

In this article, we'll guide you through creating a responsive custom video player using a library I built called `reactjs-media`. This approach lets you avoid the limitations of the default HTML5 player and the complexity of building a video player from scratch. The reactjs-media library provides more react approach to building your custom player with a wide range of features and customization options.

> UPDATE: The reactjs-media documentation was shifted to [https://orbiton.js.org/open-ug/reactjs-media/intro](https://orbiton.js.org/open-ug/reactjs-media/intro)


<!--truncate-->

## Getting started

Before we dive into building our custom video player, I assume your already have a React project set up. If not, you can create a new React project using Create React App or Vite or any of your preferred React setup.

We shall then go ahead and install the reactjs-media library using npm or yarn.

```bash
npm install reactjs-media
```

or

```bash
yarn add reactjs-media
```

## Creating a custom video player

To create a Video player we shall start with the default player provided by the library(Which is Awesome too).

All you have to do is import the `Video` component from `reactjs-media` 

```jsx
import { Video } from "reactjs-media";

const App = () => {
  return (
    <div>
      <Video
        src={"/video.mkv"}
        controls={true}
        height={500}
        width={800}
        poster={
          "https://hips.hearstapps.com/hmg-prod/images/ripley-pa-108-011822-01629-r-661067043d66f.jpg?resize=980:*"
        }
      />
    </div>
  );
};
```

**And Voila!** You have a video player in your application.

![reactjs-media video player](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bsxsuwlbusxeve0zf1em.png)

![reactjs-media video poster](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l9zb7fepyracfsxv92qf.png)

## What are the props?

The Video Component accepts a number props that are defined under the `VideoProps` interface(If you use TypeScript in your Projects). These can be both attributes of the player or event handlers.

We shall start with the basics:

- `src`: The source of the video file.
- `controls`: A boolean value to show or hide the video controls. It defaults to `false`
- `height`: The height of the video player.(This is added as `maxHeight` in the styles)
- `width`: The width of the video player.(This is added as `maxWidth` in the styles)
- `poster`: The poster image to be displayed before the video starts playing.
- `contextMenu`: A boolean value to show or hide the context menu. It defaults to `false`


## Handling Events

The Video Component also provides a number of event handlers that you can use to listen to events on the video player.

- `onPlay`: This event is fired when the video starts playing.
- `onPause`: This event is fired when the video is paused.
- `onEnded`: This event is fired when the video has ended.
- `onTimeUpdate`: This event is fired when the video is playing and the time is updated.
- `onVolumeChange`: This event is fired when the volume of the video is changed.
- `onSeeking`: This event is fired when the video is seeking.
- `onSeeked`: This event is fired when the video has finished seeking.
- `onCanPlay`: This event is fired when the video can be played.

Example:

```jsx
<Video
  src={"/video.mkv"}
  controls={true}
  height={500}
  width={800}
  poster={
    "https://hips.hearstapps.com/hmg-prod/images/ripley-pa-108-011822-01629-r-661067043d66f.jpg?resize=980:*"
  }
  onPlay={() => console.log("Video is playing")}
  onPause={() => console.log("Video is paused")}
  onEnded={() => console.log("Video has ended")}
  onTimeUpdate={(time) => console.log("Time is updated", time)}
/>

```

> **Note:** If you want to build a player with your own Completely Custom UI. You can check out the [Building a custom player](https://open.cranom.tech/reactjs-media/building-custom-player) guide in the `reactjs-media` documentation.


## Conclusion

In this article, we have learned how to create a responsive custom video player in React using the `reactjs-media` library. This library provides a set of components and a simple API to create a customizable media player for your application. You can explore more features and customization options by checking out the [`reactjs-media` documentation](https://open.cranom.tech/reactjs-media/intro).
