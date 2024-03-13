process.on('uncaughtException', (err) => {
    console.error('Caught exception:', err);
    
    process.exit(1); 
  });

console.log(1);
ggg;
console.log(2);