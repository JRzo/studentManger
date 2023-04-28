let buttonLogin = document.getElementById('buttonLogin');
let verificationDiv = document.getElementsByClassName('verificationDiv')[0];
let menu = document.getElementById('menu');
let homeDiv = document.getElementById('home');
let footer = document.getElementById('footID');



let admin = {
    username: 'admin',
    password: 'password',
}

function buttonClickedLogin(){
    let userName = document.getElementById('usernameID').value;
    let password = document.getElementById('passwordID').value;

    let adminDetails = Object.values(admin)
    if((userName == adminDetails[0]) && (password == adminDetails[1])){
        verificationDiv.hidden = true;
        menu.hidden = false;
        homeDiv.hidden = false;
       
    }
    else{
        alert("The username or password is incorrect");
    }

    console.log(adminDetails);
}
buttonLogin.addEventListener("click", buttonClickedLogin);



let textUser;
let userLists = [];

const reader = new FileReader()



function read(input) {

    const csv = input.files[0];
	reader.readAsText(csv);

}

reader.onload = function (e) {
    
    document.querySelector('.output').innerText = e.target.result;
    textUser = e.target.result;
    }



let row, cell = 0;
let table = document.getElementById("tableID");

function addRowAndCell(rowNumber = 0, cellNumber = 0) {
    let r = table.insertRow(row);
    let c = table.insertCell(cell);
    
    row ++; cell++;

}