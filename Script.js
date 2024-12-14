

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
    
    document.querySelector("#saved").innerHTML = "Saved";
    console.log(character)  

    textboxes.forEach(function(text) {
        if(text.value)
        {
            character[text.id] = text.value
        }
    });
}
    

function get() // Loads all info
{

    
}