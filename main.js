SpeechRecognition=window.webkitSpeechRecognition
r=new SpeechRecognition()
function start() {
   // document.getElementById("textbox").innerHTML=""
    r.start()
}
r.onresult=function(event)
{console.log(event)
content=event.results[0][0].transcript
//document.getElementById("textbox").innerHTML=content
speak()
}
var camera=document.getElementById("camera")
function speak() {
    var s=window.speechSynthesis
   // var speakdata=document.getElementById("textbox").value 
   var speakdata=content
    var utter=new SpeechSynthesisUtterance(speakdata)
    s.speak(utter)
    Webcam.attach(camera)
}
Webcam.set({ 
    width:360,
    height:250,
    image_format:"png",
    png_quality:90,
})