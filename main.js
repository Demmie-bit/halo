song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;


function setup(){
    canvas = createCanvas(800, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("PoseNet Has Started");
}

function draw(){
    image(video, 0, 0, 800, 600);

    fill("#FF0000");
   stroke("#FF0000");

   if(scoreLeftWrist > 0,2){
   circle(leftWristX, leftWristY, 20);
   inNumberleftWristY = Number(leftWristY);
   remove_decimals = floor(inNumberleftWristY);
   volume = remove_decimals/500;
   document.getElementById("volume").innerHtML = "Volume = " + volume;
   song.setVolume(volume);
   }
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);

    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}

function modelLoaded(){
    console.log("PoseNet Has Started");
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}