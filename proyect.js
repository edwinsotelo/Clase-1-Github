const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let acumulado = 0;

const eleccionOperacion = (numero) => {
    rl.question('Ingrese operacion, suma (s), resta(r), division(d), multiplicacion(m) ', (respuesta) => {
        respuesta = respuesta.toLowerCase();
        if(respuesta === 'suma' ||respuesta === 's' || respuesta === '+') {
            acumulado = acumulado + numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        } else if (respuesta === 'resta' || respuesta === 'r' || respuesta === '-') {
            acumulado = acumulado - numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        }  else if (respuesta === 'multiplicacion' || respuesta === 'm' || respuesta === '*'){
            acumulado = acumulado * numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        }  else if (respuesta === 'division' ||respuesta === 'd' || respuesta === '/') {
            acumulado = acumulado / numero;
            console.log(`Acumulado actual: ${acumulado}`);
            inicio();
        } else {
            console.log('Por favor introduzca una operacion valida');
            inicio();
        }
        
    });
  };

const inicio = () => {
    rl.question('Ingrese un nuevo número: ', (respuesta) => {
      const numero = parseFloat(respuesta);
      if (!isNaN(numero)) {
          eleccionOperacion(numero);
      } else {
        console.log('Porfavor introduzca un caracter valido.');
        inicio(); 
      }
    });
  };

console.log('Este programa suma, multipla, resta o divide infinitamente los números ingresados.');
inicio();





