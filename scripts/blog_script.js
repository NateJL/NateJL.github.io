import data from '../data/blog_data.json' assert { type: 'json' };
console.log(data);

//const blogData = JSON.parse(data[0].posts);

for(let i = 0; i < data.length; i++) {
    let obj = data[i];

    console.log(obj.id);
}
    
//document.getElementById("blog_content").innerHTML = text;