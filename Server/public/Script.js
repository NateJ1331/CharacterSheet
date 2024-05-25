function CalculateBonus(int)
{
    return Math.floor((int - 10)/2)
}

function DeleteStorage()
{
    localStorage.clear();
}
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
        localStorage.setItem(text.id, text.value);
    });

    document.querySelector("#saved").innerHTML = "Saved";

}

function get() 
{
    var bioInputs = ['name', 'race', 'class', 'level', 'profi'];
    var attInputs = [ 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    var skillInputs = ['acrobatics','animalhandling','arcana','athletics','deception','history','insight','intimidation','investigation','medicine','nature','perception','performance','persuasion','religion','sleightofhand','stealth','survival']
    var textInputs = ['feats','spells'];


    bioInputs.forEach(function(input) {
        var value = localStorage.getItem('input-' + input);
        document.querySelector("#" + input).innerHTML = (input === 'profi') ? "+" + value : value;
    }); 

    attInputs.forEach(function(att) {
        var value = localStorage.getItem('input-' + att);
        var bonus = CalculateBonus(value);

        document.querySelector("#" + att).innerHTML = value;
        document.querySelector("#" + att + "-att").innerHTML = (bonus >= 0) ? "+" + bonus : bonus;    
    });  

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

    textInputs.forEach(function(text) {
        var storedValue = localStorage.getItem("input-" + text);
        if (storedValue !== null) {
            document.querySelector("#" + text).innerHTML = storedValue;
        }
    });

}