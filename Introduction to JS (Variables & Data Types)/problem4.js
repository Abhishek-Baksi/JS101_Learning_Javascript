// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration

const student_name = `Abhishek Baksi`;
const student_school = `๐นโโโโโ๐ชโโโโโ๐ฑโโโโโ๐บโโโโโ๐ฌโโโโโ๐บโโโโโ ๐ปโโโโโ๐ฎโโโโโ๐ฉโโโโโ๐ญโโโโโ๐พโโโโโ๐ฆโโโโโ ๐ตโโโโโ๐ชโโโโโ๐ชโโโโโ๐นโโโโโ๐ญโโโโโ๐ฆโโโโโ๐ฒโโโโโ ๐ญโโโโโ๐ฎโโโโโ๐ฌโโโโโ๐ญโโโโโ ๐ธโโโโโ๐จโโโโโ๐ญโโโโโ๐ดโโโโโ๐ดโโโโโ๐ฑโโโโโ`;
const student_grade = `๐ฟ๐๐`;
const student_section = `๐ฑ`;
const student_rollno = `๐ธ๐ท`;
var subject1_maths = `๐๐`;
var subject2_physics = `๐๐`;
var subject3_chemistry = `๐๐`;

const report_card = `##############  Rแดแดแดสแด-Cแดสแด  ##############`;


console.log(report_card);
console.log("");
console.log("****", student_school, "****");
console.log("");
console.log("  Name", `    โฌ                `, student_name);
console.log("  Grade", `   โฌ                `, student_grade);
console.log("  Section", ` โฌ                `, student_section);
console.log("  Roll-no", ` โฌ                `, student_rollno);
console.log("");
console.log(`แต            `, `      Mฬณaฬณrฬณkฬณsฬณ      `, `          แต`);
console.log("");
console.log(`    ๐๐ฎ๐๐ฃ๐๐๐ญ`, `                   ๐๐๐จ๐ซ๐`);
console.log("");
console.log(`โ `, `๐ผ๐๐๐๐๐๐๐๐๐๐  `, `    -          `, subject1_maths);
console.log(`โ `, `๐ฟ๐๐ข๐๐๐๐  `, `        -          `, subject2_physics);
console.log(`โ `, `๐ฒ๐๐๐๐๐๐๐๐ข  `, `      -          `, subject3_chemistry);
console.log("");
console.log(`###########################################`);
