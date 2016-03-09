// Just a warmup to get the brain flowing w/ JS
for (var i = 0; i < 101; i++) {

	var fizzing = '';

	if( i % 3 == 0 ){
		fizzing = 'Fizz';
	}
	if( i % 5 == 0){
		fizzing += 'Buzz';
	}
	if( fizzing.length == 0 ){
		fizzing = i;
	}

	console.log(fizzing);

}

