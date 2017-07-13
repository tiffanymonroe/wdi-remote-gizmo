console.log('app.js');

$(()=>{

  const $btn = $('#btn');
  console.log($btn);

  // $btn.on('click', ()=> {
  //   $btn.append('<img src="https://i.imgur.com/Qrhid0G.png">');
  //   const $img = $('img');
  //   $img.hide('click', ()=> {
  //     console.log('bye');
  //   });
  //
  // });

const changeBackground = ()=> {
  $('body').css('background', 'hotpink');
}

$btn.on('click', changeBackground);

const $btn2 = $('<button>');
$btn2.text('click me too!')
$('body').append($btn2);

$btn2.on('click', changeBackground);



});
