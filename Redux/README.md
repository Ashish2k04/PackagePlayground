# Redux Toolkit + React Redux

A small React counter app built to understand how **Redux Toolkit** and **React Redux** manage shared application state in a React application.

The app stores a counter value in a Redux store and lets the user increment or decrement it using buttons.

## Installation

From this directory (`Redux/frontend`), install all packages listed in `package.json`:

```bash
npm install
```

### Main Packages

#### Redux Toolkit

```bash
npm install @reduxjs/toolkit
```

**What it does:** Provides tools for creating Redux slices and configuring a Redux store with less boilerplate.

**Used in this project:** `createSlice()` defines the counter state and its `increment` and `decrement` reducers. `configureStore()` creates the Redux store.

#### React Redux

```bash
npm install react-redux
```

**What it does:** Connects a Redux store to React components through a Provider and hooks.

**Used in this project:** `<Provider store={store}>` makes the store available to the React app. `useSelector()` reads the counter value and `useDispatch()` dispatches actions from the dashboard.

#### React

```bash
npm install react react-dom
```

**What it does:** React builds the component UI and React DOM renders it in the browser.

**Used in this project:** `App` renders the `Dashboard` component, and the dashboard displays the current count and counter controls.

> The commands above are for learning reference. You only need `npm install` to install this project's declared dependencies.

## Run the Project

Start the Vite development server:

```bash
npm run dev
```

Vite will print a local URL in the terminal, usually `http://localhost:5173`.

### Other Available Commands

```bash
npm run build
npm run lint
npm run preview
```

- `npm run build` — creates a production build in `dist/`.
- `npm run lint` — runs ESLint against the frontend code.
- `npm run preview` — serves the production build locally after building it.

## What the App Does

The dashboard displays a number and two buttons:

- **`+`** increments the count by one.
- **`-`** decrements the count by one.

The count is stored in Redux rather than inside the `Dashboard` component's local React state. This is a small example for learning the complete Redux data flow.

## Project Structure

```text
Redux/
└── frontend/
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        └── app/
            ├── App.jsx
            ├── app.store.js
            └── index.css
        └── features/
            ├── Dashboard.jsx
            └── counterSlice.js
```

## How the Redux Workflow Works

```text
User clicks + or -
        │
        ▼
Dashboard dispatches an action
        │
        ▼
counterSlice reducer runs
        │
        ▼
Redux store updates the counter state
        │
        ▼
useSelector reads the new value
        │
        ▼
React renders the updated count
```

### 1. Create the Slice — `src/features/counterSlice.js`

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
           state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

**What happens here?**

- `name` identifies the slice.
- `initialState` defines the initial counter value as `0`.
- `reducers` defines how the state changes for each action.
- `counterSlice.actions` generates action creators named `increment` and `decrement`.
- `counterSlice.reducer` is exported so the store can use it.

The `state.value += 1` and `state.value -= 1` syntax is supported here because Redux Toolkit uses Immer internally to produce immutable state updates.

### 2. Configure the Store — `src/app/app.store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counterSlice.js";

export const store = configureStore({
    reducer: {
        counter: counter
    }
});
```

`configureStore()` creates the Redux store. The key `counter` becomes the top-level key for this slice in the global state.

That is why the counter value is accessed with:

```js
state.counter.value
```

The reducer property could also use shorthand:

```js
reducer: {
    counter
}
```

### 3. Provide the Store to React — `src/main.jsx`

```jsx
import { createRoot } from 'react-dom/client';
import "../src/app/index.css";
import App from './app/App.jsx';
import { Provider } from 'react-redux';
import { store } from './app/app.store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
```

`Provider` makes the Redux store available to components throughout the wrapped React component tree.

Without the Provider, components using React Redux hooks would not be able to access this store.

### 4. Render the App — `src/app/App.jsx`

```jsx
import Dashboard from "../features/Dashboard";

const App = () => {
    return (
        <div>
            <Dashboard />
        </div>
    );
};

export default App;
```

`App` renders the `Dashboard` component. The dashboard contains the UI that reads and changes the counter state.

### 5. Read and Update State — `src/features/Dashboard.jsx`

```jsx
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Dashboard = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Dashboard;
```

**`useSelector()` reads state**

```js
const count = useSelector((state) => state.counter.value);
```

It selects `value` from the `counter` slice. When that selected value changes, React Redux causes the component to render with the updated value.

**`useDispatch()` sends actions**

```js
const dispatch = useDispatch();
```

It returns the store's dispatch function. Clicking the plus button dispatches the `increment` action:

```js
dispatch(increment());
```

Clicking the minus button dispatches:

```js
dispatch(decrement());
```

Redux sends the action to the relevant reducer, the store updates, and the new value appears in the UI.

## Important Concepts

| Concept | Meaning in this project |
| --- | --- |
| Store | Holds the application's Redux state |
| Slice | Groups the counter's initial state and reducers |
| Reducer | Describes how the counter changes for an action |
| Action creator | `increment()` or `decrement()` creates an action |
| Dispatch | Sends an action to the Redux store |
| Selector | Reads a chosen value from the store |
| Provider | Makes the store available to React components |

## Dependencies

The core application dependencies are:

- `@reduxjs/toolkit`
- `react-redux`
- `react`
- `react-dom`

The project also uses Vite and ESLint as development tooling. These are already declared in `package.json`; running `npm install` installs them too.

## Scope

This repository currently demonstrates a **synchronous counter workflow**. It does not currently include async thunks, API requests, Redux middleware configuration, multiple slices, or persistence. Those can be added as separate examples when learning more Redux Toolkit features.
