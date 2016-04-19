A little example about ng2 with gulp task.

Simple Usage
====

Install npm packages
```shell
npm install

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

2. Comment the next line

```typescript
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
```
