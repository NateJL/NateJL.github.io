import data from '../data/blog_data.json' assert { type: 'json' };
console.log(data);

const blogData = JSON.parse(data[0].posts);

let text = "<table border='1'>";
for (let x in blogData) {
	text += "<tr><td>" + blogData[x].title + "</td></tr>";
}
text += "</table>"    
document.getElementById("blog_content").innerHTML = text;