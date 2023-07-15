# Chapter 3 - useState Hook

The **`useState`** is a hook provided by React that allows you to add and manage state in functional components. State is simply a piece of data that can change over time and affects how your component renders and behaves.

With **`useState`**, you can create a state variable and a corresponding function to update that variable. Here's a step-by-step breakdown:

1. Import the **`useState`** hook from the 'react' module:
    
    **`import React, { useState } from 'react';`**
    
2. Declare a state variable and its updater function using **`useState`**:
    
    **`const [variable, setVariable] = useState(initialValue);`**
    
    - **`variable`** is the state variable that will hold the data.
    - **`setVariable`** is the function that you'll use to update the state variable.
    - **`initialValue`** is the initial value for the state variable.
3. Use the **`variable`** to access the current value of the state in your component.
4. Use the **`setVariable`** function to update the state variable whenever needed.
    
    **`setVariable(newValue);`**
    
    - **`newValue`** is the new value you want to assign to the state variable.

By calling **`setVariable(newValue)`**, React will update the state variable and trigger a re-render of your component, causing the UI to reflect the updated state.

Here's a simple example that increments a counter using **`useState`**: