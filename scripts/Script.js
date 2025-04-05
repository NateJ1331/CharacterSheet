//calculates bonus for attribute bonus
function CalculateBonus(score)
{
    return Math.floor((score - 10)/2)
}
//deletes everything
function DeleteStorage()
{
    localStorage.clear();
}

//saves all data thats been inputed
function SaveData()
{
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        if (input.value)
        {
            if (input.type === 'checkbox') {
                localStorage.setItem(input.id, input.checked ? 3 : 0);
            } else {
                var value = input.value.trim();
                localStorage.setItem(input.id, value);
            }
        }
    });

    var textboxes = document.querySelectorAll("textarea");
    textboxes.forEach(function(text) {
        if(text.value)
        {
            localStorage.setItem(text.id, text.value);
        }
    });

    document.querySelector("#saved").innerHTML = "Saved";

}
    

function LoadData() // Loads all info
{
        var bioInputs = ['name', 'race', 'class', 'level', 'profi'];
        var attInputs = [ 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
        var skillInputs = ['acrobatics','animalhandling','arcana','athletics','deception','history','insight','intimidation','investigation','medicine','nature','perception','performance','persuasion','religion','sleightofhand','stealth','survival']
        var textInputs = ['feats','spells']
    
        //loads stuff that came from the bio class in the first page
        bioInputs.forEach(function(input) {
            var value = localStorage.getItem('input-' + input);
            document.querySelector("#" + input).innerHTML = (input === 'profi') ? "+" + value : value;
        }); 
        //loads stuff that came from the attribute class in the first page
        attInputs.forEach(function(att) {
            var value = localStorage.getItem('input-' + att);
            var bonus = CalculateBonus(value);
    
            document.querySelector("#" + att).innerHTML = value;
            document.querySelector("#" + att + "-att").innerHTML = (bonus >= 0) ? "+" + bonus : bonus;    
        });  
    
        //loads stuff that came from the skill class in the first page
        skillInputs.forEach(function(skill)
        {
             var skillbonus = parseFloat(localStorage.getItem('profi-' + skill), 10); 
            
            if(document.querySelector("#" + skill).classList.contains("strength"))
            {
                skillvalue = skillbonus + CalculateBonus(localStorage.getItem("input-strength"))
                document.querySelector("#" + skill).innerHTML = skillvalue;
            }
            if(document.querySelector("#" + skill).classList.contains("dexterity"))
            {
                skillvalue = skillbonus + CalculateBonus(localStorage.getItem("input-dexterity"));
                document.querySelector("#" + skill).innerHTML = skillvalue;
            }
            if(document.querySelector("#" + skill).classList.contains("intelligence"))
            {
                skillvalue = skillbonus + CalculateBonus(localStorage.getItem("input-intelligence"))
                document.querySelector("#" + skill).innerHTML = skillvalue;
            }
            if(document.querySelector("#" + skill).classList.contains("wisdom"))
            {
                skillvalue = skillbonus + CalculateBonus(localStorage.getItem("input-wisdom"))
                document.querySelector("#" + skill).innerHTML = skillvalue;
            }
            if(document.querySelector("#" + skill).classList.contains("charisma"))
            {
                skillvalue = skillbonus + CalculateBonus(localStorage.getItem("input-charisma"))
                document.querySelector("#" + skill).innerHTML = skillvalue;
            }
        });
        //loads stuff that came from the extrainfo class in the first page while also makes it look nice and not all jammed togehter
        textInputs.forEach(function(text){
            var storedValue = localStorage.getItem("input-" + text);
            if (storedValue !== null) {
                var displayElement = document.querySelector("#" + text);
                var formattedText = storedValue.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;'); 
                displayElement.innerHTML = formattedText;
            }
        });
    
}