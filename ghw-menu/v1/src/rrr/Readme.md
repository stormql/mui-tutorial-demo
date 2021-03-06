
This is a slightly modified version of

[react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)

with the
[latest commit](https://github.com/ReactTraining/react-router/pull/6014)
added in...

As the released version was published over
[7 months ago](https://www.npmjs.com/package/react-router-redux)

## Project Deprecated

This project is no longer maintained. For your Redux <-> Router syncing needs, please see one of these libraries instead:

* [connected-react-router](https://github.com/supasate/connected-react-router)

# react-router-redux

[![npm version](https://img.shields.io/npm/v/react-router-redux/next.svg?style=flat-square)](https://www.npmjs.com/package/react-router-redux) [![npm downloads](https://img.shields.io/npm/dm/react-router-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-router-redux) [![build status](https://img.shields.io/travis/reactjs/react-router-redux/master.svg?style=flat-square)](https://travis-ci.org/reactjs/react-router-redux)

> **Keep your state in sync with your router** :sparkles:

## Versions

This (react-router-redux 5.x) is the version of react-router-redux for use with react-router 4.x.
Users of react-router 2.x and 3.x want to use react-router-redux found at [the legacy repository](https://github.com/reactjs/react-router-redux).

## Installation

```
npm install --save react-router-redux@next
npm install --save history
```

## Usage

Here's a basic idea of how it works:

```jsx
import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

import reducers from "./reducers"; // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
```
