function updateClockTime(){

    const now = new Date()
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    
    hr = hours.toString().padStart(2, 0);
    const m = now.getMinutes().toString().padStart(2, 0);;
    const s = now.getSeconds().toString().padStart(2, 0);
    const time = `${hr}:${m}:${s} ${meridian}`;
    document.getElementById("clock").textContent = time

}


updateClock()
setInterval(updateClockTime, 1000)