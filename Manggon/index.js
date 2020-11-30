function show(ques) {
  var i, tablink;
  tablink = document.getElementsByClassName("answer");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].style.display = "none";
  }
  tablink = document.getElementsByClassName("answer");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" show", "");
  }
  document.getElementById(ques).style.display = "block";
  var current = document.getElementById(ques);
  current.className =  current.className + " show";
}
