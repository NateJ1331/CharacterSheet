function CalculateBonus(int)
{
    return Math.floor((int - 10)/2)
}


function SaveData()
{
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        var value = input.value.trim();
        if (value) {
            localStorage.setItem(input.id, value);
        }
    });

    if(document.querySelector("#profi-athletics").checked)
    {
        localStorage.setItem('athletics', 3)
    }

    document.querySelector("#saved").innerHTML = "Saved";

}

function get() 
{
    var inputFields = ['name', 'race', 'class', 'level', 'profi', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

    inputFields.forEach(function(field) {
        var value = localStorage.getItem('input-' + field);

        document.querySelector("#" + field).innerHTML = (field === 'profi') ? "+" + value : value;
    });

    document.querySelector("#athletics").innerHTML = localStorage.getItem('athletics')
}