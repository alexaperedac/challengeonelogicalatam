const input = document.querySelector("#mensaje");
const btnEncriptador = document.querySelector("#boton-encriptar");
const btnDesencriptar = document.querySelector("#boton-desencriptar");
const mensaje = document.querySelector("#h2");


document.getElementById("div2").style.display = 'none';
inputverificar();


document.getElementById('boton-encriptar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensaje.value = textoEncriptado;
  input.value = "";
  aparece()
}

document.getElementById('boton-desencriptar').onclick = (e) => {
  e.preventDefault();
  const textoDesencriptado = desencriptar(input.value);
  mensaje.value = textoDesencriptado;
  input.value = "";
  aparece()
}

function encriptar(stringEncriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncriptada.includes(matrixCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringEncriptada
}

function desencriptar(stringDesencriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDesencriptada.includes(matrixCode[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDesencriptada
}

function aparece() {
  document.getElementById("div1").style.display = 'none';
  document.getElementById("div2").style.display = 'block';
}

function home() {
  document.getElementById("div2").style.display = 'none';
  document.getElementById("div1").style.display = 'block';
}

function inputverificar() {
  var inputPalabra = document.querySelector("#mensaje");
  inputPalabra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}