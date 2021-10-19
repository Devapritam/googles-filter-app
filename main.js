noseX = 0;
noseY = 0;

function preload() {
    clown_img = loadImage("https://i.postimg.cc/pTKcVQJc/image-removebg-preview-11.png");
}

function setup() {
    canvas = createCanvas(400, 360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 360);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    window.alert('poseNet model has been initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 50;
        noseY = results[0].pose.nose.y - 55;
        console.log('nose x = ' + noseX);
        console.log('nose y = ' + noseY);
    }
}


function draw() {
    image(video, 0, 0, 400, 360);
    // fill(255, 0, 0);
    // stroke(255, 0, 0);
    // circle(noseX, noseY, 20);
    image(clown_img, noseX, noseY, 100, 100);
}