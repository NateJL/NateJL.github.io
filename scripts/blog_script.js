import data from '../data/blog_data.json' assert { type: 'json' };
console.log(data);

//const blogData = JSON.parse(data[0].posts);

let text = "<div class='blogParent'>";
for(let i = 0; i < data.length; i++) {
    let obj = data[i];
    text += "<div class='blogChild'>"
    text += "<h2>";
    text += obj.title;
    text += "</h2>";
    text += "<h4>";
    text += obj.date;
    text += "</h4>";
    text += "<p>";
    text += obj.content;
    text += "</p>";
    text += "</div>";
}
text += "</div>";
    
document.getElementById("blog_content").innerHTML = text;