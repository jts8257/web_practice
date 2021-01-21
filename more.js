var elements = document.getElementsByTagName("div");


// 모든 영역 접기
for (var i = 0; i < elements.length; i++) {
  if (elements[i].className === "elements") {
    elements[i].style.display="none";
  } else if (elements[i].className === "label") {
    elements[i].onclick=switchDisplay;
    /*onclick=function() 이런식으로 값을 줄수도 있구나...*/
  }
}

/* for문에서 사용되는 요소인 elments는 div9개를 가진 요소임. 
이중에서 div3개는 className이 없기 때문에 그냥 스킵됨*/

// 상태에 따라 접거나 펼치기
function switchDisplay() {

  var parent = this.parentNode;
  var target = parent.getElementsByTagName("div")[1];
  /* target이 class="elements"인 경우임.
  그러면은 parent는 label인가? */

  if (target.style.display == "none") {
    target.style.display="block";
  } else {
    target.style.display="none";
  }
  return false;
}