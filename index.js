const checkbox= document.getElementById("checkbox");
const submitbtn=document.querySelector("button[type=submit]");

// Intially disabling checkbox and submit button
checkbox.disabled = true;
submitbtn.disabled =true;

//! here will select all the elements with class element
const elements = document.querySelectorAll(".element");
// ! Now will select the span element 
let SelectColor = document.getElementById("SelectColor");

// Now using the elements will create an array and for each element will give a different color

elements.forEach(function(element)
{
	const color = getRandomColor();

	element.style.backgroundColor= color;
	element.value=color;
	element.innerHTML=color;

});

// Now the below piece of code has added to get the value of any of any one of the color value randomly
const x = document.querySelectorAll(".element");

let randomnumber= Math.floor((Math.random() * 9));

let y = x[randomnumber].innerHTML;
console.log(y);
SelectColor.innerHTML=y;

function getRandomColor()
{
	const letter = "0123456789ABCDEF";
	let color = '#';
	for(let i=0; i<6; i++) // there are 6 digits in Hexa decimal number
	{
		color += letter[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Now will check the clicked Hexa decimal value will match with the shown code

elements.forEach(function(element)
{
	element.addEventListener("click", function()
	{
		if(element.innerHTML === SelectColor.innerHTML)
		{
			alert("You are Human! Click on Submit button to proceed");
			submitbtn.disabled=false;
			submitbtn.classList.remove("btn-light");
			// it will make the submit button background green
			submitbtn.classList.add("btn-success");
			// Now will make the check box clicked 
			checkbox.checked=true;
			
		}
		else
		{
			alert("Wrong Selection! Please Verify that you are human");
			location.reload(true);
		}
	});
});




