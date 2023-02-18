
// for triangle:
const calculateBtn = document.getElementById('triangle-calculate-btn');
calculateBtn.addEventListener('click', () => {
  const baseInput = document.getElementById('triangle-base-input');
  const heightInput = document.getElementById('triangle-height-input');
  const areaOutput = document.getElementById('triangle-area-output');

  const base = parseFloat(baseInput.value);
  const height = parseFloat(heightInput.value);

  const area = 0.5 * base * height;

  if (!isNaN(area)) {
    areaOutput.textContent = area.toFixed(2);
  } else {
    areaOutput.textContent = 'Invalid input';
  }
  console.log(area)
});
