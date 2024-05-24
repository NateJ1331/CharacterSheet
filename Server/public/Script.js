function CalculateBonus(int)
{
    return Math.floor((int - 10)/2)
}


function SaveData()
{
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        if (input.type === 'checkbox') {
            localStorage.setItem(input.id, input.checked ? '3' : '0');
        } else {
            var value = input.value.trim();
            localStorage.setItem(input.id, value);
        }
    });

    document.querySelector("#saved").innerHTML = "Saved";

}

function get() 
{
    var bioInputs = ['name', 'race', 'class', 'level', 'profi'];
    var attInputs = [ 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    var skillInputs = ['acrobatics','animalhandling','arcana','athletics','deception','history','insight','intimidation','investigation','medicine','nature','perception','performance','persuasion','religion','sleightofhand','stealth','survival']

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
        var skillvalue  = localStorage.getItem('profi-'+ skill);
        document.querySelector("#" + skill).innerHTML ="+" + skillvalue;
    });

}