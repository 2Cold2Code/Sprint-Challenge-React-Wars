# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

  A.)  React JS is a javascript-based library that allows the use of dynamic memory - changes in state - in the application, solving the problem of large applications changing data often, normally slowing the application execution down.
  
1. Describe component state.

  A.)  Component state is the data that is expected to change a/o shared.  It is like a variable with an event listener that listens for that change (but not necessarily act on it like useEffect does) and tells everywhere that has that variable to update its data when set to a new value (upon the next render).

1. Describe props.

  A.)  If a component is a function (and it is), then props are the arguments that that function needs to pass when it is called.  When props are passed into the component function, the function takes those arguments as parameters and applies them where called in the function.  This means that a parent component 'sets' the arguments as its child's parameters and the child is responsible for manipulating the argument that is passed.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

  A.)  Side effects (or 'Effects') are any changes a function attempts to make outside of its body.  By using 'useEffect' and passing the action you wish performed, by default that action will make changes on any state specified in it upon each render, including on mount. To make it only occur on mount, an empty array is passed as the dependency, and to make it trigger the effect only when a specific state is (or states are) changed, place those variables as the indices of the dependency array.