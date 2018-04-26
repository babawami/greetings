
let greetingsFactory = GreetingsLogic(); //Instance
// reference Dom elements
let nameElem = document.querySelector('.greetName');
let counter = document.querySelector('.counter');
let languageType = document.querySelector('.languageTypeRadio');
let displayGreeting = document.querySelector('.displayGreeting');
let greetBtn = document.querySelector('.greetButton');



function countGreetings(){
let EnterName = nameElem.value;
greetingsFactory.addCounter(EnterName);

//update the DOM to display the counter
counter.innerHTML = greetingsFactory.updateCounter();


let checkedRadioBtn = document.querySelector("input[name='languageTypeRadio']:checked");
if (checkedRadioBtn){
let typeOfLanguage = checkedRadioBtn.value;
   // typeOfLanguage will know which language is it.
     greetingsFactory.selectGreeting(typeOfLanguage);
}

if(EnterName !== ""){
  let languageGreeting = greetingsFactory.greetingsLanguage();
  displayGreeting.innerHTML = languageGreeting + ' ' + EnterName;
}

}

greetBtn.addEventListener('click', function(){
  countGreetings();
  if(nameElem.value  = ""){
    nameElem.value = "";
  }

});
