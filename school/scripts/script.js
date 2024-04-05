import { students } from "./students.js";
import {displayFees} from './functions.js'

const container = document.querySelector(".container");

let studentHtml = ``;
function fillStudents(students) {
    students.forEach(function (student) {
        studentHtml +=
            `
        <div class="studentCard">
        <p>student Id : ${student.id}</p>
        <p>${student.name} - ${student.family}</p>
        <p>Class : ${student.class}</p>
        <p>Remain : $${displayFees(student.fees-student.pay)}</p>
        <button class="js-show-details" data-id=${student.id}>click to show details</button>
        </div>
        `
    });
    container.innerHTML = studentHtml;
}
fillStudents(students);

const chooseClass = document.querySelector(".choose-class");
chooseClass.addEventListener("change", function () {
    container.innerHTML = '';
    studentHtml = ``;
    const classSelected = this.value;
    if (classSelected !== "all") {
        const filteredStudent = students.filter(function (ele) {
            return ele.class === classSelected;
        });
        fillStudents(filteredStudent);
    }
    else
    fillStudents(students);
});

document.querySelectorAll(".js-show-details").forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this.getAttribute("data-id"));
    })
})