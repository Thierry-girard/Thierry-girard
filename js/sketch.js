//Last Y rotation
var horizontalBubbleAngle;

//Last X rotation
var verticalBubbleAngle;

const radBubble = 80;
var bubbleImg;
var backgroundImg;

function preload()
{
  bubbleImg = loadImage("/images/bubble.png");
  backgroundImg = loadImage("/images/background.jpg");
}

function setup() 
{
  createCanvas(screen.width, screen.height);
  //backgroundImg.resize(screen.width, screen.heights)

  angleMode(DEGREES);

  horizontalBubbleAngle = 0; 
  verticalBubbleAngle = 0;

  textSize(20);

  bubbleImg.resize(radBubble,0);
}

function draw() 
{
  clear();
  background(backgroundImg);

  //A plat
  if(rotationY != null && rotationX != null)
  {
    //Horizontal bar
    fill(87,68,46);
    rect(screen.width*0.15-radBubble/2, screen.height-(screen.height* 1 / 6)-radBubble/2, screen.width*0.85+radBubble/2 - (screen.width*0.15-radBubble/2),radBubble, 40);

    //Vertical bar
    rect(screen.width-(screen.width*0.15)-radBubble/2, (screen.height*0.75-radBubble/2)*0.10, radBubble, (screen.height*0.75)*0.90, 40);

    //Horizontal bubble
    let deltaRotationY = sin(rotationY) - sin(horizontalBubbleAngle);
    horizontalBubbleAngle += map(deltaRotationY,-2,2,-5,5)

    image(bubbleImg,screen.width*map(cos(horizontalBubbleAngle+90),-1,1,0.15,0.85)-radBubble/2,screen.height-(screen.height* 1 / 6)-radBubble/2);

    //Vertical bubble
    let deltaRotationX = sin(rotationX) - sin(verticalBubbleAngle);
    verticalBubbleAngle += map(deltaRotationX,-2,2,-5,5)

    image(bubbleImg,screen.width-(screen.width*0.15)-radBubble/2, (screen.height*0.75-radBubble/2)*map(cos(verticalBubbleAngle+90),-1,1,0.10,0.90))

   
    if(rotationX <= 2 && rotationX >=2){
      fill(0, 255, 0);
    }
    else{
      fill(255,255,255);
    }
    text("Angle : "+Math.round(rotationX * 10) / 10 +"°",screen.width-((screen.width*0.15)-100),screen.height/3);
    if(rotationY <= 2 && rotationY >=2){
      fill(0, 255, 0);
    }
    else{
      fill(255,255,255);
    }
    text("Angle : "+Math.round(rotationY * 10) / 10+ "°",screen.height-(screen.height* 1 / 6),screen.height-(screen.height*0.25 / 2)-radBubble);
  }
  else
  {
    text("No rotation found",10,30);
  }
}