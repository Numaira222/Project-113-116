
mustacheX=0;
mustacheY=0;



function preload() {

}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.position(110.250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
    


}

function draw() { 
    image(video, 0, 0, 400, 450);
    tint(tint_colour);
}


function take_snapshot() {

}

function filter_tint() {
    tint_colour = document.getElementById("colour_name").value;
}
function modelLoaded(){
    console.log("Posenet has initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        mustacheX=results[0].pose.nose.x-10;
        mustacheY=results[0].pose.nose.y-10;
        console.log("mustache x="+mustacheX);
        console.log("mustache y="+mustacheY);
    }
    }

