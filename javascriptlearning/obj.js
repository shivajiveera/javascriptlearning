let employee =
{
empname: "jitte veerashivaji",
empid : "12110759",
job : "eng",
basicsal:750000,
bonus: function()
       {
        return(this.basicsal)*10/100;

       }

};
//console.log(employee["empname"]);
console.log(employee.bonus());