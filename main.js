function total(){
    let item1=parseInt(document.getElementById("item1").value);
    let item2=document.getElementById("item2").value;
    let x=parseInt(item2/100*item1);
    document.getElementById("item3").value=x;

var text=item1+x;
document.getElementById("item4").value=text;
document.getElementById("extra").innerText="your total amount is"+text;
}