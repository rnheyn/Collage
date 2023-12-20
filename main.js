SpeechRecognition = window.webkitSpeechRecognition
r = new SpeechRecognition()
function start() {
    // document.getElementById("textbox").innerHTML=""
    r.start()
}
r.onresult = function (event) {
    console.log(event)
    content = event.results[0][0].transcript
    //document.getElementById("textbox").innerHTML=content
    if (content=="selfie") {
        speak()   
    }
   
}
var camera = document.getElementById("camera")
function speak() {
    img_id = "selfie1"
    var synth = window.speechSynthesis
    // var speakdata=document.getElementById("textbox").value 
    var speakdata = "taking your selfie in 5 seconds"
    var utter = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utter)
    Webcam.attach(camera)
    setTimeout(function () { 
        img_id = "selfie1";
         take_snapshot();
          speak_data = "Taking your next Selfie in 10 seconds";
           var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis); 
        }, 5000);
        setTimeout(function () { 
            img_id = "selfie2";
             take_snapshot();
              speak_data = "Taking your next Selfie in 10 seconds";
               var utterThis = new SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis); 
            }, 10000);
            setTimeout(function () { 
                img_id = "selfie2";
                 take_snapshot(); 
                }, 15000);
    
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90,
})
function take_snapshot() {
    Webcam.snap(function (data_uri) {
if (img_id=="selfie1") {
    document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"'
}
if (img_id=="selfie2") {
    document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"'
}
if (img_id=="selfie3") {
    document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"'
}
    })
}