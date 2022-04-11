# Review 4/8/22 - React Fundamentals

## Props

- Data passed from parent to child components
- Props is an object

Example:

```jsx
<Child props1="some value" props2={10 * 34} />;

function Child(props) {
  /*
    {
        props1: "some value",
        props2: 340
    }
    */
}
```

## State

- Handles values within a component, that persist throughout the lifecycle of a component
- Changing state causes a component to re-render
- Use `this.setState` to update state values
- State is an object (class components)

```jsx
class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state1: true,
      state2: "Hello World",
    };
  }
}
```

## Component Lifecycle

1.\* Component is _instantiated_ with `constructor`

1. Component is _rendered_ with `render`
2. Component is _mounted_ to the DOM tree, `componentDidMount`
3. Component is _updated_ in the DOM tree, `componentDidUpdate`
4. Component will be _unmounted_ from the DOM tree, `componentWillUnmount`

## Rendering Lists in React

- Arrays of JSX
- Always include a unique _key_ prop per array element that is rendered

Example:

```jsx
let arr = [1, 2, 3, 4, 5];

return (
  <ul>
    {arr.map((num, index) => (
      <li key={`u${num}xy${index}`}>{num}</li>
    ))}
  </ul>
);
```

## Controlled Inputs

- State values that control input values

Example:

```jsx
class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  updateEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    <input type="email" value={this.state.email} onChange={this.updateEmail} />;
  }
}
```
