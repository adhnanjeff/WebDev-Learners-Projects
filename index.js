function updateClockTime(){

    const now = new Date()
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    
    hr = hours.toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0);;
    const sec = now.getSeconds().toString().padStart(2, 0);
    const time = `${hr}:${min}:${sec} ${meridian}`;
    document.getElementById("clock").textContent = time

}


updateClock()
setInterval(updateClockTime, 1000)