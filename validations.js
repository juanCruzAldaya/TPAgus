

var studentsList = [];
const studentsListCont = document.getElementById("studentsListCont");

function addStudent(studentsList)
{
    
    document.getElementById("submitButton").addEventListener("click", function(event) {
        var student = [];
        event.preventDefault();
        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        
        var flag = true;
        if (!checkID(id, studentsList)) {
            document.getElementById("spanId").innerHTML = 'ID is already registered';
            flag = false;
        } else {
            student.push(id)
            document.getElementById("spanId").innerHTML = '';
            console.log(student);
            
        }
    
        if (name === "") {
            document.getElementById("spanName").innerHTML = 'Name must be filled';
            flag = false;
        } else {
            student.push(name)
            document.getElementById("spanName").innerHTML = '';
            
        }
    
        if (surname === "") {
            document.getElementById("spanSurname").innerHTML = 'Surname must be filled';
            flag = false;
        } else {
            student.push(surname)
            document.getElementById("spanSurname").innerHTML = '';
        }
        var calculatedAge = calculateAge(age);
        if (calculatedAge < 18) {
            
            
            document.getElementById("spanAge").innerHTML = 'You must be 18+ years old';
            flag = false;
        } else {
            console.log(calculatedAge)
            student.push(calculatedAge)
            document.getElementById("spanAge").innerHTML = '';
        }
        if (email === "") {
            document.getElementById("spanEmail").innerHTML = 'Email must be filled';
            flag = false;
        } else {
            student.push(email)
            document.getElementById("spanEmail").innerHTML = '';
        }
        if (email === "") {
            document.getElementById("spanPhone").innerHTML = 'Phone must be filled';
            flag = false;
        } else {
            student.push(phone)
            document.getElementById("spanPhone").innerHTML = '';
        }
        console.log(flag)
        if (flag == true)
        {

            studentsList.push(student);
            clearFields();
            console.log(studentsList);
            
        }
}

    
)};

addStudent(studentsList);



document.getElementById("reset").addEventListener("click", function(event){
    event.preventDefault();
    clearFields();
    
});



document.getElementById("hide").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("firstDiv").classList.add('hided');
    document.getElementById("showContainer").innerHTML = "<div id='mid'><button id='add' class='cont2'>Add Students</button> <button id='showStudents' class='cont2'>Show students</button></div>"
    
    document.getElementById("add").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("firstDiv").classList.remove('hided');
        document.getElementById('add').classList.add('hided')
        document.getElementById('showStudents').classList.add('hided')
    
});   
});


document.getElementById("menu").addEventListener("click",  function(event){
    event.preventDefault();
    document.getElementById("firstDiv").classList.add('hided');
    document.getElementById("showContainer").innerHTML = "<div id='menuId' class='menuStyle'><button type='button' id='addStudent'>Add students </button>   <button type='button' id='caliStudent'> Calificate students </button>  </div>"
    
    document.getElementById("addStudent").addEventListener("click", function(event){
        document.getElementById("firstDiv").classList.remove('hided');
        document.getElementById('addStudent').classList.add('hided')
        document.getElementById('caliStudent').classList.add('hided')


    });
})

document.getElementById("caliStudent").addEventListener("click", function(event){
    document.getElementById('addStudent').classList.add('hided')
    document.getElementById('caliStudent').classList.add('hided')
    event.preventDefault();
    studentsList.forEach(item => {


        const buttiton = document.createElement("button");
        buttiton.textContent(item[1]);
        buttiton.className = "listButtons";
        studentsListCont.appendChild(buttiton);

    })
})
        



document.getElementById("show").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("firstDiv").classList.add('hided');
    console.log("Hola entre? ")
    const table = document.createElement("table");
    table.className = 'styled-table';

    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    const idHeader = headerRow.insertCell(0);
    const nameHeader = headerRow.insertCell(1);
    const surnameHeader = headerRow.insertCell(2);
    const ageHeader = headerRow.insertCell(3);
    const emailHeader = headerRow.insertCell(4);
    const phoneHeader = headerRow.insertCell(5);

    idHeader.innerHTML = "<b>ID</b>";
    nameHeader.innerHTML = "<b>NAME</b>";
    surnameHeader.innerHTML = "<b>SURNAME</b>";
    ageHeader.innerHTML = "<b>AGE</b>";
    emailHeader.innerHTML = "<b>EMAIL</b>";
    phoneHeader.innerHTML = "<b>PHONE</b>";

    const tbody = table.createTBody();
    

    
    ordererOne = studentsList.sort((a, b) => a[2] - b[2]);
    ordererOne.forEach(person => {

        var i = 0;
       
        i = i+1;
        const row = tbody.insertRow();

        const idCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const surnameCell = row.insertCell(2);
        const ageCell = row.insertCell(3);
        const emailCell = row.insertCell(4);
        const phoneCell = row.insertCell(5);

        idCell.textContent = person[0];
        nameCell.textContent = person[1];
        surnameCell.textContent = person[2];
        ageCell.textContent = person[3];
        emailCell.textContent = person[4];
        phoneCell.textContent = person[5];

    });

    document.getElementById("tableStyle").appendChild(table)

    document.getElementById("buttonShowMenu").innerHTML = "<button id='add'>Add Students</button>"

    document.getElementById("add").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("firstDiv").classList.remove('hided');
        document.getElementById('add').classList.add('hided')
        table.style.display = 'none'


})
})

function checkID(id, studentsList)
{
    var flag = true;
    
    if (studentsList == undefined)
    {
        flag = false;
    }
    else
    {
        studentsList.forEach(function(element){
        
            if (element.includes(id))
            {
                flag = false;
            }
        })
    }
    console.log(flag)
    return flag
}

function calculateAge(age) {
    
    if (!age) {
        document.getElementById('spanAge').innerText = "Please enter a valid date.";
        return;
    }

    const birth = new Date(age); //create an object type date to manage it. with the age
    const today = new Date();
    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    // Adjust age if the current month and day are before the birth month and day
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        calculatedAge--;
    }
    
    return calculatedAge
}



function clearFields ()
{
    document.getElementById("id").value = '';
    document.getElementById("name").value = '';
    document.getElementById("surname").value = '';
    document.getElementById("age").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';

    document.getElementById("spanId").innerHTML = '';
    document.getElementById("spanName").innerHTML = '';
    document.getElementById("spanSurname").innerHTML = '';
    document.getElementById("spanAge").innerHTML = '';
    document.getElementById("spanEmail").innerHTML = '';
    document.getElementById("spanPhone").innerHTML = '';
}