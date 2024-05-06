const params = window.location.search;
const urlparams = new URLSearchParams(params);
const name = urlparams.get("name");
const ages = urlparams.get("age");
const Class = urlparams.get("my-class");
const theName = document.getElementById("name");
const age = document.getElementById("age");
const myClass = document.getElementById("class");


theName.innerText = name;
age.innerText = ages;  
myClass.innerText = Class; 
