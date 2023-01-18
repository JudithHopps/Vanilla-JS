// count 초기 설정
let count = 0;

// select dom
const num = document.getElementById("num");
const btn_decrease = document.querySelector(".btn_decrease");
const btn_reset = document.querySelector(".btn_reset");
const btn_increase = document.querySelector(".btn_increase");

// 버튼 이벤트

btn_decrease.addEventListener("click",function () {
  count--;
  num.textContent = count>0 ? "+" + count : count;
  colorChange()
});

btn_reset.addEventListener("click",function () {
  count = 0;
  num.textContent = count;
  colorChange()
});

btn_increase.addEventListener("click",function () {
  count++;
  num.textContent = count>0 ? "+" + count : count;
  colorChange(count)
});

// 음수 양수 css 전환
function colorChange() {
  if (count < 0) num.style.color ="red"
  if (count > 0) num.style.color ="green";
  if (count == 0) num.style.color = "black";
}


