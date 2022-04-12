function rndShow(){
    var random = Math.floor(Math.random()*4);
    //alert(random);

    let img1 = document.querySelector('.rnd__img1');
    let img2 = document.querySelector('.rnd__img2');
    let img3 = document.querySelector('.rnd__img3');
    let img4 = document.querySelector('.rnd__img4');

    img1.innerHTML = '<img src="./pictures/Gachi_1.gif" alt="Gachi_1" width="50%"/>';
    img2.innerHTML = '<img src="./pictures/Gachi_2.gif" alt="Gachi_2" width="50%"/>';
    img3.innerHTML = '<img src="./pictures/Gachi_3.gif" alt="Gachi_3" width="50%"/>';
    img4.innerHTML = '<img src="./pictures/Gachi_4.gif" alt="Gachi_4" width="50%"/>';

    switch (random) {
        case 0:
            img1.innerHTML = '';
            break;
        case 1:
            img2.innerHTML = '';
            break;
        case 2:
            img3.innerHTML = '';
            break;
        case 3:
            img4.innerHTML = '';
            break;
        default: break;
        }
    return;
}

setInterval(rndShow, 1000);