function display() {
    name = "Ahmed";
    var age = 20;
    for (i = 1; i <= 5; i++) {
        document.write("<h1>Hello Unext</h1>")
    }
    document.write("<h1>My name is Mohammad Tufail Ahmed")
    document.write("<h1>My name is :" + name + " and my age is :" + age);
    age = "Mohan"
    document.write("<h1>My name is :" + name + " and my age is :" + age);
}
function display(a,b) {
    var fname = prompt("Enter your first name");
    var lname = prompt("Enter your last name");
    var result = confirm("R u sure");
    if(result){
        alert("Welcome Mr/Ms. :"+fname.charAt(0)+"  "+ lname);

    }
    else {
        alert("Bye bye")
    }
}