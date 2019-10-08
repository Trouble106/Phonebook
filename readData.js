var fs = require('fs');
var students = [];

function readData(){
	var text = fs.readFileSync('data.json',{encoding: 'utf8'})
	var textString = JSON.parse(text);
	textString.student = students;

	fs.writeFileSync('data1.json', text.String);

	console.log(textString);
}