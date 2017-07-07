const servant = (task)=>{ // function takes one param
    task(); //executes the param.  the param must be a function in order to execute
}

servant( //calling servant
    ()=>{ //action that we want the servant to perform
        console.log('washing');
    }
);
servant( //calling servant
    ()=>{ //action that we want the servant to perform
        console.log('mopping');
    }
);

setTimeout(
    ()=>{ //action we want setTimeout to perform
        console.log('I have been called');
    },
    3000
);
