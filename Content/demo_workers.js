var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();

if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }

  w.onmessage = function(event){
    document.getElementById("result").innerHTML = event.data;
  };


  