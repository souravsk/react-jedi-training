# Chapter 4 - List and Keys

In React, a list refers to a collection of elements that you want to render dynamically. For example, an array of data representing a list of items. To render a list in React, you typically use the **`map`** method on the array to transform each item into a corresponding React element.

Here's a basic example of rendering a list in React:

```

import React from 'react';

const MyList = () => {
  const items = ['Apple', 'Banana', 'Orange'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default MyList;

```

In this example, we have an array called **`items`** containing strings representing fruits. We use the **`map`** method on **`items`** to iterate over each element and create a new React element for each item.

Inside the **`map`** function, we return a **`<li>`** element for each item in the array. We assign a unique **`key`** prop to each **`<li>`** element. The **`key`** prop helps React identify each element efficiently when it performs updates, such as reordering or removing items from the list.

The **`key`** prop should be a unique identifier for each item in the list. In this simple example, we're using the **`index`** of each item as the key since the array elements are simple strings. However, it's generally recommended to use a unique identifier from your data instead of the index when working with more complex data structures.

By providing a unique **`key`** for each element in the list, React can keep track of them efficiently, improving performance and ensuring proper rendering and updates.

Remember, when rendering a list in React, make sure to assign a unique **`key`** prop to each element to help React efficiently manage and update the list.

# Let’s make a kind of todo list

First, I have created a useState which has an array of objects.

then i created two handles one handleCheck and the other on is handleDelete

handleCheck - it