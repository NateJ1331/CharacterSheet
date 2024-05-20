
function SaveData()
{
    var charname = document.querySelector("#input-name").value;
    var race = document.querySelector("#input-race").value;
    var charclass = document.querySelector("#input-class").value;
    var level = document.querySelector("#input-level").value;
    var proficieny = document.querySelector("#input-profi").value;

    if(charname)
    {
        localStorage.setItem('charname',charname);
    }
    if(race)
    {
        localStorage.setItem('race',race);
    }
    if(charclass)
    {
       localStorage.setItem('charclass',charclass);
    }
    if(level)
    {
        localStorage.setItem('level',level);
    }

    if(proficieny)
    {
        localStorage.setItem('proficiency',proficieny);
    }

    document.querySelector("#saved").innerHTML = "Saved ";
}

function get()
{
    var charname = localStorage.getItem('charname');
    var race = localStorage.getItem('race');
    var charclass = localStorage.getItem('charclass');
    var level = localStorage.getItem('level'); 
    var proficiency = localStorage.getItem('proficiency'); 

    document.querySelector("#name").innerHTML = charname;
    document.querySelector("#race").innerHTML = race;
    document.querySelector("#class").innerHTML = charclass;
    document.querySelector("#level").innerHTML = level;
    document.querySelector("#profi").innerHTML = "+" + proficiency;

}