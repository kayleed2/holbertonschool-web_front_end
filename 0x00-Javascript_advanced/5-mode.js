function changeMode(size, weight, transform, background, color) {
    return () => {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let para = document.createElement('p');
    para.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(para);

    let btnSpooky = document.createElement('button');
    btnSpooky.innerHTML= 'Spooky';
    document.body.appendChild(btnSpooky);
    btnSpooky.onclick = spooky;
    
    let btnDark = document.createElement('button');
    btnDark.innerHTML = 'Dark Mode';
    document.body.appendChild(btnDark);
    btnDark.onclick = darkMode;
    
    let btnScream = document.createElement('button');
    btnScream.innerHTML = 'Scream Mode';
    document.body.appendChild(btnScream);
    btnScream.onclick = screamMode;
}
main();
