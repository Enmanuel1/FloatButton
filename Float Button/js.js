//Tab de navegacion

(function (d) {
    let tabs = Array.prototype.slice.apply(d.querySelectorAll(".tabs-item"));
    let paneles = Array.prototype.slice.apply(d.querySelectorAll(".paneles-item"));
    d.getElementById("tabs").addEventListener("click", e => {
        if (e.target.classList.contains("tabs-item")) {
            let i = tabs.indexOf(e.target);
            tabs.map(tab => tab.classList.remove("tabactive"));
            tabs[i].classList.add("tabactive");
            paneles.map(panel => panel.classList.remove("panelactive"));
            paneles[i].classList.add("panelactive");
        }
    });
})(document);



// Javascript del modal

//dialogs principales
const modalNoteId = document.getElementById("note-dialog");
const modalBookId = document.getElementById("book-dialog");
const modalTeachersId = document.getElementById("teachers-dialog");
const modalGradesId = document.getElementById("grades-dialog");
const modalTimetableId = document.getElementById("timetable-dialog");
const divcontenedormodal = document.getElementById("contenedor-modal");

// botones de los dialogs principales
const botonNote = document.getElementById("note");
const botonBook = document.getElementById("book");
const botonTeachers = document.getElementById("teachers");
const botonGrades = document.getElementById("grades");
const botonTimetable = document.getElementById("timetable");
const botonCerrarModal = document.getElementsByClassName("close-modal");

botonNote.addEventListener("click", () => {
    modalNoteId.setAttribute("open", true);
});
botonBook.addEventListener("click", () => {
    modalBookId.setAttribute("open", true);
});
botonTeachers.addEventListener("click", () => {
    modalTeachersId.setAttribute("open", true);
});
botonGrades.addEventListener("click", () => {
    modalGradesId.setAttribute("open", true);
});
botonTimetable.addEventListener("click", () => {
    modalTimetableId.setAttribute("open", true);
});


// botones internos de los dialogs principales

// agregar
const botonAddNote = document.getElementById("agregar-nota-dialog");
const botonAddBook = document.getElementById("agregar-book-dialog");
const botonAddTeacher = document.getElementById("agregar-profesor-dialog");
const botonAddGrade = document.getElementById("agregar-calificacion-dialog");
const botonAddTimeTable = document.getElementById("agregar-horario-dialog");


//dialogs secundarios que se abren gracias a los botones internos de los dialogs principales
// notas
const agregarNota = document.getElementById("agregar-nota");

botonAddNote.addEventListener("click", () => {
    agregarNota.setAttribute("open", true);
});


// Book
const agregarBook = document.getElementById("agregar-book");

botonAddBook.addEventListener("click", () => {
    agregarBook.setAttribute("open", true);
});


// Teacher

const agregarTeacher = document.getElementById("agregar-teacher");

botonAddTeacher.addEventListener("click", () => {
    agregarTeacher.setAttribute("open", true);
});


// Grades

const agregarGrades = document.getElementById("agregar-grades");

botonAddGrade.addEventListener("click", () => {
    agregarGrades.setAttribute("open", true);
});



// TimeTable

const agregarTimeTable = document.getElementById("agregar-timetables");
botonAddTimeTable.addEventListener("click", () => {
    agregarTimeTable.setAttribute("open", true);
});


for (let x = 0; x < botonCerrarModal.length; x++) {
    botonCerrarModal[x].addEventListener("click", () => {
        modalNoteId.removeAttribute("open");
        modalBookId.removeAttribute("open");
        modalTeachersId.removeAttribute("open");
        modalGradesId.removeAttribute("open");
        modalTimetableId.removeAttribute("open");

        agregarNota.removeAttribute("open");

        agregarBook.removeAttribute("open");

        agregarTeacher.removeAttribute("open");

        agregarGrades.removeAttribute("open");

        agregarTimeTable.removeAttribute("open");

    });
}
// Float button jquery

$(document).ready(function () {
    flag = 0;
    $("#c1").css("background-color", "white");
    $("#c2").css("background-color", "white");
    $("#c3").css("background-color", "white");
    $("#c4").css("background-color", "white");
    $("#c5").css("background-color", "white");

    $("#main-round-button").click(function () {
        if (flag == 0) {
            $("#main-round-button").animate({ height: '50px', width: '50px' }, 100);
            $("#c1").animate({ top: '80%', left: '86%' }, 200);
            $("#c1").animate({ height: '50px', width: '50px' }, 200);
            $("#c1").css("background-color", "#242a38");
            $("#c1 img").delay(200).fadeIn(50);

            $("#c2").animate({ top: '70%', left: '90%' }, 200);
            $("#c2").animate({ height: '50px', width: '50px' }, 200);
            $("#c2").css("background-color", "#242a38");
            $("#c2 img").delay(200).fadeIn(50);

            $("#c3").animate({ top: '65%', left: '95%' }, 200);
            $("#c3").animate({ height: '50px', width: '50px' }, 200);
            $("#c3").css("background-color", "#242a38");
            $("#c3 img").delay(200).fadeIn(50);

            $("#c4").animate({ top: '95%', left: '95%' }, 200);
            $("#c4").animate({ height: '50px', width: '50px' }, 200);
            $("#c4").css("background-color", "#242a38");
            $("#c4 img").delay(200).fadeIn(50);

            $("#c5").animate({ top: '90%', left: '90%' }, 200);
            $("#c5").animate({ height: '50px', width: '50px' }, 200);
            $("#c5").css("background-color", "#242a38");
            $("#c5 img").delay(200).fadeIn(50);

            $("#main-round-button").css("background-image", "url('../images/close.png')");
            $("#main-round-button").css("background-size", "60% 60%");
            $("#main-round-button").css("background-repeat", "no-repeat");
            $("#main-round-button").css("background-position", "center");
            flag = 1;
        } else {
            $("#main-round-button").animate({ height: '55px', width: '55px' }, 100);
            $("#c1").animate({ height: '5px', width: '5px' }, 100);
            $("#c1").animate({ top: '80%', left: '94%' }, 200);
            $("#c1").css("background-color","white");
            $("#c1 img").css("display", "none");

            $("#c2").animate({ height: '5px', width: '5px' }, 100);
            $("#c2").animate({ top: '80%', left: '95%' }, 200);
            $("#c2").css("background-color", "white");
            $("#c2 img").css("display", "none");

            $("#c3").animate({ height: '5px', width: '5px' }, 100);
            $("#c3").animate({ top: '78%', left: '95%' }, 200);
            $("#c3").css("background-color", "white");
            $("#c3 img").css("display", "none");

            $("#c4").animate({ height: '5px', width: '5px' }, 100);
            $("#c4").animate({ top: '80%', left: '96%' }, 200);
            $("#c4").css("background-color", "white");
            $("#c4 img").css("display", "none");

            $("#c5").animate({ height: '5px', width: '5px' }, 100);
            $("#c5").animate({ top: '82%', left: '95%' }, 200);
            $("#c5 img").css("display", "none");
            $("#c5").css("background-color", "white");
            $("#main-round-button").css("background-image","none");
            flag = 0;
        }
    });

    // JQuery del modal aqui solo cambiamos cosas como el color

    $("#note").click(function () {
        $("#contenedor-modal").css("background-color", "rgba(36,42,56,.7)");
    });

    $("#book").click(function () {
        $("#contenedor-modal").css("background-color", "rgba(36,42,56,.7)");
    });

    $("#teachers").click(function () {
        $("#contenedor-modal").css("background-color", "rgba(36,42,56,.7)");
    });

    $("#grades").click(function () {
        $("#contenedor-modal").css("background-color", "rgba(36,42,56,.7)");
    });

    $("#timetable").click(function () {
        $("#contenedor-modal").css("background-color", "rgba(36,42,56,.7)");
    });

    $(".close-modal").click(function () {
        $("#contenedor-modal").css("background-color", "transparent");
    });
});

/*Formulario-dialog jquery*/

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
});
