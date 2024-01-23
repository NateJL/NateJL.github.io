import data from '../data/blog_data.json' assert { type: 'json' };
console.log(data);

const blogData = JSON.parse(data);

let text = "<table border='1'>";
for (let x in myObj) {
	text += "<tr><td>" + myObj[x].name + "</td></tr>";
}
text += "</table>"    
document.getElementById("blog_content").innerHTML = text;