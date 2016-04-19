A little example about ng2 with gulp task.

Requirements
====
* NodeJS 0.12.0
* Typings (npm install --global typings)
* Gulp (npm install --global gulp-cli)
* Notify-send (Only in Linux)

Simple Usage
====

Install npm packages
```shell
npm install
```
Install typings
```shell
typings install
```

Run command
```shell
gulp watch
```

Tasks
====
For copy assets
```shell
gulp copy
```

For compile typescript
```shell
gulp typescript
```

For run a static server
```shell
gulp server
```

For deploy
```shell
gulp
```

For simple watch
```shell
gulp watch
```

Note
====
For compiling in ES6, follow next steps:

1. Change tsconfig.json
```javascript
"target": "es6"
```
2. Delete the next line in boot.ts
```typescript
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
```
