//Clicker

const clicker = {
  clickCount: 0,
  click: ()=>{
    clicker.clickCount++;
    return clicker.clickCount;
//I needed help figuring out the method after office hours, so I looked at Sarah Anderson's repository and found clicker.clickCount++; and return clicker.clickCount. I couldn't remember how to do it! I kept trying a for loop, but it wouldn't work.
  }
};

clicker.click();
clicker.click();
clicker.click();
console.log("The click count is " + clicker.clickCount);

//
