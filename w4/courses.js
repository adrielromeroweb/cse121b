// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            day: 'TTh',
            instructor: 'Sis A'
        },
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.section.findIndex((section => section.sectionNum == sectionNum));

        if (sectionIndex >= 0) {
            this.section[sectionIndex].enrolled++;
            setSections(this.section);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.section.findIndex((section => section.sectionNum == sectionNum));

        if (sectionIndex >= 0) {
            this.section[sectionIndex].enrolled--;
            setSections(this.section);
        }
    }
};


function setNameAndCourse (object) {
    document.getElementById('courseName').innerHTML = object.name;
    document.getElementById('courseCode').innerHTML = object.code;
}



function setSections (object) {
    const html = object.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.getElementById('sections').innerHTML = html.join('');
}



document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

setNameAndCourse(aCourse);
setSections(aCourse.section);