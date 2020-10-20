
function kek(){
    if(document.getElementById("sumOfZalog").style.visibility=="hidden"){
    document.getElementById("sumOfZalog").style.visibility="visible";
    }else{
        document.getElementById("sumOfZalog").style.visibility="hidden";
    }
}
function confines(){//Ограничения для физ лиц
    var status = document.getElementsByName("status");
    if(status[0].checked){
        var zalog = document.getElementById("sumOfZalog").value;
        if(zalog==""){
            zalog =0;
        }
        var max = parseInt(zalog)+3000000;
        var str = "max = "+max;
        document.getElementsByName("creditForm")[1].setAttribute("disabled",true);
        document.getElementById("summ").setAttribute("max",max);
        document.getElementById("summ").setAttribute("placeholder", str);
        document.getElementById("staj").setAttribute("min", 2);
        document.getElementById("age").setAttribute("min", 18);
    }else{
        var zalog = document.getElementById("sumOfZalog").value;
        if(zalog==""){
            zalog =0;
        }
        var max = parseInt(zalog)+30000000;
        var str = "max = "+max;
        document.getElementsByName("creditForm")[1].setAttribute("disabled",false);
        document.getElementById("summ").setAttribute("max",max);
        document.getElementById("summ").setAttribute("placeholder", str);
        document.getElementById("staj").setAttribute("min", 5);
    }

}


function submit(){
    var zalog = document.getElementById("sumOfZalog").value;
        if(zalog==""){
            zalog =0;
        }
    var maxForUr = parseInt(zalog)+30000000;//переменная дял максимальнйо суммы кредита для юридических лиц
    var maxForFiz = parseInt(zalog)+3000000;//переменная дял максимальнйо суммы кредита для физических лиц
    let status = document.getElementsByName("status");
    let gender = document.getElementsByName("gender");
    let age = document.getElementById("age").value;
    let summ = document.getElementById("summ").value;
    let staj = document.getElementById("staj").value;
    let salary = document.getElementById("salary").value;
    let countOfFailedCredits = document.getElementById("prCredits").value;
    if((status[0].checked && salary<=60000)||(status[0].checked && staj<2) ||(status[0].checked && summ>maxForFiz) ){
        alert("Не можем выдать Вам кредит");
    }
    else if((status[1].checked && salary<=250000)||(status[1].checked && staj<5) ||(status[1].checked && summ>maxForUr)){
        alert("Не можем выдать Вам кредит");
    }
    else if(gender[0].checked && (age<18 || age>63)){
        alert("Не можем выдать Вам кредит");
    }
    else if(gender[1].checked && (age<18 || age>58)){
        alert("Не можем выдать Вам кредит");
    }
    else if(countOfFailedCredits>0 ){
        alert("Не можем выдать Вам кредит");
    }
    else{
        alert("Odobreno")
    }
}
