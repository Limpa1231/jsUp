// №1 , Создать функцию с премией , если бонус не false , salary * 10 , else return salary. Great recision ternar operator 
function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
  }

function bonusTime(salary, bonus) {
    if (bonus != 0 && salary >10000){
      return "£" + salary * 10;
    }
     return "£" +salary;
   }

   console.log(bonusTime(30000, 2));