class Produs
{
    constructor(nume, cantitate)
    {
        this.nume=nume;
        this.cantitate=cantitate;
    }
}
function buton_cumparaturi(){
    var _form = document.getElementById("form_cumparaturi");
     _nume = "" + _form.elements[0].value;
     _cantitate = "" + _form.elements[1].value; 

    const _produs = new Produs(_nume + "", _cantitate+ "")
    console.log(_produs.nume + " " + _produs.cantitate);
    
   /*
    const _produs = new Produs(_nume, _cantitate);
    console.log("test");
    console.log(_produs.nume + " " + _produs.cantitate);
    */
}