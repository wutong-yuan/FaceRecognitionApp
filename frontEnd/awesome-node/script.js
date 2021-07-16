const fs = require('fs');

// fs.readFile('./hello.txt', (err, data) => {
// 	if(err) {
// 		console.log('errrrrrrrrrooorrr')
// 	}
// 	console.log('Async', data.toString('utf8'));
// })

// const file = fs.readFileSync('./hello.txt');
// console.log('Sync', file.toString());


//APPEND
// fs.appendFile('./hello.txt', ' This is so cool', err => {
// 	if (err) {
// 		console.log(err)
// 	}
// })


//WRITE
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
// 	if(err) {
// 		console.log(err);
// 	}
// })

//DELETE
// fs.unlink('./bye.txt', err => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log('Inception');
// })



fs.writeFile('puzzle.txt', "", err => {
	if(err) {
		console.log(err);
	}
})

fs.readFile('./puzzle.txt', (err, data) => {

	const counter = 0;
	const dataString = data.toString();
	console.log(dataString);
	if(err) {
		console.log('errrrrrrrrrooorrr')
	} else {
		for (let i = 0; i < dataString.length; i++) {
			if(dataString.charAt(i) === '(') {
				counter++;
			} else if (dataString.charAt(i) === ')') {
				counter--;
			}
		}
	}
	console.log(counter);
})