// console.log('good morning, coffee!');

$(() => {

  const addH2 = ()=> {
    const $h2 = $('<h2>').text("Hello, Gizmo!");
    $('body').append($h2);
  }

  addH2();

  const changeH2 = () => {
    $h2.text('Hello, World!')
    $('h2').text("I'm confused!");
  }

  changeH2();

  const oyster = () => {
    $h2.text("What's happening?")
    $('h2').html('<img src="https://68.media.tumblr.com/26a4af63e779e9d3e10394f7b6138b1d/tumblr_muby1aecew1sifnyko1_500.png">')
  }

  oyster();

});
