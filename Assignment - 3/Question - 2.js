/*  Lets Upgrade
	Assignment - 3
		Question - 2  */
		
// Write a javascript program that generates an alert "Not legal age to drive" if the driver age is below 18
// years old, if driver age is greater than or equal to 18, it generates an alert "Drive safe".

var age;
age = prompt("What is your Age? :")

if(age<18){
    alert("Not legal age to drive")
}
else if(age>=18){
    alert("Drive safe")
}
