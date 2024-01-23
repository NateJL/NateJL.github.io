import data from '../data/blog_data.json' assert { type: 'json' };
console.log(data);

const blogData = JSON.parse(data);

let text = "<table border='1'>";
for (let x in data) {
	text += "<tr><td>" + data[x].title + "</td></tr>";
}
text += "</table>"    
document.getElementById("blog_content").innerHTML = text;