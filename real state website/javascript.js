// ================================================ Register ================================================
function register(){
    let uname=document.form1.uname.value;
    if ( uname=="" || uname==null){
        document.getElementById("p1").innerHTML="Please enter username.";
        document.form1.uname.focus();
    }   
    else {
        document.getElementById("p1").innerHTML="";
    }
    let cono=document.form1.cono.value;
    if (cono=="" || cono==null){
        document.getElementById("p2").innerHTML="Please enter your contact number.";
        document.form1.cono.focus();
        
    } else if (isNaN(cono)){
        document.getElementById("p2").innerHTML="It's inculed only number";
        document.form1.cono.focus();
        
    } else if (cono-length < 1000000000) {
        document.getElementById("p2").innerHTML="Please enter 10 digit number";
        document.form1.cono.focus();
        
    } else {
        document.getElementById("p2").innerHTML="";
    }
    let email=document.form1.mail.value;
    if (email=="" || email==null){
        document.getElementById("p3").innerHTML="Please enter your email addres";
        document.form1.mail.focus();
    }    else {
        document.getElementById("p3").innerHTML="";
    }
    let pass1=document.form1.pass.value;
    let pass2=document.form1.repass.value;
    if (pass1==null || pass1==""){
        document.getElementById("p4").innerHTML="Creat a new password.";
        document.form1.pass.focus();
    } else {
        document.getElementById("p4").innerHTML="";
    }
    // if (pass2==null || pass2==""){
    //     document.getElementById("p5").innerHTML="Re-enter the password.";
    // } else{
    //     document.getElementById("p5").innerHTML="";
    // }
    if (pass2==null || pass2==""){
        document.getElementById("p5").innerHTML="Re-enter the password.";
        document.form1.repass.focus();
    }
    else if (pass1==pass2){
        document.getElementById("p5").innerHTML="";
    } else {
        document.getElementById("p5").innerHTML="Password is not match.";
    } 
    let check=document.form1.check.checked;
    if(check==false){
        document.getElementById("p6").innerHTML="Please accept the Terms & conditions";
    } else {
        document.getElementById("p6").innerHTML="";
    }
    return false;
}

function showpass(){
    let pas=document.form1.pass;
    let repass=document.form1.repass;
    if (pas.type=="password"){
        pas.type="text";
        repass.type="text"
    } else {
        pas.type="password";
        repass.type="password";
    }
}