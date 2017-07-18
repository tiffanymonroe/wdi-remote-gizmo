$(() => {


  console.log('window is loaded')


    // Jquery is for DOM Manipulation
    // DOM - we are either putting something on the dom, removing something from the dom,
    // changing css colors, animating things



  // A user should be able to click on a word,
  //and append that word to the right of sentence:.


  const sentenceObject = {
    sentence: '',
    concatSentence(newWord){
      //newWord, whatever e.currentarget.text is
      this.sentence = this.sentence + " " + newWord

      // append the new Sentence
      this.appendSentence()
      // will return undefined
    },
    appendSentence(){
      // going to append our sentence to the dom

      // step one will be you have to grab the p tag.
      const $p = $('#sentence > p');

      // another way

      // const $p = $('#sentence').children().eq(1)



      console.log($p)
      // append or fill in the text
      $p.text(this.sentence)
    }
  }


  // add eventer listener to our words
  $('li').on('click', (e) => {
    // e is the same as event
    // console.log(e)
    // console.log(e.currentTarget);


    // we need to select the word out of our element
    const currentWord = $(e.currentTarget).text();

    sentenceObject.concatSentence(currentWord);
    // sentenceObject.appendSentence();

  })

})

// jquery
$('li').on('click', () => {})

// vanilla js
const li = document.querySelector('li')
li.addEventListener('click', () => {})























