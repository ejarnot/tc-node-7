# Review 4/14/22 - React

## Component

- Can be a class
  - Must have a `render` method that returns JSX
- Can be a function
  - Block of code that can be called (i.e. a function)
  - Returns JSX
- Intended to be reusable
- JSX, JavaScript XML, resembles HTML, but is not

## State

- Persistent values that, when updated, cause a component to re-render

### Class Component

- Defined with `this.state = { ... }` in the constructor
- Updated with `this.setState({ ... })`

```jsx
class App {
  constructor(props) {
    super(props);

    this.state = {
      title: "Hello World",
      count: 0,
    };
  }

  render() {
    return (
      <h1 onClick={() => this.setState({ title: "New Title" })}>
        {this.state.title}
      </h1>
    );
  }
}
```

### Functional Component

- Defined through the `useState()` hook
- Destructure the state value and updater function

```jsx
import { useState } from "react";

const App = () => {
  let [title, setTitle] = useState("Hello World");
  let [count, setCount] = useState(0);

  return <h1 onClick={() => setTitle("New Title")}>{title}</h1>;
};
```

## Props

- Data passed from parent to child components
- Is an object

```jsx
const Child = (props) => {
  return <h1>{props.title}</h1>;
};

const Parent = () => {
  return <Child title="Hello World" />;
};
```

## Component Lifecycle

Instance is created (class components)

1. Component is rendered
2. Component is mounted

State changes

3. Component is re-rendered
4. Component is updated

Component is removed

5. Component is unmounted

### Lifecycle Methods

1. `componentDidMount`: Called after component is mounted
2. `componentDidUpdate`: Called after component is updated
3. `componentWillUnmount`: Called right before the component is removed from the DOM

### useEffect

- Combines all three previously mentioned lifecycle methods

```jsx
useEffect(() => {
  // do something after initial render
  // and only after re-renders
  // if value1 or value2 has changed
}, [value1, value2]);
```

## Rendered Lists

- Returning an array of JSX
- Each list item must have a unique `key` prop

```jsx
const students = ["Ben", "Cruz", "Seth", "Michael"];
const lis = [
  <li key="ben0">Ben</li>,
  <li key="cruz1">Cruz</li>,
  <li key="seth2">Seth</li>,
];

const List = () => {
  return (
    <div>
      {lis}
      {students.map((name, index) => (
        <span key={`${name}${index}`}>{name}</span>
      ))}
    </div>
  );
};
```

## Controlled Inputs

- Inputs that are controlled by state values
- When input values change, state values change causing a re-render

```jsx
import { useState } from "react";

const Input = ({ type, placeholder }) => {
  let [value, setValue] = useState("");

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
```
