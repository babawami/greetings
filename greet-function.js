function GreetingsLogic(){
  // letiables
  let EnterName = "";
  let namesGreeted = {};
  let updateCount = 0;
  let languageGreeting = "";

       function addToCounter(EnterName){
        if(EnterName !== ""){
        //when the greet button is pressed check if this user was already greeted before
        //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
        if (namesGreeted[EnterName] === undefined){
        //add an entry for the user that was greeted in the Object Map
         namesGreeted[EnterName] = 0;
         updateCount++;
         }
        }
      }

        function chooseGreeting(typeOfLanguage){
          if (typeOfLanguage === "english"){
             languageGreeting = 'Hello,';
          }

          if (typeOfLanguage === "afrikaans"){
            languageGreeting = 'Goeie dag,' ;
          }

          if (typeOfLanguage === "xhosa"){
             languageGreeting =  'Molo,';
          }

        }

        return{
        addCounter : addToCounter,
        selectGreeting: chooseGreeting,
        updateCounter: function(){
          return updateCount
        },
        greetingsLanguage: function(){
          return languageGreeting
        }
    }
 }
