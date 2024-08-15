   var age = 50
   var health = "normal"


   switch (true) {
        case (age >= 60):
           console.log("old")
           break

    case (age >= 40):
        console.log("mid")
        break

        default:
            console.log("young")
   }




   let day = A;
   switch (day) {
    default:
        console.log("young");
        break;
    case 0:
       console.log("unkonwn day");
       break;
       case 1:
        console.log("saturday");
        break;
    case 2:
    case 3:
        console.log("Monday");
        break;
    
}

 let price = 100;
 let discount = true;
 let discountAmount = 30;
 let country = "irak"

 if(discount === true) {
      price -= discountAmount; //price = price - discountAmount
 }
 else if (country === "egypt") {
    price -= 40;
 }
 else if (country === "plastin") {
    price -= 50;
 }
 else {
price -=10 ;
 }
console.log(price);