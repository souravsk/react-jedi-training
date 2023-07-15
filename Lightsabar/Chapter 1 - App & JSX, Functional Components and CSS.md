# Chapter 1 - App & JSX, Functional Components and CSS

1. App & JSX:
    - In a React application, the **`App`** component serves as the entry point or the root component of your application.
    - JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It's used in React to describe the structure and content of components.
    - The **`App`** component typically returns JSX code that represents the structure of your application's user interface.
2. Functional Components:
    - In React, functional components are JavaScript functions that return JSX to define the structure and content of a component.
    - Functional components are also sometimes called "stateless components" because they don't have their own internal state.
    - They receive props (properties) as arguments, which allow you to pass data from a parent component to the functional component.
    - Functional components are simpler and often preferred over class components, especially when you don't need to manage state or use lifecycle methods.
3. CSS:
    - CSS (Cascading Style Sheets) is a language used for describing the visual style and presentation of a document written in HTML (or JSX in the case of React).
    - In React, you can apply CSS to your components using different approaches:
        - Inline Styling: You can add inline styles directly to JSX elements using the **`style`** prop. For example: **`<div style={{ color: 'red' }}>Hello</div>`**.
        - CSS Modules: CSS Modules are a way to write modular CSS in React. You can create a separate CSS file for each component and import it into the component to apply the styles. The styles are scoped to the specific component, avoiding conflicts with other components.
        - CSS-in-JS Libraries: React also offers various CSS-in-JS libraries like styled-components and emotion. These libraries allow you to write CSS styles directly in your JavaScript code, usually using template literals or special syntax.

By combining these concepts, you can create dynamic and visually appealing user interfaces in your React applications. The **`App`** component serves as the entry point, JSX is used to define the UI structure, functional components allow you to create reusable and modular components, and CSS helps you style and design your components to create a visually appealing interface.

Here's an example of a simple functional component in React:

```jsx

import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a functional component.</p>
    </div>
  );
};

export default MyComponent;

```

In the code above, we import the necessary React library and define a functional component called **`MyComponent`**. The component is defined as a arrow function that takes no arguments. Inside the function, we return JSX that represents the structure and content of our component.

Functional components are often used when you don't need to manage state or use lifecycle methods. However, with the introduction of React Hooks in newer versions of React, functional components can also handle state and lifecycle functionalities using hooks like **`useState`** and **`useEffect`**.

To use the functional component in another part of your React application, you can import it and include it in the JSX of another component. For example:

```jsx

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <MyComponent />
    </div>
  );
};

export default App;

```

In this example, we import **`MyComponent`** and include it as a child component within the **`App`** component. When the **`App`** component is rendered, it will also render **`MyComponent`** within it.

Functional components offer a simple and concise way to create reusable UI components in React. They are widely used in React applications, especially when managing complex state and lifecycle methods is not necessary.