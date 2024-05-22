
function SaveData()
{
    var charname = document.querySelector("#input-name").value;
    var race = document.querySelector("#input-race").value;
    var charclass = document.querySelector("#input-class").value;
    var level = document.querySelector("#input-level").value;
    var proficieny = document.querySelector("#input-profi").value;

    strength = document.querySelector("#input-strength").value;
    dexterity = document.querySelector("#input-dexterity").value;
    constitution = document.querySelector("#input-constitution").value;
    intelligence = document.querySelector("#input-intelligence").value;
    wisdom = document.querySelector("#input-wisdom").value;
    charisma = document.querySelector("#input-charisma").value;


    if(charname){
        localStorage.setItem('charname',charname);
    }
    if(race){
        localStorage.setItem('race',race);
    }
    if(charclass){
       localStorage.setItem('charclass',charclass);
    }
    if(level){
        localStorage.setItem('level',level);
    }
    if(proficieny){
        localStorage.setItem('proficiency',proficieny);
    }

    if(strength){
        localStorage.setItem('strength',strength);
    }
    if(dexterity){
        localStorage.setItem('dexterity',dexterity);
    }
    if(constitution){
        localStorage.setItem('constitution',constitution);
    }
    if(intelligence){
        localStorage.setItem('intelligence',intelligence);
    }
    if(wisdom){
        localStorage.setItem('wisdom',wisdom);
    }
    if(charisma){
        localStorage.setItem('charisma',charisma);
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

    var strength = localStorage.getItem('strength');
    var dexterity = localStorage.getItem('dexterity');
    var constitution = localStorage.getItem('constitution');
    var intelligence = localStorage.getItem('intelligence');
    var wisdom = localStorage.getItem('wisdom');
    var charisma = localStorage.getItem('charisma');

    document.querySelector("#name").innerHTML = charname;
    document.querySelector("#race").innerHTML = race;
    document.querySelector("#class").innerHTML = charclass;
    document.querySelector("#level").innerHTML = level;
    document.querySelector("#profi").innerHTML = "+" + proficiency;

    document.querySelector("#strength").innerHTML = strength;
    document.querySelector("#dexterity").innerHTML = dexterity;
    document.querySelector("#constitution").innerHTML = constitution;
    document.querySelector("#intelligence").innerHTML = intelligence;
    document.querySelector("#wisdom").innerHTML = wisdom;
    document.querySelector("#charisma").innerHTML = charisma;

}