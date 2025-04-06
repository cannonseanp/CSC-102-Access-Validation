function palindrome()
{
var str1 = document.getElementById("str1").value;

var lowerS = str1.toLowerCase();

var reverseStr = lowerS.split('').reverse().join('');
if (str1 == reverseStr)
{
    document.getElementById("updates").innerHTML = "Palindrome Confirmed"
}    
else
document.getElementById("updates").innerHTML = "Palindrome not present" 
}
function uav()
{
    var Name1 = document.getElementById("fName").value;
    var Name2 = document.getElementById("lName").value;
    var comName = Name1 + " " + Name2; //concat name
    var zipCode = document.getElementById("zipCode").value;
    const conditionArray = [
        comName.length >= 20 || comName.length <= 4 ,
        zipCode.length != 5,
    ]
    if(conditionArray.indexOf(false) | isNaN(zipCode)) //check if name is more than 20 characters or less than 5, ensure zipcode is exactly 5 and a number based on conditions above
    {
        document.getElementById("updates2").innerHTML = "You do not appear to have been granted access " + comName + ", further attempts to circumvent security will be met with violence."
    }
    else
    document.getElementById("updates2").innerHTML = "Access Validated Welcome " + comName
}