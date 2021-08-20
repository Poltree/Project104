Webcam.set({
    width:340,
    height:250,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("webcam");
Webcam.attach("#webcam");

function Capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("camerapic").innerHTML = '<img id="image" src="'+data_uri+'"/>'
    });

}
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cTExpOqzK/model.json",modelLoaded)