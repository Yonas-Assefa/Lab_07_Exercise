// setInterval(time, 1)

// function time() {
//     var date = new Date()
//     var sec_n = document.querySelector(".sec");
//     var sec = date.getSeconds();
//     var new_sec = ((sec / 60) * 360 +6);
//     sec_n.style.transform = `rotate(${new_sec}deg)`;

//     var min_n = document.querySelector(".min");
//     var min = date.getMinutes();
//     var new_min = ((min / 60) * 360 + 90);
//     min_n.style.transform = `rotate(${new_min}deg)`;

//     var hour_n = document.querySelector(".hour");
//     var hour = date.getHours();
//     var new_hour = ((hour / 12) * 360 + 90 + (0.5 * min));
//     hour_n.style.transform = `rotate(${new_hour}deg)`;
    
// }

const deg =6;
const hr =document.querySelector(".hour");
const min =document.querySelector(".min");
const sec =document.querySelector(".sec");

setInterval(()=>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hr.style.transform = `rotateZ(${(hour) +(minute/12)}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${second}deg)`;
})
