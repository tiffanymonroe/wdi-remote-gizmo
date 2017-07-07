const ourConnection = (actionToBePerformed)=> {
    console.log("Your wish is my command...");
    actionToBePerformed();
    console.log("It's done");
}

ourConnection(()=> {
        console.log("I'm assassinating someone");
});
ourConnection(()=> {
    console.log("I'm cleaning up the situation");
});

setTimeout(()=>{
    console.log("I have been called");
}, 3000);
