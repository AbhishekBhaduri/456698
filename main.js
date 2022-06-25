
leftWristX=""
leftWristY=""
rightWristX=""
rightWristY=""
leftWristscore=""
song1_status=""
song2_status=""


function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size (600,500);
    poseNet= ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses)
}

function draw()
{
    canvas = createCanvas(600,500);
    
    image(video,0,0,600,500)
song1_status=song1.isPlaying()
song2_status=song2.isPlaying()


if(leftWristscore > 0.2){
    circle()
    song2.stop()

    if(song1_status==false){
        song1.play()
    }
}
}


function modelloaded()
{
    console.log("Pose net is initatialized")
}


function preload()
{

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("leftWristX = " + leftWristX + "leftWrstY = " + leftWristY)
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY)

        leftWristscore = results[0].pose.keypoints[9].score
        console.log("scoreleftwrist = " + leftWristscore);

        rightWristscore = results[0] .pose.keypoints[10].score
        console.log("sorerightwrist = " + rightWristscore);
    }
    }