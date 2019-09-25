var topsk = 50;
var middlesk = 2200;
var bottomsk = 50;
var leftsk = 2200;
var brow = 50;
var rightsk = 50;
var brow2 = 2200;
var bottom2 = 50;
var nosel = 2200;
var noser = 50;
var mouth = 2200;
var leftt = 50;
var middlet = 50;
var rightt = 50;
var jaw = 2200;

var theTime;

function setup() {
createCanvas(2250,1500);
}
function draw(){
background("black");
    
    theTime = millis();
    
//outline
fill("white");
//top skull
rect(topsk,400,250,50);
//middle skull
rect(middlesk,450,350,50);
//bottomskull
rect(bottomsk,500,450,50);
//left skull
rect(leftsk,545,50,150);
//brow
rect(brow,545,150,50);
rect(brow2,600,50,50);
//right skull
rect(rightsk,545,50,140);
//bottom skull
rect(bottom2,645,350,50);
//nose left
rect(nosel,700,150,50);
//nsoe right
rect(noser,700,150,50);
//mouth
rect(mouth,750,250,50);
//teeth
//left
rect(leftt,800,50,50);
//middle
rect(middlet,800,50,50);
//right
rect(rightt,800,50,50);
    
//jaw 
rect(mouth,950,250,50);
//bottomteeth
rect(leftt,900,50,50);
//middle
rect(middlet,900,50,50);
//right
rect(rightt,900,50,50);
    
    
    if(topsk < 990)
        {topsk = topsk + 15}
    
    
    if(theTime > 1000)
        {
    if(middlesk > 950)
        {middlesk = middlesk - 15}
        }
    
    if(theTime > 2000)
    {      
    if(bottomsk < 890)
    {bottomsk = bottomsk + 15}
      }
    
    if(theTime > 3000)
    {  
    if(brow < 1050)
    {brow = brow + 15}
    }
    
    if(theTime > 4000)
    {  
    if(brow2 > 1105)
        {brow2 = brow2 -15}
    }
    
    if(theTime > 5000)
    {  
    if(rightsk < 1295)
        {rightsk = rightsk +15}

    {  
    if(leftsk > 905)
        {leftsk = leftsk - 15}
    }
    }
    
    if(theTime > 6000)
    {  
    if(bottom2 < 935.1)
        {bottom2 = bottom2 + 15}
    }
    
    if(theTime > 7000)
    {  
    if(nosel > 950)
        {nosel = nosel - 15}
    if(noser < 1150)
        {noser = noser + 15}
    }
    
    if(theTime > 8000)
    {  
    if(mouth > 1000)
        {mouth = mouth - 15}
    }
    
    if(theTime > 9000)
    {  
    if(leftt < 1002)
        {leftt = leftt + 15}
}


if(theTime > 9000)
    {  
    if(middlet < 1100)
        {middlet = middlet +15}
    }

if(theTime > 9000)
    {  
    if(rightt < 1190.02)
        {rightt = rightt + 15}
    }
}
