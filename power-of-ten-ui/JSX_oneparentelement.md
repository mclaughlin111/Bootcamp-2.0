### Why must a JSX expression have one parent element?

JSX expressions must have a single parent element because they compile down to `React.createElement()` calls, and each component must return one node to be rendered in the DOM. Without a parent element, JSX wouldn't know how to handle multiple root elements.

For example, this will throw an error:

```
return (
  <div>First Element</div>
  <div>Second Element</div>
);
```

To fix this, wrap the elements in either a single parent element or a React Fragment (<></>), which doesn’t add extra nodes to the DOM.

Using a fragment:

```
return (
  <>
    <div>First Element</div>
    <div>Second Element</div>
  </>
)
```
