function SaveData()
{
    let CharName = document.querySelector("#char-name");
    let print = document.querySelector("#print");
    
    print.innerHTML = "Character Name : " + CharName.value;
}