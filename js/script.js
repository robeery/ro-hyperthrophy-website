var span = document.getElementById('x');

function ora()
{
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.innerHTML = (" "+h).substring(-2) + ":" + (""+ m).substring(-2) + ":" + ("" + s).substring(-2);
}
setInterval(ora, 10)
var span2 = document.getElementById("data");
function data()
{
    var d2 = new Date();
    var zi = d2.getDate();
    var luna = d2.getMonth()+1;
    var an = d2.getFullYear();
    span2.innerHTML = (""+zi).substring() + "." + (""+luna).substring() + "." +(""+an).substring();

}
setInterval(data, 10);
var url = document.getElementById("url");

function getURL()
{
   url.innerHTML="URL: " +window.location.href; 

}
setInterval(getURL, 10);
var browser = document.getElementById("browser");

function getBrowser()
{
  browser.innerHTML="Browser: " +window.navigator.userAgent; 
  //browser.innerHTML="Browser: ";

}
setInterval(getBrowser, 10);

var location1 = document.getElementById("location");

/*
function getLocation()
{
  
  //browser.innerHTML="Browser: ";
  if (window.navigator.geolocation) {
    
    location1.innerHTML="Locație: " +window.navigator.geolocation; 

  } else {
     location1.innerHTML="Locația nu este disponibilă :(";
  }


}
*/
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            document.getElementById("location").innerHTML = 
                `Locație: Latitudine ${lat}, Longitudine ${lon}`;
        },
        function (error) {
            document.getElementById("location").innerHTML = 
                "Eroare: Locația nu poate fi accesată.";
        }
    );
} else {
    document.getElementById("location").innerHTML = 
        "Locația nu este disponibilă :(";
}
setInterval(getLocation, 10);

