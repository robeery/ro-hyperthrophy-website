//tema 1
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



//functie canvas tema2
//mai bine lucram la sd..
/*
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawingCanvas');
    if (!canvas) return; 
    
    const ctx = canvas.getContext('2d');
    const strokeColorPicker = document.getElementById('strokeColor');
    const fillColorPicker = document.getElementById('fillColor');
    
    const shapeTypeSlider = document.getElementById('shapeType');
    const radiusSlider = document.getElementById('radiusSlider');
    const radiusValue = document.getElementById('radiusValue');
    const weightInfo = document.getElementById('weightInfo');

    let startX, startY;
    let clickCount = 0;
    
   
    
    // actualizare raza la slider numeric
    radiusSlider.addEventListener('input', function() {
        radiusValue.textContent = this.value;
    });
    
    function drawText() {
        
        ctx.font = '40px Arial';
        ctx.fillStyle = '#003B6D';
        ctx.fillText('Hipertrofie online - Joacă-te!', 150, 50);

    }
    
    
    function drawRectangle(x1, y1, x2, y2) {
        const width = x2 - x1;
        const height = y2 - y1;
        
        ctx.strokeStyle = strokeColorPicker.value;
        ctx.fillStyle = fillColorPicker.value;
        
        ctx.beginPath();
        ctx.rect(x1, y1, width, height);
        ctx.fill();
        ctx.stroke();
    }
    
    function drawWeightDisc(x, y) {
        const radius = parseInt(radiusSlider.value);
        const innerHoleRadius = radius / 5; // gaura din centru
        
        ctx.strokeStyle = strokeColorPicker.value;
        ctx.fillStyle = fillColorPicker.value;
        ctx.lineWidth = 2;
        
        // desen disc principal
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // desen gaura mijloc
        ctx.beginPath();
        ctx.arc(x, y, innerHoleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        
        // text disc greutate
        const weight = Math.round(radius / 2); // 
        ctx.font = radius / 3 + 'px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(weight + ' kg', x, y + radius * 0.6);
        
       
        
        
    }
    
    
    canvas.addEventListener('mousedown', function(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if(shapeTypeSlider.value == 0)
        { //dreptunghi
            if (clickCount === 0) {
            
                startX = x;
                startY = y;
                clickCount = 1;
            } else {
            
                drawRectangle(startX, startY, x, y);
                clickCount = 0;
            }
        }
        else { //disc
            drawWeightDisc(x, y);
        }  
    });
    
    
    drawText();
});
*/
function initializeCanvas() {
    const canvas = document.getElementById('drawingCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const strokeColorPicker = document.getElementById('strokeColor');
    const fillColorPicker = document.getElementById('fillColor');
    const shapeTypeSlider = document.getElementById('shapeType');
    const radiusSlider = document.getElementById('radiusSlider');
    const radiusValue = document.getElementById('radiusValue');
    const weightInfo = document.getElementById('weightInfo');
    let startX, startY;
    let clickCount = 0;
    
    // actualizare raza la slider numeric
    if (radiusSlider) {
        radiusSlider.addEventListener('input', function() {
            radiusValue.textContent = this.value;
        });
    }
    
    function drawText() {
        ctx.font = '40px Arial';
        ctx.fillStyle = '#003B6D';
        ctx.fillText('Hipertrofie online - Joacă-te!', 150, 50);
    }
    
    function drawRectangle(x1, y1, x2, y2) {
        const width = x2 - x1;
        const height = y2 - y1;
        ctx.strokeStyle = strokeColorPicker.value;
        ctx.fillStyle = fillColorPicker.value;
        ctx.beginPath();
        ctx.rect(x1, y1, width, height);
        ctx.fill();
        ctx.stroke();
    }
    
    function drawWeightDisc(x, y) {
        const radius = parseInt(radiusSlider.value);
        const innerHoleRadius = radius / 5; // gaura din centru
        ctx.strokeStyle = strokeColorPicker.value;
        ctx.fillStyle = fillColorPicker.value;
        ctx.lineWidth = 2;
        
        // desen disc principal
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        // desen gaura mijloc
        ctx.beginPath();
        ctx.arc(x, y, innerHoleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        
        // text disc greutate
        const weight = Math.round(radius / 2);
        ctx.font = radius / 3 + 'px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(weight + ' kg', x, y + radius * 0.6);
    }
    
    canvas.addEventListener('mousedown', function(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if(shapeTypeSlider.value == 0) { //dreptunghi
            if (clickCount === 0) {
                startX = x;
                startY = y;
                clickCount = 1;
            } else {
                drawRectangle(startX, startY, x, y);
                clickCount = 0;
            }
        } else { //disc
            drawWeightDisc(x, y);
        }
    });
    
    drawText();
}


document.addEventListener('DOMContentLoaded', initializeCanvas);


function reinitializeAfterAjax() {
    initializeCanvas();
}
//lab 5 tema3
function insertRow() {
    const table = document.getElementById('dynamicTable');
    const position = parseInt(document.getElementById('position').value);
    const color = document.getElementById('colorPicker').value;
    
    
    if (isNaN(position) || position < 0 || position > table.rows.length) {
        alert('Poziție invalidă pentru inserarea liniei!');
        return;
    }

    
    const newRow = table.insertRow(position);
    

    for (let i = 0; i < table.rows[0].cells.length; i++) {
        const newCell = newRow.insertCell(i);
        newCell.textContent = 'Exercițiu nou?';
        newCell.style.backgroundColor = color;
        
        
        newCell.ondblclick = makeEditable;
    }
}

function insertColumn() {
    const table = document.getElementById('dynamicTable');
    const position = parseInt(document.getElementById('position').value);
    const color = document.getElementById('colorPicker').value;
    

    if (isNaN(position) || position < 0 || position > table.rows[0].cells.length) {
        alert('Poziție invalidă pentru inserarea coloanei!');
        return;
    }

    
    for (let i = 0; i < table.rows.length; i++) {
        const newCell = table.rows[i].insertCell(position);
        newCell.textContent = 'Parametru nou?';
        newCell.style.backgroundColor = color;
        
        
        newCell.ondblclick = makeEditable;
    }
}

function makeEditable(event) {
    const cell = event.target;
    
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = cell.textContent;
    input.style.width = '100%';
    input.style.boxSizing = 'border-box';
    
    
    cell.innerHTML = '';
    cell.appendChild(input);
    input.focus();
    
    
    input.addEventListener('blur', function() {
        cell.textContent = input.value;
    });
    
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            cell.textContent = input.value;
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('dynamicTable');
    
    
    table.querySelectorAll('td').forEach(cell => {
        cell.ondblclick = makeEditable;
    });
});