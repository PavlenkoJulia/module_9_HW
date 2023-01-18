const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");

const studentsNodes = listNode.querySelectorAll("student");

let result = {list: []};

studentsNodes.forEach((element) => {
    let student = new Object();

    const nameNode = element.querySelector("name");
    const ageNode = element.querySelector("age");
    const profNode = element.querySelector("prof");
    const firstNameNode = element.querySelector("first");
    const secondNameNode = element.querySelector("second");
    const langAttr = nameNode.getAttribute("lang");

    student.name = firstNameNode.textContent + ' ' + secondNameNode.textContent;
    student.age = Number(ageNode.textContent);
    student.prof = profNode.textContent;
    student.lang = langAttr;

    result.list.push(student);
});

console.log(result);