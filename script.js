// Variables
var val1 = document.getElementById("value1");
var val2 = document.getElementById("value2");
var btn = document.getElementsByTagName("button")[0];
var gradBg = document.querySelector("#gradBackground");
var copied = document.querySelector("#copied");

var arr16color = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

//Table variables
var tab16colv1 = document.querySelector("#color16v1");
var tab16colv2 = document.querySelector("#color16v2");

val1.addEventListener("input", setGradient);
val2.addEventListener("input", setGradient);
btn.addEventListener("click", getRandomGradient);
tab16colv1.addEventListener("click", function(){
    copyToClipboard(val1.value);
});
tab16colv2.addEventListener("click", function(){
    copyToClipboard(val2.value);
});


function setGradient(){
    document.body.style.background = `linear-gradient(90deg, ${val1.value} 0%, ${val2.value} 100%)`;
    gradBg.style.background = `linear-gradient(90deg, ${val1.value} 0%, ${val2.value} 100%)`;
    tab16colv1.textContent = val1.value;
    tab16colv2.textContent = val2.value;
    tab16colv1.style.backgroundColor = val1.value;
    tab16colv2.style.backgroundColor = val2.value;
}

function getRandomGradient(){
    val1.value = generate16bColor();
    val2.value = generate16bColor();
    if (val1.value !== val2.value){
        setGradient();
    }else{
        getRandomGradient();
    }
}

function generate16bColor(){
    var value = '#';
    for (let i = 0; i < 6; i++) {
        value += arr16color[Math.floor(Math.random() * 15)];
    }
    return value;
}

function copyToClipboard(text){
    // Create element with text of color value to copy it to clipboard 
    const copy = document.createElement('textarea');
    copy.value = text;
    console.log(text);
    document.body.appendChild(copy);
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy);

    // Reset animation for copied notification
    copied.classList.remove("showNotif");
    void copied.clientTop; // Asking browser for dom action to reflow the page and reset animation 
    // void just throwing out undefiend 
    copied.classList.add("showNotif");
}   

getRandomGradient();