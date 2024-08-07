Notes from John Smilga Tutorials

## Initial

1. Allows you to build fullstack application quickly and the reason for this is that because write out of the box it comes with bunch of the features, for example routing. In traditional react apps we are responsible and setting up the route. In nextjs we have decide the route segment, setup the folder in the app directory. 
2. Don't need to build server code separately.

## Creating a nextjs application
1. Route name depends on the folder name created created inside app folder


## Tailwind CSS
1. DaisyUI is a library built on top of tailwind
2. Layout.js
   1. Wraps out our entire application for UI
   2. Doesn't re-render when route changes if you want that feature use template.js
   3. Whatever component you add in RootLayout, it will be shared across the application. 


## Difference between react
1. No need to setup routing, create a folder with the route name 
2. There are two type of components
   1. Server component (default)
   2. Client Component
3. Create loading by creating loading.js file in the folder of the page

