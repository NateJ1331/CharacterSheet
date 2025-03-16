//calculates bonus for attribute bonus
function CalculateBonus(int)
{
    return Math.floor((int - 10)/2)
}
//deletes everything
function DeleteStorage()
{
    localStorage.clear();
}

//saves all data thats been inputed
function SaveData()
{
    var character = {};
    var inputs = document.querySelectorAll("input");
    var textboxes = document.querySelectorAll("textarea");
    
    inputs.forEach(function(input) {
        var name  = input.id;
        
        if(input.type === 'checkbox'){
              character[name]= input.checked ? "yes" : "no" ;
        }else
            if(input.value)
            {
                character[name] = input.value.trim();
            }
    });
    
    textboxes.forEach(function(text) {
        if(text.value)
        {
            character[text.id] = text.value
        }
    });

    document.querySelector("#saved").innerHTML = "Saved";

    // Turn it into json
    const jsonCharacter = JSON.stringify(character,null, 2)
    console.log(jsonCharacter)
    
    const blob = new Blob([jsonCharacter], { type: "application/json" });

    //When you click it dowloads it
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "character.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
}
    

function get() // Loads all info
{

    
}