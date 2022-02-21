Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:368776930465
});

    camera=document.getElementById("camera");
    Webcam.attach("#camera");

 function clickthis(){
     Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= "<img id='ss' src="+ data_uri +">";
     });
 }


 classify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded);


 function modelLoaded(){
     console.log("modelLoaded");
 }
 
