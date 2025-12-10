function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-MX', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
  document.getElementById('horaActual').textContent = 'Hora actual: ' + timeString;
}

updateTime();
setInterval(updateTime, 10000);

document.addEventListener('DOMContentLoaded', function() {
  updateTime();
});
