function calculate(rentalDays, cost) {
    let amount = 0
   if(rentalDays >= 15) {
   amount = Math.floor(rentalDays * cost - (rentalDays * cost * 0.15))
     } else if(rentalDays >= 6 && rentalDays <= 14)
     {
        amount = Math.floor(rentalDays * cost - (rentalDays * cost * 0.10))
     } else if(rentalDays => 3 && rentalDays <= 5) 
     {
        amount = Math.floor(rentalDays * cost - (rentalDays * cost * 0.05))
     } else {
        amount = Math.floor(rentalDays * cost)
     }
     return amount
}

console.log(calculate(4,270))