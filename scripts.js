function openLetter() {
    document.querySelector('.envelope').style.transform = 'rotateX(180deg)';
    setTimeout(() => {
        document.getElementById('letter').style.display = 'block';
    }, 500);
}

function closeLetter() {
    document.getElementById('letter').style.display = 'none';
    document.querySelector('.envelope').style.transform = 'rotateX(0deg)';
function showMessage() {
    const message = document.getElementById('message').value;
    document.getElementById('letterContent').innerText = message;
    openLetter();
    }

    
}

