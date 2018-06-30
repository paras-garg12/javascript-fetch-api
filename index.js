document.getElementById('button1').addEventListener('click',getText);

function getText(){
    fetch('data.txt')
    .then(res => res.text())
    .then(data => {
        document.getElementById('output').innerHTML=data;
    })
    .catch(err => console.log(err));

}
document.getElementById('button2').addEventListener('click',getJson);

function getJson(){
    fetch('posts.json')
    .then(res => res.json())
    .then(data => {
        let text='';
        console.log(data);
        data.forEach(function(post){
            text+=`<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML=text;
    })
    .catch(err => console.log(err));
}
document.getElementById('button3').addEventListener('click',getExternal);

function getExternal(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        let output='';
        console.log(data);
        data.forEach(function(user){
            output+=`<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML=output;
    })
    .catch(err => console.log(err));
}