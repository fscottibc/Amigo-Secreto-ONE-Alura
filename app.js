// 1. Declarar un array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
  const input = document.getElementById("amigo"); // Capturar el valor del campo de entrada
  let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final

  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Capitalizar la primera letra del nombre
  nombre = capitalizarNombre(nombre);

  // Validar duplicados
  if (amigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista de amigos en el HTML
  actualizarListaAmigos();
}

// Función para capitalizar la primera letra de cada palabra
function capitalizarNombre(nombre) {
  return nombre
    .split(" ") // Dividir el nombre en palabras
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()) // Capitalizar cada palabra
    .join(" "); // Volver a unir las palabras
}

// 3. Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  listaAmigos.innerHTML = "";

  // Recorrer el array y agregar cada amigo como un elemento <li>
  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`; // Numerar y mostrar el nombre
    listaAmigos.appendChild(li);
  });
}

// 4. Función para sortear el amigo secreto
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // Validar que haya amigos en el array
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para realizar el sorteo.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}
