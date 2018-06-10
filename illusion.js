const canvas = document.getElementById('clusteringExample');
const context = canvas.getContext('2d');
const button = document.getElementById('start');

const imageData = context.createImageData(1, 1);
imageData.data[0] = 0;
imageData.data[1] = 0;
imageData.data[2] = 0;
imageData.data[3] = 255;

const drawSimulation = (count = 0) => {
  if (count >= 7000) {
    button.disabled = false;
    return;
  }

  for (let i = 0; i < 9; i++) {
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(Math.random() * canvas.height);

    context.putImageData(imageData, x, y);
  }

  setTimeout(drawSimulation, 10, count + 10);
};

button.addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  button.disabled = true;
  drawSimulation();
});

