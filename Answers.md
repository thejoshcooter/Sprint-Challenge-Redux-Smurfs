1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?  
A: Three methods that we can use our .map, .concat, and .filter. When copying and extending an object we can use Object.assign() or ...spread.  

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?  
A: Actions are like descriptors which return an object that tells the reducer what to do by passing an action type and payload. Reducers are the pure functions that return new state in an immutable fashion. The store is like a giant JS object that contains all of our state data.  

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?  
A: Application state is a higher level state that can be controlled by our store and made available globally, while component state is localized to the component that we are working with because it might only be relevant to that particular component.  

1.  What is middleware?  
A: Middleware is essentially a middleman that catches actions before they hit the reducer, allowing us to hold things before we do something with them - like async functions.  

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?  
A: Thunk is a middleware that catches actions before they hit the reducer, allowing us to hold something temporarily for things like async functions. Our action-creators have access to the dispatch method and can return nested functions.  

1.  Which `react-redux` method links up our `components` with our `redux store`?  
A: connect()
