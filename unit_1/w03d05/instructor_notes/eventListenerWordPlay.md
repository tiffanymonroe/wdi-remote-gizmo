![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-GIZMO

---
Title: Event Listeners and Review this <br>
Type: lesson<br>
Creator: Jim Haff for WDI-Meeseeks<br>
Competencies: jQuery, Javascript, DOM <br>

---

## Add the window onload function to our code

```
// window.onload

$(() => {
  
  // test
  console.log('window is loaded')
})

```

## Sentence Game
We're going to review DOM Events and `this` in order to create a simple sentence game.



### Objective

1. A user should be able to click on a word, and append that word to the right of `sentence:`.


### Setup 

1.  Open up in up jqueryThisWordPlay in the student_examples folder
2.  Read over the html, and css
3.  make sure the javascript is connected `console.log('djslfjds')`
s

#### Let's get started
First, lets create the sentence object inside of the onload.  What properties and method might this need?

```
const sentenceObject = {
  sentence: ''
}
```

This object will hold our sentence which will appear in the `p` tag next to the word `sentence:` on the screen.

#### Let's add an event Listener to our words

1.  First add the event listener to all the `li` elements

```
  
  $('li').on('click', (e) => {
    console.log('this is working')
  })

```

2.  Now lets make sure we our getting the exact word we our clicking on

```

  $('li').on('click', (e) => {
    // e.currentTarget is the li we are clicking on
    console.log(e.currentTarget);
   
  })


```
`e` is short for `event`.  `e.eventTarget will give us the exact `li` we are clicking on

3.  Now lets get the text out of the `currentTarget` using the jQuery selector and a jQuery method

```

  $('li').on('click', (e) => {
    // check to see if you got the text
    console.log($(e.currentTarget).text());
    
    // save that value in a variable
    const currentText = $(e.currentTarget).text()
  })

```

4. Now we have the current text, what must we do now?

* concat the selected word with the property `sentence` on the `sentenceObject`

- Try to add a method to our sentence object called concatSentence

```
const sentenceObject = {
  sentence: '',
  concatSentence (newWord){
  // newWord will be whatever we clicked on aka. the variable currentText in the 'click' function
    this.sentence = this.sentence + ' ' + newWord;
  }
```


5.  Now lets use our new code inside the event Listener

```

  $('li').on('click', (e) => {
    
    // save that value in a variable
    const currentText = $(e.currentTarget).text()

    // use the concatSentence method and pass in the currentText
    sentenceObject.concatSentence(currentText)


  })
  
  // log the object to confirm 
  console.log(sentenceObject)

```

6.  Now we need to add our sentence to the page each time oh la la

- try to write a method called `appendSentence` attached to the sentenceObject that will attach the `sentence` property value to the `p` tag on the dom


```
const sentenceObject = {
  sentence: '',
  concatSentence (newWord){
  // newWord will be whatever we clicked on aka. the variable currentText in the 'click' function
    this.sentence = this.sentence + ' ' + newWord;
  },
  appendSentence () {
      // finalSentence is storing our p tag
     const $finalSentence = $('#sentence').children().eq(1);

     // use the .text method to add the value of the current value of the sentence property
     $finalSentence.text(this.sentence);
  }
}

```


























