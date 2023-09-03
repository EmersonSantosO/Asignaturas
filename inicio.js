// Función para crear el efecto Matrix en el fondo de la página (body)
function createMatrixEffect() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = w;
  canvas.height = h;
  document.body.appendChild(canvas);

  const cols = Math.floor(w / 20) + 1;
  const posicion_y = Array(cols).fill(0);

  function matrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#0f0";
    ctx.font = "15pt monospace";

    posicion_y.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128);
      const x = ind * 20;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) {
        posicion_y[ind] = 0;
      } else {
        posicion_y[ind] = y + 20;
      }
    });
  }
  setInterval(matrix, 50);
}

// Ejecutar la función para crear el efecto en el fondo de la página (body)
createMatrixEffect();
