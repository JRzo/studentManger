
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
