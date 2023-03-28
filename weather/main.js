// 1. 날씨 api 사이트 들어가서 api커렌트 들어가서 주소 출력
// 2. my api키 들어가서 키값 가져오기

const API_KEY="90b262ad0bbcf4114ef65b3e7d5ee20d";  //날씨 api 키
const weatherIcon = document.querySelector('.weatherIcon');
const weatherTemp = document.querySelector('.weatherTemp');

    // navigator.geolocation.getCurrentPosition((position) => console.log(position)); 콘솔로그로 찍어서 레티튜드 롱기튜드가져오기

navigator.geolocation.getCurrentPosition((position) => { //현재위치 불러오기 파라미터안에 포지션은 임의로 지어준거

    const lat = position.coords.latitude;  //레티튜드 경로 포지션 밑에 콜드스 밑에 레티튜드 상수로 만들기
    const lon = position.coords.longitude; //롱기튜드 경로 포지션 밑에 콜드스 밑에 롱기튜드 상수로 만들기
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`; 
    //백틱을 이용헤서 주소를 입력하고 렛 롱 에이피아이디 상수로 불러오기 그리고 에피아이키 뒤에 &units=metric 섭씨로받기

    // console.log(url); // 일단 콘솔로그로 유알엘 잘 나오는지 확인
    fetch(url) // 패치 프로미스 사용법 패치안에 상수 불러오기
    .then((response) => response.json())
    .then((data) => {
        weatherTemp.innerText = data.name + ", " + parseInt(data.main.temp) + "℃" ; 

        // weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;  //백틱문법
        weatherIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"; // 백틱사용안함

    }); 

},
    () => alert('Not allowed!') //경로차단하면 알람창뜨게 차단 잘 나왔는지 확인하기
);


// const a = async () => { //엑시오스문법 으로 불러오기
//     const response = wait.axios.get(url); // 주소값을 다 보내기 포스트방식도 있음


//     console.log(response.data);
// }

