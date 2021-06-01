const image = document.querySelector('.img_result');
const catPic = document.getElementById('cat-pic');
const catButton = document.querySelector('.cat-button');

async function grabCat() {
    console.log('calling');
    const response = await fetch('https://aws.random.cat/meow');
    const json = await response.json();
    catPic.innerHTML = `<img src=${json.file}>`;

    console.log(json);
    
}

catButton.addEventListener('click', grabCat);
grabCat();