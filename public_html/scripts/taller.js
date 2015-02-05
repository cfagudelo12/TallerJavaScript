function calcular() {
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                
                if (isNaN(x)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
                }
                else if (isNaN(y)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
                }
                else
                {
                    var rta = parseInt(x) + parseInt(y);
                   document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+rta+"</div>";;
                }
            }
function concatenar() {
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                var rta = x + y;
                document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+rta+"</div>";;
}
function organizar(){
    var x, y, z, aux, rta, array;
    x = document.getElementById("valor1").value;
    y = document.getElementById("valor2").value;
    z = document.getElementById("valor3").value;
    rta = "El orden alfanumérico de los valores ingresados es: ";
    array = [x,y,z];
    for(i=1;i<array.length;i++){
        for(j=0;j<array.length-i;j++){
            if(array[j].localeCompare(array[j+1])>=1){
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    for(i=0;i<array.length-1;i++){
        rta += array[i]+", ";
    }
    rta+=array[array.length-1];
    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>"+rta+"</div>";;
}
 

