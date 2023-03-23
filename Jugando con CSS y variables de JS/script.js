const inputs = document.querySelectorAll('.controls input');

function actualizarInput() {
  const sufijo = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + sufijo);
}

inputs.forEach(input => input.addEventListener('change', actualizarInput));
inputs.forEach(input => input.addEventListener('mousemove', actualizarInput));