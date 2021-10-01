var var_name=[];
function submit(){
    var n1=document.getElementById("1st").value;
    var n2=document.getElementById("2nd").value;
    var n3=document.getElementById("3rd").value;
    var n4=document.getElementById("4th").value;

    var_name.push(n1);
    var_name.push(n2);
    var_name.push(n3);
    var_name.push(n4);

    console.log (var_name);

    document.getElementById("variable_div").innerHTML=var_name;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}

function sorter(){
    var_name.sort();
    console.log(var_name);
    document.getElementById("variable_div").innerHTML=var_name;
}