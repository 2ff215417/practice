let items = document.getElementsByClassName("greenclass");
for (let i= 0; i <items.length; i++)
{
    items[i].textContent = "BOOM";
}
const header= document.querySelector("h1");
console.log(header)

const green = document.querySelector(".greenclass");console.log(green);

document.getElementById("click").addEventListener("click", function ()
{
    alert("POW");
});