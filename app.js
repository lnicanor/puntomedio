function add() {
  (color = document.getElementById("color").value),
    (lim = document.getElementById("lim").value);

  let v1 = [200, 200];
  let v2 = [400, 200];
  let v3 = [300, 376.25];
  let rV = [550, 550];

  var canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    var contexto = canvas.getContext("2d");
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.fillStyle = color;

    contexto.fillRect(v1[0], v1[1], 3, 3);
    contexto.fillRect(v2[0], v2[1], 3, 3);
    contexto.fillRect(v3[0], v3[1], 3, 3);
    contexto.fillRect(rV[0], rV[1], 3, 3);

    for (let i = 0; i < lim; i++) {
      let randP = Math.floor(Math.random() * 3) + 1;
      switch (randP) {
        case 1:
          x = v1[0] + rV[0];
          y = v1[1] + rV[1];
          break;
        case 2:
          x = v2[0] + rV[0];
          y = v2[1] + rV[1];
          break;
        case 3:
          x = v3[0] + rV[0];
          y = v3[1] + rV[1];
          break;
        default:
          break;
      }
      let pX = x / 2;
      let pY = y / 2;

      rV[0] = pX;
      rV[1] = pY;
      contexto.fillRect(pX, pY, 3, 3);
    }
  }
}
