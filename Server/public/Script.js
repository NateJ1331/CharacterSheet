
function SaveData()
{
    var CharName = document.querySelector("#char-name").value;
    localStorage.setItem('CharName',CharName);
    document.querySelector("#print").innerHTML = "saved " + CharName;
}

function get()
{
    CharName = localStorage.getItem('CharName');
    document.querySelector("#print").innerHTML = "Character Name: " + CharName;
}