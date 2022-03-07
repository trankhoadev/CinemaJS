var arrChair = [
    {
        id: 0,
        name: "da",
        sdt: "daw",
        status: "1"
    },

    {
        id: 1,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 2,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 3,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 4,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 5,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 6,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 7,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 8,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 9,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 10,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 11,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 12,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 13,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 14,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 15,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 16,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 17,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 18,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 19,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 20,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 21,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 22,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 23,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 24,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 25,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 26,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 27,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 28,
        name: "",
        sdt: "",
        status: "0"
    },

    {
        id: 29,
        name: "",
        sdt: "",
        status: "0"
    },

];

/* Load function */
loadBlankAndBookedChair();

/* get id of chair when click */
var id = 0;

for(let i = 1; i <= 30; ++i) {
    var x = document.getElementById(i);
    var userName = document.getElementById('user-name');
    var phone = document.getElementById('phone');
    var btnSubmit = document.getElementById('submit');
    x.onclick = () => {
        id = i;
        let index = id;
        if(arrChair[index-1].name != "" || arrChair[index-1].sdt != "") {
            userName.placeholder = arrChair[index-1].name;
            userName.disabled = true;

            phone.placeholder = arrChair[index-1].sdt;
            phone.disabled = true;

            btnSubmit.disabled  = true;
        }
        else {
            userName.placeholder = "Enter your name...";
            userName.disabled = false;
            
            phone.placeholder = "Enter your phone number...";    
            phone.disabled = false;

            btnSubmit.disabled  = false;
        }
    }
}

/* Check validation data when submit data */
function submitData() {
    var userName = document.getElementById('user-name').value;
    var userPhone = document.getElementById('phone').value;
    if(userName.length == 0 || userPhone.length == 0) {
        alert('Vui lòng nhập đầy đủ thông tin để tiếp tục!');
    } 

    changeDataInArray(id , userName, userPhone);
}

/* Change data in array */
function changeDataInArray(id, name, phone) {
    for(let i = 0; i < 30; ++i) {
        if(arrChair[i].id == id-1) {
            arrChair[i].name = name;
            arrChair[i].phone = phone;
            arrChair[i].status = 1;
            console.log("DONE");
        }
    }
}

/* Load blank and booked chair */
function loadBlankAndBookedChair() {
    let countBlank = 0;
    let countBooked = 0;
    for(let i = 0; i < 30; ++i) {
        if(arrChair[i].status == 0) {
            countBlank++;
        }
    }
    countBooked = 30 - countBlank;

    document.getElementById('blank-chair').innerHTML = 'Số ghế trống: ' + countBlank;
    document.getElementById('booked-chair').innerHTML = 'Số ghế đẵ đặt: ' + countBooked;
}


