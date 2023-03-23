// const Time = document.querySelector('.time');

// function getTime(){
//     let date = new Date();
//     Time.innerText = 
//     (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

// }

// getTime();
// setInterval(getTime, 1000);

const time = document.querySelector('.time');


function getTime(){
    const date = new Date();

    let Hours = String(date.getHours()).padStart(2, '0');
    let Minutes = String(date.getMinutes()).padStart(2, '0');
    let Seconds = String(date.getSeconds()).padStart(2, '0');

    // if(Seconds.toString().length === 1 ){
    //     Seconds = '0' + Seconds;   // 초 앞에 0
    // }
    

    // time.innerText = Hours + ':' + Minutes + ':' + Seconds;
    time.innerText = `${Hours} : ${Minutes} : ${Seconds}`;


}
getTime(); 
setInterval(getTime, 1000);







