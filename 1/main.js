let a = prompt("ادخل قيمة الميراث:");
let b = prompt("ادخل عدد الذكور:");
let c = prompt("ادخل عدد الاناث:");

let legacy = Number(a);
let men = Number(b);
let girls = Number(c);

let WifeShare = legacy * (1 / 8);
let rest = legacy - WifeShare;

let totalShares = (men * 2) + girls;
let share = rest / totalShares;

console.log("نصيب الزوجة: " + WifeShare);
console.log("نصيب الذكر الواحد: " + (share * 2));
console.log("نصيب الأنثى الواحدة: " + share);
