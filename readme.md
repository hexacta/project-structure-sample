# Project Structure Sample

This repostory complements a [medium post explaining a project structure focused on keeping back end and front end separated](https://medium.com/@pomber/do-not-mix-front-end-and-back-end-530d55b998a5).

## Getting Started

First thing you need to do is install dependencies:
```
$ npm install
```

Then you can run the SPA and the API in development mode (watching for changes) with:
```
$ npm start
```

And, if you have docker installed, you can dockerize it and run it with:
```
$ npm start:docker
```

### web and api folders

Each folder has its own scripts you can run if you just want to work in one part of the app.

## npm scripts

### npm install
`npm install` will install the root folder (development) dependencies, and after that do the same with `web` dependencies and `api` dependencies.

### npm start
`npm start` will run both subfolders' `npm start` in parallel using [`npm-run-all`](https://github.com/mysticatea/npm-run-all).

### npm run build
`npm run build` will run both subfolders' `npm run build` in parallel.

### npm run start:docker
`npm run start:docker` first call `npm build` then build, create and start two containers, one for node running the api, and the other running nginx serving the static SPA files and proxying all requests starting in `/api/` to the node container.  
After that it opens a browser on "http://localhost:8000/".

You can stop the containers with `npm run stop:docker`.

## License

MIT © [Hexacta](https://www.hexacta.com)