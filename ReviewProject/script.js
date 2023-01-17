// local reviews data
const reviews = [
  {
    id: 1,
    book_title: "데미안",
    book_author: "헤르만헤세",
    book_image:
      "./img/book1.jpg",
    book_review:
      "새는 싱클레어처럼 성장통을 겪고 있는 사람들을 의미하고 알은 그 사람들이 극복해야 할 시련을 의미하며 파괴한다는 말 자체가 극복, 아브락사스에게 나아가는 길 자체는 나락과 구원으로 얼룩진 인생을 의미한다. 그렇게 도달한 선과 악의 신 아브락사스는 역경이 있어야 성장도 있다는 깨달음을 주는 개념이 아닌가 하는 생각을 가져본다.",
  },
  {
    id: 2,
    book_title: "히든피겨스",
    book_author: "마고 리 셰털리",
    book_image:
      "./img/book2.jpg",
    book_review:
      "인간을 화성에 보내는 일이 인간을 지구 궤도로 보내는 일이나 달에 착륙시키는 일보다 어려울 게 뭐가 있단 말인가? 하나가 쌓여 그다음을 만든다. 캐서린 존슨은 알았다. '일단 첫걸음을 내디였다면 그다음엔 무엇이든 가능하다.' 는 사실을.",
  },
  {
    id: 3,
    book_title: "책은 도끼다.",
    book_author: "박웅현",
    book_image:
      "./img/book3.jpg",
    book_review:
      "기억하는 가장 좋은 방법은 감동받는 것이라고 합니다. 그래서인지 지식이 많은 친구들보다, 감동을 잘 받는 친구들이 일을 더 잘합니다.\n감동을 잘 받는다는 건 풍요로운 삶을 살고 있다는 증거이기 때문입니다.",
  },
  {
    id: 4,
    book_title: "여덟단어",
    book_author: "박웅현",
    book_image:
      "./img/book4.jpg",
    book_review:
      "지금 내가 겪고 있는 불행은 언젠가 내가 잘못 보낸 시간의 결과다. 왜 하루하루를 성실하게 살아야 하는냐? 지금 내가 잘 보낸 시간은 긍정으로 돌아오고, 지금 내가 잘못 보낸 시간은 부정으로 돌아온다는 걸 염두에 두고 하루하루를 살아야 합니다.",
  },
  {
    id: 5,
    book_title: "Who Moved My Cheese?",
    book_author: "스펜서 존슨",
    book_image:
      "./img/book5.jpg",
    book_review:
      "You could be more aware of the need to keep things simple, be flexible, and move quickly.\n  You did not need to overcomplicate matters or confuse yourself with fearful beliefs.",
  },
  {
    id: 6,
    book_title: "모순",
    book_author: "양귀자",
    book_image:
      "./img/book6.jpg",
    book_review:
      "하지 않아도 될 말들을 부득불 해가면서 살아갈 필요가 어디 있겠는가. 아껴서 좋은 것은 돈만이 아니었다. 어쩌면 돈보다 더 아껴야 할 것은 우리가 아무 생각 없이 내뱉는 말들이었다.",
  },
  {
    id: 7,
    book_title: "어떻게 살 것인가",
    book_author: "유시민",
    book_image:
      "./img/book7.jpg",
    book_review:
      "하루가 모여 인생이 된다. 인생 전체가 의미 있으려면 살아 있는 모든 순간들이 기쁨과 즐거움, 보람과 황홀감으로 충만해야 한다. ",
  },
]


// select items
const book_image = document.getElementById("book_img");
const book_title = document.getElementById("book_title")
const book_author = document.getElementById("book_author");
const book_review = document.getElementById("book_review")

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 1;

// show Book_review based on item
function showReview(book) {
  const item = reviews[book];
  book_image.src = item.book_image;
  book_title.textContent = item.book_title;
  book_author.textContent = item.book_author;
  book_review.textContent = item.book_review;
}

// next 버튼 이벤트 
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview(currentItem);
});

//prev 버튼 이벤트
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length-1;
  }
  showReview(currentItem);
});

//random 버튼 이벤트
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random()*reviews.length) 
  showReview(currentItem);
});

