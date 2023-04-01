let totalTotal = []

function calculoInteres (num1, num2, num3) {
  const int = num1 * num2 * (num3 / 365)
  return int.toFixed(2)
  }

  let productos = [
  {
    id: 01,
    nombre: "Plazo Fijo",
    categoria: "inversiones",
    simulado: totalTotal,
  },
  {
    id: 02,
    nombre: "Fondos de Inversion",
    categoria: "inversiones",
    simulado: totalTotal
  },
  {
    id: 03,
    nombre: "Bolsa",
    categoria: "inversiones",
    simulado: totalTotal
  },
  {
    id: 04,
    nombre: "Credito Hipotecario",
    categoria: "creditos",
    simulado: totalTotal
  },
  {
    id: 05,
    nombre: "Credito Prendario",
    categoria: "creditos",
    simulado: totalTotal
  },
  {
    id: 06,
    nombre: "Tarjeta de Credito",
    categoria: "paquetes"
  }
]

let producto = {
  id: 01,
  nombre: "Plazo Fijo",
  categoria: "inversiones",
  simulado: totalTotal
}

let menu = "0 - para salir \n1 - listar productos \n2 - para filtrar por categoria \n3 - Simula tu Inversión/ Crédito \n4 - agregar producto al carrito por id \n5 - listar carrito"

let opcion = 0
let carrito = []

do {
  opcion = Number(prompt(menu))
  switch (opcion) {
    case 1:
      alert("Lista de productos: \n" + listarProductos(productos))
      break
    case 2:
      let categoria = prompt("Ingrese una categoría para filtrar los productos").toLowerCase()
      let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
      if (productosFiltrados.length === 0) {
        alert("No existen productos con esa categoría")
      } else {
        alert("Lista de productos filtrados por la categoría " + categoria + ": \n" + listarProductos(productosFiltrados))        
      }
      break
    case 3:
      do {
        let menu = "1 - Plazo Fijo\n2 - Credito\n3 - Volver"
        alert(menu)
        opcion = Number(prompt("ingrese la opción: "))
        while (isNaN(opcion)) {
          opcion = Number(prompt("ingrese un número correcto: "))
          }
          if (opcion === 0) {
            break
          }  else if (opcion === 1 || opcion === 2) {    
            let num1 = Number(prompt("ingrese dinero: "))
            let num2 = Number(prompt("ingrese plazo (en dias): ")) 
            let num3 = Number(0)
                if (num1 < 100000) {
                  num3 = 0.75;
                  alert("La Tasa es del 75%");
                } else if (num1 < 150000) {
                  num3 = 0.78;
                  alert("La Tasa es del 78%");
                } else if (num1 < 200000) {
                  num3 = 0.80;
                  alert("La Tasa es del 80%");
                } else {
                  num3 = 0.85;    
                  alert("La Tasa es del 85%");
                }
                if (opcion === 1) {
                  alert ("La ganancia es: " + "$" + calculoInteres (num1, num2, num3))
                  let totalTotal = calculoInteres + num1
                } else {
                  opcion === 2; 
                  alert ("El Interes a devolver es: " + "$" + calculoInteres (num1, num2, num3))
                  let totalTotal = calculoInteres + num1
                }
          } else {
              opcion === 3;
             break
          }
        } while (opcion != 0)
      break
      case 4:
        let idProducto = Number(prompt("Seleccione id de producto para agregar al carrito \n" + listarProductos(productos)))
        let productoBuscado = productos.find(producto => producto.id === idProducto)
        if (productoBuscado) {
          carrito.push(productoBuscado)
          alert("Producto agregado correctamente")
        } else {
          alert("El id ingresado no corresponde a ningún producto listado")
        }
        break
      case 5:
          alert("Productos en el carrito: \n" + listarProductos(carrito) )
          break
        
    default:
      if (opcion != 0) {
        alert("Opción ingresada incorrecta")
      }
      break
  }

} while (opcion != 0)


function listarProductos(productos) {
  return productos.map(producto => {
    return `ID: ${producto.id} Nombre: ${producto.nombre} categoria: ${producto.categoria}`
  }).join("\n")
}