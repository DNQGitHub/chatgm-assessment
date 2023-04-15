# Getting Started #

## Prerequisites ##

``` 
npm install 
npm run postinstall
```

***NOTE*** : run `npm run postinstall` on every single `npm install`

---

## Run dev mode ##

IOS
```
npm run ios
```

Android
```
npm run android
```

## Run test unit-test ##

```
npm run test:unit-test
```

## Run test e2e ios ##

```
npm run test:e2e:ios
```

## Demo ##

...

## Explain test method decision ##

### Unit Test ###

For unit test, I use normal jest to make a simple unit test.  
Check out test file at `__test__/unit-test.ts`

### E2E Test ###

For e2e test, I use detox to make simple e2e test.  
Check out test file at `e2e/stater.test.js`

The test cases:

- [x] App Launch
- [x] Add New Todo
- [x] Edit Todo
- [x] Delete Todo

## Benefit of set up state management ##

I use `Redux` for global state management.  

Benefits of `Redux`:
- Makes the state predictable
- Maintainable
- Easy to debug
- Performance benefits
- ...

## Demontrate how you will place different components or containers of a large React Native components and explain your decision ##

I separate app into many modules. Modules `app` will be the root modules. Each modules will have their components, contexts, redux-slices, redux-sagas,... so that we can focus on each module to maintain the source code.

Each module will have many scenerios that do some actions. Ex adding a new todo. I prepare the context of adding new todo and then create a provider to manage the logic and local state. The provider and useContext will have us prevent deep drilling props. Use hook make the logic separate from component code , that make us easier to maintain the component code

Manage the little best will make it easier to manage the bigger