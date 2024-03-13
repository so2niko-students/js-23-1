try{
    //1
    console.log(1);
    const r = Math.random();
    if(r < .5){
        throw new Error('Число менше 0.5');
        throw new SyntaxError('Число менше 0.5');
        throw new TypeError('Число менше 0.5');
        throw new ReferenceError('Число менше 0.5');
    }

    //ERROR 2
    // ggg;
    //3
    console.log(3);
    //4

}catch (err) {
    //...
    console.log('catch console');
    console.log(err.name);
    console.log(err.message);
    // console.log(err.stack);
    // console.log(err);
}finally{
    console.log('finally');
}