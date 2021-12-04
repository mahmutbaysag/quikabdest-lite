/*function play(){
  let url = chrome.runtime.getURL('abdest.mp3')
	console.log(url)

	let a = new Audio(url)
	a.play()
  }
*/



document.addEventListener("click", () =>{
  
	let url = chrome.runtime.getURL('abdest.mp3')
	
  document.getElementById("imgg").src="./fornoab.png"
  var n = document.getElementById("c")
  var b = document.getElementById("c").textContent
  var v = document.getElementById("v")
  var l = v.textContent.toString()

  if(b=="Abdest Yenile"){
    n.innerText = "Abdestlendin"
    v.innerHTML = "X1"
  }else if(b=="Abdestlendin"){

    n.innerText = "Abdestlendin"
    var d = parseInt(l.substring(1))
    v.innerHTML = "X"+(d+1).toString()
    dnee()
    
  }else{
    var s = parseInt(b)+1
    n.innerText = "Abdest X"+s.toString()
  }
	let a = new Audio(url)
	a.play()
  
})

function dnee(){
  var v = document.getElementById("v")
  var l = v.textContent.toString()
  var d = parseInt(l.substring(1))
  switch(d-1)
    {
      case 10:
        alert("Maşşalah")
        break;
      case 20:
        alert("Umarım sadece Kasa açıyorsundur")
        break;
      case 30:
        alert("Demiyim diyorum ama neyse")
        break;
      case 50:
        alert("Bi duş alsan daha iyi olacak sanki")
        break;
      case 100:
        alert("BU kadarı fazla kolaya kaçmak olmaz mı?")
        break;
    }
}



