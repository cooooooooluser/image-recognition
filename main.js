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


 imageClassifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded);


 function modelLoaded(){
     console.log("modelLoaded");
 }
 

function check() {
   picture = document.getElementById("ss");
   imageClassifier.classify(picture, gotResult);
}

function gotResult(error, results){
   if(error){
       console.log(error);
   }
   else{
       console.log(results);
       document.getElementById("ObjectName").innerHTML = results[0].label;
       document.getElementById("ObjectAccuracy").innerHTML = results[0].confidence;
   }
   
}