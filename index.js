var prevScrollpos = window.pageYOffset;
/*page.YOffser 은 스크롤이 Y로 얼마나 스크롤되었는지 픽셀 단위로 나타냄*/ 


window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos)
  /*웹이 시작되자마자 값을 반환받는게 prevScrollpos이기 때문에 스크롤이 조금이라도 내려가면
항상 currentScrollPos보다 작게된다.*/
 {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  /* 마지막에 현재 스크롤값을 과거 스크롤값에 넣어서... 뭐하는거지? 
  window.onscroll 은 스크롤이 움직일때마다 촉발되므로 */ 
}


/*
The onscroll property of the GlobalEventHandlers mixin 
is an EventHandler that processes scroll events.
The scroll event fires when the document view or an element has been scrolled, 
whether by the user, a Web API, or the user agent.

window.onscroll 이라는건 스크롤이 움직일떄 작동하는데, 거기에 function을 넣었으므로 
스크롤이 이동할때 작동함. 
*/ 