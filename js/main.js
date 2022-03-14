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
changeColorOfTheChair();

/* get id of chair when click */
var id = 0;
var userName = document.getElementById('user-name');
var phone = document.getElementById('phone');
var btnSubmit = document.getElementById('submit');

for(let i = 1; i <= 30; ++i) {
    let x = document.getElementById(i);
    x.onclick = () => {
        
        if($('#myModal').modal('hide') == true) {
            $('#myModal').modal('show');
        }
        
        id = i;
        let index = id;

        if(arrChair[index-1].name != "" == true || arrChair[index-1].sdt != "" == true) {
            userName.placeholder = arrChair[index-1].name;
            userName.disabled = true;

            phone.placeholder = arrChair[index-1].sdt;
            phone.disabled = true;

            btnSubmit.disabled  = true;
        }

        else {
            userName.disabled = false;
            userName.placeholder = "Enter your name...";
            
            phone.disabled = false;
            phone.placeholder = "Enter your phone number...";    

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
        return;
    } 
    changeDataInArray(id , userName, userPhone);
    alert("Thêm thành công");
    //Hide model after add successful
    $('#myModal').modal('hide');
}

/* Change data in array */
function changeDataInArray(id, name, phone) {
    for(let i = 0; i < 30; ++i) {
        if(arrChair[i].id == id-1) {
            arrChair[i].name = name;
            arrChair[i].phone = phone;
            arrChair[i].status = 1;
            console.log("DONE");
            loadBlankAndBookedChair();
            changeColorOfTheChair();
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


/* Change color of chair */
function changeColorOfTheChair() {
    for(let i = 0; i < arrChair.length; ++i) {
        if(arrChair[i].status == '1') {
            let index = i + 1;
            var chairIndex = document.getElementById(index);
            chairIndex.style.filter = 'invert(8%) sepia(100%) saturate(6481%) hue-rotate(246deg) brightness(102%) contrast(143%)';
        }
    }
}


/* Remove data when close */
function removeData() { 
    userName.placeholder = "Enter your name...";
    userName.disabled = false;
    
    phone.placeholder = "Enter your phone number...";    
    phone.disabled = false;

    btnSubmit.disabled  = false;
}