// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration

const student_name = `Abhishek Baksi`;
const student_school = `🇹​​​​​🇪​​​​​🇱​​​​​🇺​​​​​🇬​​​​​🇺​​​​​ 🇻​​​​​🇮​​​​​🇩​​​​​🇭​​​​​🇾​​​​​🇦​​​​​ 🇵​​​​​🇪​​​​​🇪​​​​​🇹​​​​​🇭​​​​​🇦​​​​​🇲​​​​​ 🇭​​​​​🇮​​​​​🇬​​​​​🇭​​​​​ 🇸​​​​​🇨​​​​​🇭​​​​​🇴​​​​​🇴​​​​​🇱​​​​​`;
const student_grade = `𝟿𝚝𝚑`;
const student_section = `𝙱`;
const student_rollno = `𝟸𝟷`;
var subject1_maths = `𝟕𝟓`;
var subject2_physics = `𝟔𝟑`;
var subject3_chemistry = `𝟖𝟔`;

const report_card = `##############  Rᴇᴘᴏʀᴛ-Cᴀʀᴅ  ##############`;


console.log(report_card);
console.log("");
console.log("****", student_school, "****");
console.log("");
console.log("  Name", `    ▬                `, student_name);
console.log("  Grade", `   ▬                `, student_grade);
console.log("  Section", ` ▬                `, student_section);
console.log("  Roll-no", ` ▬                `, student_rollno);
console.log("");
console.log(`ᵜ            `, `      M̳a̳r̳k̳s̳      `, `          ᵜ`);
console.log("");
console.log(`    𝐒𝐮𝐛𝐣𝐞𝐜𝐭`, `                   𝐒𝐜𝐨𝐫𝐞`);
console.log("");
console.log(`⒈ `, `𝙼𝚊𝚝𝚑𝚎𝚖𝚊𝚝𝚒𝚌𝚜  `, `    -          `, subject1_maths);
console.log(`⒉ `, `𝙿𝚑𝚢𝚜𝚒𝚌𝚜  `, `        -          `, subject2_physics);
console.log(`⒊ `, `𝙲𝚑𝚎𝚖𝚒𝚜𝚝𝚛𝚢  `, `      -          `, subject3_chemistry);
console.log("");
console.log(`###########################################`);
