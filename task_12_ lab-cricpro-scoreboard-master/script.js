
function openpop(value) {
    let popup = document.getElementById("popup")
    document.getElementById("info").innerHTML="<img src='./assets/"+value+"' alt='"+value+"'></img>"
    value = value.split('')
    let place = value.indexOf(".")
    value.splice(place,1)
    value.splice(place,0,"_")
    value = value.join('')
    console.log(value)
    popup.classList.add(value);

}

function closepop() {
    let popup = document.getElementById("popup")
    for (let i = 1;i<=6;i++){
        popup.classList.remove(`Player${i}_png`);
        popup.classList.remove("Player1-"+i+"_jpg");
    }
}