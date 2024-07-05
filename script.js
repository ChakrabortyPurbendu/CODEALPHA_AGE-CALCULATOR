let btn=document.querySelector("#btn");
let birthday =  document.querySelector("#birthday");
let res=document.querySelector("#result");

function calculateage()
{
    console.log("clicked");
    const birthday_value =  birthday.value;
    if(birthday_value === "")
    {
        alert("!!Please enter your birthday!!");

    }
    else
    {
        const age=getage(birthday_value);
        res.innerText=`Your age is ${age} ${age>1 ? "years": "year"} old`;
    //    console.log(age);



    }


    // console.log(birthday_value);




}
function getage(birthday_value)
{
   const currentdate= new Date();
   const birthdaydate= new Date(birthday_value);

  let age=currentdate.getFullYear() - birthdaydate.getFullYear();
//   console.log(age);
  const month=currentdate.getMonth() - birthdaydate.getMonth();
  if(month<0 || 
    (month==0 && currentdate.getDate() - birthdaydate.getDate())
    )
  {
     age=age-1;
  }


  return age;


}


btn.addEventListener("click",calculateage);