//generate random password

function generate() {

    //set pw length and details

    let complexity = document.getElementById("slider").value;

    // password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    
    let password = "";

    //create for loop to choose characters for password

for (var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

    //add password to textbox area
    document.getElementById("display").value = password;

}