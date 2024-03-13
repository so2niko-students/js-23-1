const errFunc = () => {
    console.log('in error func START');
    gg;
    console.log('in error func END');
}

const errPromise = new Promise((resolve, reject) => {
    console.log('create promise');
    setTimeout(() => {
        console.log('in setTimeOut');
        errFunc();
        resolve();
    }, 3000);
});

const trash = async () => {

    try{
        // setTimeout(errFunc, 3000);
        await errPromise.then(() => console.log('good work'));
    } catch(err){
        console.log('ERROR in catch');
        console.log(err.name);
        console.log(err.message);
    }finally{
        console.log('finally code');
    }
}

trash();

console.log('code in the end');