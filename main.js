function checkcategorey() {
    var age=document.getElementById("input1").value;
    if(age<=12){
    console.log("you are a kid");
        document.getElementById("label1").textContent="you are a kid";
    }
    else if(age>=12 && age<=19){
        console.log("you are a teenager");
        document.getElementById("label1").textContent="you are a teenager";
    }
    else if(age>19 && age<=60){
        console.log("you are a adult");
        document.getElementById("label1").textContent="you are a adult";
    }
    else{
        console.log("you are a senior");
        document.getElementById("label1").textContent="you are a senior";
    }
}