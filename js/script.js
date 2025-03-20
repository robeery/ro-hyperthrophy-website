var span = document.getElementById('x');

function ora()
{
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent = (" "+h).substring(-2) + ":" + (""+ m).substring(-2) + ":" + ("" + s).substring(-2);
}
setInterval(ora, 10)
var span2 = document.getElementById("data");
function data()
{
    var d2 = new Date();
    var zi = d2.getDate();
    var luna = d2.getMonth()+1;
    var an = d2.getFullYear();
    span2.textContent = (""+zi).substring() + "." + (""+luna).substring() + "." +(""+an).substring();

}
setInterval(data, 10);
function getURL()
{
    let url = document.getElementById("url");
    url.innerHTML="Pagina: " +  window.location;
    url.textContent="Pagina: " + window.location;
}