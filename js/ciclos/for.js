console.log('Empezamos con el for');

// for (let i = 1; i <= 10; i++ ) {
//   console.log('iteración: ', i);  
// }

let number = prompt('Dame un numero')

for (let i = 1; i <= 10; i++) {
    const result = number * i
    if( result > 20 ){
        break;
    }

    if (result == 15) {
        continue;
    }

    // 5 x 1 = 5
    // 5 x 2 = 10
    // console.log(number + ' x ' + i + ' = ' + result);
    console.log(`${number} x ${i} = ${result}`); 
}