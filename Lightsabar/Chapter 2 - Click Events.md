# Chapter 2 - Click Events

In React, you can use the **`onClick`** event to handle user clicks on elements such as buttons, links, or other interactive components. The **`onClick`** event is passed as a prop to the component and takes a callback function that will be executed when the event occurs.

Here's an example of how to use the **`onClick`** event in a React component:

```

import React from 'react';

const MyComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;

```

In this example, we define a functional component called **`MyComponent`**. Inside the component, we declare a function **`handleClick`** that will be called when the button is clicked. In this case, it logs a message to the console.

The **`onClick`** event is added to the button element as a prop, and we pass the **`handleClick`** function as the callback. When the button is clicked, React will execute the **`handleClick`** function.

You can also use an anonymous arrow function directly in the **`onClick`** prop, like this:

```

<button onClick={() => console.log('Button clicked!')}>Click me</button>

```

In this case, the arrow function is defined inline and will be called directly when the button is clicked.

Using the **`onClick`** event, you can perform various actions such as updating state, making API requests, navigating to different pages, or triggering other functions based on user interactions.