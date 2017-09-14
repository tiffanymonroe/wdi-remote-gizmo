
# TODO REACT LAB

### Exercise and practice: Single list item with internal state

If we _did_ want to make each separate list item a Component with internal state.

* Make a new component for a single listItem.

> New file: `SingleListItem.js`

![](https://i.imgur.com/Ann1QG1.png)

* import the component into **List**

![](https://i.imgur.com/WnEQC49.png)

Make it so our repeat template map uses the new **SingleListItem** component and passes in the props:

```javascript
const listItems = this.state.todosArray.map(item => <SingleListItem item={item} />)
```

![](https://i.imgur.com/ooqlI0t.png)

<br>

> File: **SingleListItem.js**

### render the incoming item prop in the template

![](https://i.imgur.com/XOqaBvn.png)

### set the state for our single list item

For our **SingleListItem** component, set state for a `completed` boolean.

![](https://i.imgur.com/kVQ1hFv.png)

Note that we are making a brand new piece of data for state, **completed**. We are not using props within our state, so we didn't need to use props as a parameter in our constructor.

Add in a handler for the click that changes the state:

![](https://i.imgur.com/uuYmz9M.png)

<br>

# Templating: conditional rendering

Depending on the state, render either a crossed out item or a regular one.

In Angular we would use `ng-if` to decide what to display. In React, it's all JavaScript, so we will use an if statement.

![](https://i.imgur.com/yRM45F1.png)



### refactor

For the conditional statement, alternatively, use a **ternary** operator:

```javascript
className={ this.state.completed ? 'strikeout' : '' })
```

![](https://i.imgur.com/kilDKuM.png)

Completed **SingleListItem** component

![](https://i.imgur.com/WkDWGJu.png)

<br>
<hr>
