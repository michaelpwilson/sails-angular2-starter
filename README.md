# sails-angular2-starter

A Sails.js Angular2 starter application

## Install

Clone this repository:

```bash
git clone https://github.com/begot/sails-angular2-starter.git
```

Enter the directory and install the required dependencies:

```bash
npm install
```

This will install all dependencies for Sails.js and Angular2. When you lift the application, the Angular2 dependencies from ```node_modules/``` will be copied into ```assets/js``` so they can be included in your ```layout.ejs```.

## Pipeline
You can choose which Angular2 dependencies to use, change the order.

Note: when included your Angular2 project files, don't include the ```.ts``` version, make sure its the compiled ```.js``` file.

tasks/pipeline.js:

```javascript
// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here
  'js/dependencies/**/*.js',

  // angular 2 node modules
  'js/node_modules/es6-shim/es6-shim.min.js',
  'js/node_modules/systemjs/dist/system-polyfills.js',
  'js/node_modules/angular2/bundles/angular2-polyfills.js',
  'js/node_modules/systemjs/dist/system.src.js',
  'js/node_modules/rxjs/bundles/Rx.js',
  'js/node_modules/angular2/bundles/angular2.dev.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/**/*.js',

  // Use the "exclude" operator to ignore files
  // '!js/ignore/these/files/*.js'
];
```

## TypeScript

Angular2 TypeScript files are compiled using [sails-hook-typescript](https://github.com/begot/sails-hook-typescript) which will already be watching files inside ```assets/js```

### Livereload

To achieve the Live reload for changes, make sure to have the [Live reload chrome plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

### Files

1. [main.ts](https://github.com/begot/sails-angular2-starter/blob/master/assets/js/main.ts)
2. [app.component.ts](https://github.com/begot/sails-angular2-starter/blob/master/assets/js/app.component.ts)

### Run

```bash
sails lift
```

### Watch this space

1. I will be including a better angular2 demo with Sails.
2. I will be creating a Angular2 service to communicate with the Sails.js blueprint API, similar to [angular-sails](https://github.com/janpantel/angular-sails).