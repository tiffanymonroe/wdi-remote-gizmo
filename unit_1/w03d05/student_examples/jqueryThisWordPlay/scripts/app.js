$(()=>{

  // console.log('ready to go!');



  const sentenceObject = {
    sentence: '',
    concatSentence (newWord){
      this.sentence = this.sentence + ' ' + newWord;
      this.appendSentence();
    },
    appendSentence () {
      const $finalSentence = $('#sentence').children().eq(1);
      $finalSentence.text(this.sentence);
    }
  }

  $('li').on('click', (e)=>{
    const currentText = $e.currentTarget.text()
    sentenceObject.concatSentence(currentTarget)
  })
});
