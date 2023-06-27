//Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales, devolver un String «Los números son iguales».


// function numeroMayor(num1, num2, num3) {
//     if (num1 > num2 && num1 >num3) {
//       console.log(`el numero mayor es ${num1}`);
//     } else if (num2 > num1 && num2 >num3){
//         console.log(`el numero mayor es ${num2}`); 
//       }else if(num3>num1 && num3>num2){
//         console.log(`el numero mayor es ${num3}`)
//     }else{
//         console.log(`todos son iguales`)
//     }

//       }

//       numeroMayor(10,10,10)

function numeroMayor(a, b, c) {
  if (a == b && a == c) {
      console.log(a)
  }
  else if (a == b && a < c) {
      console.log(c)
  }
  else if (a == b && a > c) {
      console.log(a)
  }
  else if (a == c && a < b) {
      console.log(b)
  }
  else if (a == c && a > b) {
      console.log(a)
  }
  else if (b == c && a < b) {
      console.log(b)
  }
  else if (b == c && a > b) {
      console.log(a)
  }
  else if (a > b && a > c) {
      console.log(a)
  }
  else if (b > a && b > c) {
      console.log(b)
  }
  else if (c > a && c > a) {
      console.log(c)
  }
}

numeroMayor(10,3 ,10)
    
    