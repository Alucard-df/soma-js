function somar(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var result = parseInt(x) + parseInt(y);

    alert('A soma entre ' + x + ' e ' + y +  ' é '+ result + '.');
}