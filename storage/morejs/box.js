document.getElementById('open-btn-1').addEventListener('click', function() {
    var box1 = document.getElementById('box-1');
    if (box1.classList.contains('visible')) {
        box1.classList.remove('visible');
    } else {
        box1.classList.add('visible');
    }
});

document.getElementById('open-btn-2').addEventListener('click', function() {
    var box2 = document.getElementById('box-2');
    if (box2.classList.contains('visible')) {
        box2.classList.remove('visible');
    } else {
        box2.classList.add('visible');
    }
});