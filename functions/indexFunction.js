const btnMode = document.getElementById('btn-pill');
btnMode.addEventListener('click',()=>{
    btnMode.style.right= '0%';
    btnMode.style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';
    let header = document.getElementById('headd');
    header.style.backgroundImage = 'url("../images/451041.jpg")';
    header.style.color= 'black';
    console.log(header.style);
});