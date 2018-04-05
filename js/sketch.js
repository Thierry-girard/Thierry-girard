//Last Y rotation
var horizontalBubbleAngle;

//Last X rotation
var verticalBubbleAngle;


const radBubble = 80;
var bubbleImg;

const DEBUG = false;

function preload()
{
  bubbleImg = loadImage("/images/bubble.png");
}

function setup() 
{
  createCanvas(screen.width, screen.height);

  background(255,255,255);   
  angleMode(DEGREES);

  horizontalBubbleAngle = 0; 
  verticalBubbleAngle = 0;

  textSize(20);

  bubbleImg.resize(radBubble,0);
}

function draw() 
{
  background(255,255,255);

  //A plat
  if(rotationY != null && rotationX != null)
  {
    //Horizontal bubble
    let deltaRotationY = sin(rotationY) - sin(horizontalBubbleAngle);
    horizontalBubbleAngle += map(deltaRotationY,-2,2,-5,5)


    fill(255,255,0);
    //ellipse(screen.width*map(cos(horizontalBubbleAngle+90),-1,1,0.10,0.9),screen.height-(screen.height*0.25 / 2)-radHorizontalBubble, radHorizontalBubble, radHorizontalBubble);
    image(bubbleImg,screen.width*map(cos(horizontalBubbleAngle+90),-1,1,0.10,0.9),screen.height-(screen.height*0.25 / 2)-radBubble);
    //Vertical bubble
    let deltaRotationX = sin(rotationX) - sin(verticalBubbleAngle);
    verticalBubbleAngle += map(deltaRotationX,-2,2,-5,5)

    fill(255,255,0);
    //ellipse(screen.width-(screen.width*0.25/2)-radVerticalBubble, (screen.height*0.75-radHorizontalBubble)*map(cos(verticalBubbleAngle+90),-1,1,0.10,0.90), radVerticalBubble, radVerticalBubble);
    image(bubbleImg,screen.width-(screen.width*0.25/2)-radBubble*1.5, (screen.height*0.75-radBubble)*map(cos(verticalBubbleAngle+90),-1,1,0.10,0.90))

    fill(0,0,0);
    text("RotationX : "+Math.round(rotationX * 10) / 10,50,screen.height/2);
    text("RotationY : "+Math.round(rotationY * 10) / 10,50,screen.height-(screen.height*0.25 / 2)-radBubble);

    if(DEBUG)
    {
      fill(0,0,0);
      text("RotationX : "+rotationX,50,40);
      text("RotationY : "+rotationY,50,70);
      text("RotationZ : "+rotationZ,50,100);

      text("verticalBubbleAngle : "+verticalBubbleAngle,50,140);
      text("horizontalBubbleAngle : "+horizontalBubbleAngle,50,170);
    }
  }
  else
  {
    text("No rotation found",10,30);
  }
}