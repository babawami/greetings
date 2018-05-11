document.addEventListener('DOMContentLoaded', function() {
  // reference Dom elements
  let nameElem = document.querySelector('.greetName');
  let counter = document.querySelector('.counter');
  let displayGreeting = document.querySelector('.displayGreeting');
  let greetBtn = document.querySelector('.greetButton');
  let resetBtn = document.querySelector('.resetButton');
  let showAlert = document.querySelector('.captureDetail');

  // Read item: get stored names in the map
  let storedUsers = JSON.parse(localStorage.getItem('users'))
  let greetingsFactory = GreetingsLogic(storedUsers); //Instance
  counter.innerHTML = greetingsFactory.countUsers(); // display number when refreshed

  function countGreetings() {
    let EnterName = nameElem.value;
    let checkedRadioBtn = document.querySelector("input[name='languageTypeRadio']:checked");

    if (EnterName !== "") {
      let languageGreeting = greetingsFactory.selectGreeting(checkedRadioBtn.value, EnterName);
      displayGreeting.innerHTML = languageGreeting;
      displayGreeting.classList.add("addColor");

    }
    else {
      alert('Please enter your name')
    }

    // create storage to store the map use stringify to convert object into string
    localStorage.setItem('users', JSON.stringify(greetingsFactory.map()));
    //  display the number from the array
    counter.innerHTML = greetingsFactory.countUsers();
  }

  greetBtn.addEventListener('click', function() {
    countGreetings();
    if (nameElem.value = "") {
      nameElem.value = "";
    }



  });

  resetBtn.addEventListener('click', function() {
    greetingsFactory.reset()
    localStorage.clear();
    counter.innerHTML = 0;
    displayGreeting.innerHTML = "";
    //location.reload();
  });


});
