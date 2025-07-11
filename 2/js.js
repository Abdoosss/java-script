let degree = +prompt("ادخل درجتك:");

if (degree >= 0 && degree <= 100) {
  if (degree >= 85) {
    console.log("امتياز");
  } else {
    if (degree >= 75) {
      console.log("جيد جدا");
    } else {
      if (degree >= 65) {
        console.log("جيد");
      } else {
        if (degree >= 50) {
          console.log("مقبول");
        } else {
          console.log("ساقط");
        }
      }
    }
  }
} else {
  console.log("الدرجة لازم تكون بين 0 و 100");
}
