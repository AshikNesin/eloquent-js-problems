for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
    	var word='';
    	if(i%3 ===0 && i % 5 ===0 ) {
    		word = 'FizzBuzz';
    	}
    	else{
         word = (i % 3 === 0) ? 'Fizz' : 'Buzz';
    	}
        console.log(word);
    } else {
        console.log(i)
    }
}
