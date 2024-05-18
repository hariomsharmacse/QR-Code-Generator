const inputValue = document.getElementById("inputText");
const generateBtn = document.getElementById("btn");
const imageSource = document.getElementById("imgTag");
const downloadBtn = document.getElementById("downloadBtn");

const inWidth = window.innerWidth;

generateBtn.addEventListener('click', () => {
    if(inputValue.value == ""){
        alert("Please enter valid text");
    }else{
        imageSource.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${inputValue.value}`
    }
})

downloadBtn.addEventListener('click', () => {
    console.log(imageSource.src)
    fatchFile(`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue.value}`)
})

function fatchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = `QR-Code`;
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    })
}
