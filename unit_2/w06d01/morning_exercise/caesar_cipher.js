// const alpha = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//
//
//
// const cipherCode = (input) => {
//   for(let i = 0; i < alpha.length; i++){
//     const output = alpha[i+13]
//     return output;
//     console.log(output);
//   }
// }
// cipherCode('a');
//
// cipherCode('Hello world');


const alpha = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const code = [];

const cipherCode = (input) => {
  for(let i = 0; i < alpha.length; i++){
    // needs to take the input, split up the letters and blah blah
    let codedAlpha = alpha[i+13];
    for (let i=0; i < codedAlpha.length; i++){
        code.push(codedAlpha[i]);
    }

  }
}

console.log(cipherCode('a'));
console.log(code);
