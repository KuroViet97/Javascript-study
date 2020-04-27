function university(lecturer) {
    return function assignment() {
        console.log(`The ${ lecturer } said ${ this.student } should finish the assignment of ${ this.subject }`);
    }
}


classRoom = university("Prof. Martin Kappes");
classRoom(); //this.student and this.subject is undefined

var csCourse = {
    student: "Dr. Michela Tulasio",
    subject: "IT Security",
    classRoom: classRoom
}

csCourse.classRoom();

var anotherCourse = {
    student: "Dr. Kobberstone Broken",
    subject: "Energy Consumption",
}

classRoom.call(anotherCourse); //magic