const time = document.querySelector('.time');
function getTime() {
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

const QUOTES = 'quotes';

function getQuotes() {
  const quotesMsg = document.querySelector('.quotesMsg');
  let savedQuotes = localStorage.getItem(QUOTES);

  if (!savedQuotes) {
    //savedQuotes 값이 없다면
    localStorage.setItem(
      QUOTES,
      JSON.stringify(['안녕하세요.', '반가워요.', '니하오.'])
    ); //추가

    savedQuotes = localStorage.getItem(QUOTES);
  }

  let quotesArray = JSON.parse(savedQuotes);

  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();
setInterval(getQuotes, 1000);

// function onClickAdd() {
//     const newQuotes = document.querySelector('.newQuotes');

//     newQuotes.style.display = 'inline-block';
// }

//     let newQuotesButton = document.querySelector('.newQuotesButton');
//     let newQuotesInput = document.querySelector('.newQuotesInput');
//     let newQuotesList = document.querySelector('.newQuotesList');

//     newQuotesButton.addEventListener("click", function(){
//     let list = document.createElement('li') //리스트 생성

//     list.innerText = newQuotesInput.value; //li 할일 입력
//     newQuotesList.appendChild(list); //리스트를 할일 자식 붙이기
//     newQuotesInput.value= "";   //텍스트초기화

// })

function onClickAdd() {
  const newQuotes = document.querySelector('.newQuotes');

  newQuotes.style.display = 'inline-block';
}

function onClickRegist() {
  const quotesMsg = document.querySelector('.quotesMsg');
  const newQuotes = document.querySelector('.newQuotes');
  const newQuotesInput = document.querySelector('.newQuotesInput');

  if (!newQuotesInput.value) {
    return;
  }

  let savedQuotes = localStorage.getItem(QUOTES); //

  let quotesArray = JSON.parse(savedQuotes); //배열로 가져오고
  quotesArray.push(newQuotesInput.value); //마지막에 추가 

  localStorage.setItem(QUOTES, JSON.stringify(quotesArray)); //새로운 명언추가하는 함수

  quotesMsg.innerText = newQuotesInput.value;
  newQuotes.style.display = 'none';
//   newQuotesInput.value = '';
}


// const a ={
//   question: '질문입니다.',
// }
// const b ={
//   question: question,
// }
// const c ={
//   question,
// }


async function onClickSearch(){
  const searchInput = document.querySelector('.searchInput');
  const searchResult = document.querySelector('.searchResult');
  if(!searchInput.value) return;

  const question = searchInput.value;

  searchInput.value = '검색 중 입니다... 잠시만 기다려주세요.';

  //프론트엔드에서 백엔드로 보내는 코드 awiat는 그냥 사용 못해서 함수 앞에 async
  const response = await axios.post( //백엔드가 포스트 요청을 받기위해
    "https://holy-fire-2749.fly.dev/chat", //첫번째 백엔드주소
    {question,}, //두번째 백엔드 제이슨 오브젝트형{} 몸통
    {headers : { //헤더
      "Content-Type": "application/json",
      Authorization: "Bearer BLOCKCHAINSCHOOL3",
    },
    } 
  ); 

  if(response.status === 200){
    searchResult.style.display = 'inline';
    searchResult.innerText = response.data.choices[0].message.content;
  }
  searchInput.value =""; //검색후 벨류값을 초기화
}

