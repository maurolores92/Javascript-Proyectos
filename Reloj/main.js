const secondHand = document.querySelector('.segundo');
const minsHand = document.querySelector('.minuto');
const hourHand = document.querySelector('.hora');

const pHoras = document.getElementById('horas');
const pMinutos = document.getElementById('minutos');
const pSegundos = document.getElementById('segundos');
const pDiaSemana = document.getElementById('diaSemana');
const pDia= document.getElementById('dia');
const pMes= document.getElementById('mes');
const pYear= document.getElementById('year');

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);

function actualizarHora() {
    const fecha = new Date();

    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const diaSemana = fecha.getDay();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const year = fecha.getFullYear();

    const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;
    pMes.textContent = meses[mes];
    pYear.textContent = year;
    pHoras.textContent = horas;

    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;

}
setInterval (actualizarHora, 1000)