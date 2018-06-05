function GreetingsLogic(storedUsers) {
  // letiables
  let EnterName = "";
  let namesGreeted = {};
  let languageGreeting = "";

  // object takes in the latest input and stored.
  if (storedUsers) {
    namesGreeted = storedUsers
  }

  function chooseGreeting(typeOfLanguage, name) {


    if (name !== "") {
      EnterName = name.toUpperCase();
      //when the greet button is pressed check if this user was already greeted before
      //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
      if (namesGreeted[EnterName] === undefined) {
        //add an entry for the user that was greeted in the Object Map
        namesGreeted[EnterName] = 0;
      }
    }

    if (typeOfLanguage === "english") {
      return 'Hello, ' + name;
    }

    if (typeOfLanguage === "afrikaans") {
      return 'Goeie Dag, ' + name;
    }

    if (typeOfLanguage === "sotho") {
      return 'Dumela, ' + name;
    }

  }

  function countNames() {
    return Object.keys(namesGreeted).length
  }

  function returnMap() {
    return namesGreeted
  }

  function resetStorage() {
    return namesGreeted = {}
  }


  return {
    reset: resetStorage,
    map: returnMap,
    selectGreeting: chooseGreeting,
    countUsers: countNames,
  }
}
