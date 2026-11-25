function updateClock() {
    const clock= document.getElementById("clock");
    clock.textContent = new Date().toDateString();
    if(clock) clock.textContent=new Date().toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);