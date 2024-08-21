let slideindex=1;

function showslide(n) {

  let i;

  let slide = document.getElementsByClassName("myslide");

  let dots=document.getElementsByClassName("dot");

  // 讓每次轉換圖檔時只會出現一個，其餘消失

  for (i=0 ; i < slide.length ; i++) {

    slide[i].style.display="none";

}

  //讓 class dot 有 active 的部分回復，避免一直有深灰色的點點

  for (i=0 ; i<dots.length ; i++ ) {

  dots[i].className =dots[i].className.replace(" active", "");

}

  slideindex=n;

  if ( slideindex > 3 ) { slideindex=1;}

  if ( slideindex <1 ) { slideindex=3; }

  slide[slideindex-1].style.display="block";

  //選擇的當前圖檔為 class 變為 "dot active" 也就是屬於兩組 class ,讓其點點為稍微深色的

  dots[slideindex-1].className += " active";



}

function CurrentSlide(n){

  showslide(n);

}

function PlusSlide(n){

  showslide(slideindex+n);

}