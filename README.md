# GIFted

A front-row seat, to all the best GIFs around Internetown

## Features

**Dazzling GIFs!**

The GIFs are searched using GIPHY’s beta API, and are displayed as a neat masonry layout.

**Play/Pause GIFs**

The GIFs can be played/paused with a click.

**Recent searches**

Recent GIF searches are displayed in the homepage, and can be accessed again.
Maximum number of recent searches that could be displayed can be changed (through a configuration variable).

**Locally stored results**

Search results (URLs) are locally stored in the browser, and are cached (browser cache).
The locally stored data is cleared after a set period, and this duration can be changed (through a configuration variable).

**Infinite scrolling**

A new set of GIFs are loaded every time the page is scrolled to the end.
New requests are sent only when all the static images are loaded, there are no pending “play” requests on any GIFs.


----------


## Getting Started

Follow the commands given below to setup, and run the GIFted codebase on your local machine. 

    git clone git@github.com:alkshendra/GIFted.git
    cd GIFted
    yarn
    yarn start

If everything above works without any hiccup, you should be able to access the application in your browser, at `localhost:3000` 


## Configuration

The following configuration parameters (found in `src/config.js`) can be changed, to tweak the application's functionalities.

| **Parameter**         | **Description**                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------ |
| apiUrl                | API URL                                                                                    |
| apiKey                | API secret key                                                                             |
| limit                 | Number of posts that should be fetched in a single page                                    |
| cacheVaildityDuration | Time duration after which the locally saved search results for a term would be invalidated |



## Libraries

This project has been possible thanks to all the wonderful libraries below.

| **Library**                                                                                | **Description**                                                                                                                                                             |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [create-react-app](https://www.npmjs.com/package/create-react-app)                         | Generating the initial scaffolding of the application                                                                                                                       |
| [axios](https://www.npmjs.com/package/axios)                                               | Handling API requests                                                                                                                                                       |
| [localforage](https://www.npmjs.com/package/localforage)                                   | Storing time based search results in user’s machine.<br>localForage stores the results in IndexedDB, WebSQL, or localStorage depending on the user’s browser compatibility. |
| [react-masonry-css](https://www.npmjs.com/package/react-masonry-css)                       | Displaying posts in a masonry layout                                                                                                                                        |
| [react-progressive-image](https://www.npmjs.com/package/react-progressive-image)           | Loading the post images in a progressive manner                                                                                                                             |
| [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) | Simplifying the import paths in the project                                                                                                                                 |
| [node-sass](https://www.npmjs.com/package/node-sass)                                       | SASS/SCSS loader (used in webpack)                                                                                                                                          |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom)                         | Routing in the project                                                                                                                                                      |
