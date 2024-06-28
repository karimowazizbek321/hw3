function checkNumberType(){
    const userInput = prompt("vedite chislo");
    const num  = parseFloat (userInput);

    if (!isNaN(num)){
        if(num >0){
            alert("положительный");
        }else{
            alert("отрицательный");
        }
    }else{
        alert("vedite tolko chislo")
    }
}
checkNumberType()
