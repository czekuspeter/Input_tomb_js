let t = [1,2,3,4,5];

function kiirat()
{
    let tartalom = ``;
    for(let i = 0; i < t.length; i++)
    {
        tartalom += `
        <div class="card "">
            <p>${t[i]}</p>
        </div>`
    }
    document.getElementById("cards").innerHTML = tartalom;

}
function hozzaad()
{
    console.log("hozzaad");
   
    let ertek = document.getElementById("text1").value;
    console.log("ertek"+ ertek);
    t.push(ertek);
   
    kiirat()
   
}

kiirat();