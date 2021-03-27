var image=null;
var can = document.getElementById("can");

function upload()
{
  
  var fileinput = document.getElementById("fileinput") ;
  image = new SimpleImage(fileinput);
  image.drawTo(can);
 
}
function grayscale()
{
   var grayscale_image = image;
  if(grayscale_image!=null)
    {
    
      for(var pixel of grayscale_image.values())
        {
          var avg = (pixel.getGreen()+pixel.getBlue()+pixel.getRed())/3;
          pixel.setGreen(avg);
          pixel.setRed(avg);
          pixel.setBlue(avg);
        }
     grayscale_image.drawTo(can);
      }
   else
      {
      alert("No image has been uploaded");
      }
}
function redscale()
{
  redscale_image = image;
  if(redscale_image!=null)
    {
         for(var pixel of redscale_image.values())
        {
          var avg = (pixel.getGreen()+pixel.getRed()+pixel.getBlue())/3;
          if(avg<128)
            {
                pixel.setRed((avg*2));
                pixel.setGreen(0);
                pixel.setBlue(0);
            }
          else
            {
                pixel.setRed(255);
                pixel.setGreen((avg*2)-255);
                pixel.setBlue((avg*2)-255);
            }
    }
  redscale_image.drawTo(can);
    }
    else
    {
      alert("No image has been uploaded");
    }
}
function rainbow()
{
  rainbow_image = image;
  var h = rainbow_image.getHeight();
  if(rainbow_image!=null)
    {
      for(var pixel of rainbow_image.values())
        
        {
          var x = pixel.getX();
        var y = pixel.getY();
        var avg = (pixel.getGreen()+pixel.getBlue()+pixel.getRed())/3;
          
         if(y< h/7)
           {
             if(avg<128)
               {
                 pixel.setRed(avg*2);
                 pixel.setBlue(0);
                 pixel.setGreen(0);
               }
             else
               {
                  pixel.setRed(255);
                  pixel.setGreen((avg*2)-255);
                  pixel.setBlue((avg*2)-255);
               }
           }
          else if ( y>h/7 && y<(h*2/7) )
            {
              if(avg<128)
                {
                  pixel.setRed(2*avg);
                  pixel.setBlue(0);
                  pixel.setGreen(0.8*avg);
                }
              else
                {
                  pixel.setRed(255);
                  pixel.setBlue((2*avg)-255);
                  pixel.setGreen((1.2*avg)-51);
                }
            }
          else if (y>=(h*2/7) && y<(h*3/7))
            {
              if(avg<128)
                {
                  pixel.setRed(2*avg);
                  pixel.setGreen(2*avg);
                  pixel.setBlue(0);
                }
              else(avg>=128)
              {
                  pixel.setRed(255);
                  pixel.setGreen(255);
                  pixel.setBlue((2*avg)-255); 
              }
              
            }
          else if (y>=(h*3/7) && y<(h*4/7))
            {
              if(avg<128)
                {
                  pixel.setRed(0);
                  pixel.setGreen(2*avg);
                  pixel.setBlue(0);
                }
              else(avg>=128)
              {
                  pixel.setRed((avg*2)-255);
                  pixel.setGreen(255);
                  pixel.setBlue((2*avg)-255); 
              }
              
            }
          else if(y>=(h*4/7) && y<(h*5/7))
            {
              
               if(avg<128)
                {
                  pixel.setRed(0);
                  pixel.setGreen(0);
                  pixel.setBlue(avg*2);
                }
              else(avg>=128)
              {
                  pixel.setRed((avg*2)-255);
                  pixel.setGreen((2*avg)-255);
                  pixel.setBlue(255); 
              }
            }
          else if(y>=(h*5/7) && y<(h*6/7))
            {
              
              if(avg<128)
                {
                  pixel.setRed(0.8*avg);
                  pixel.setGreen(0);
                  pixel.setBlue(avg*2);
                }
              else(avg>=128)
              {
                  pixel.setRed((avg*1.2)-255);
                  pixel.setGreen((2*avg)-255);
                  pixel.setBlue(255); 
              }
            }
          else
            {
              
              if(avg<128)
                {
                  pixel.setRed(1.6*avg);
                  pixel.setGreen(0);
                  pixel.setBlue(avg*1.6);
                }
              else(avg>=128)
              {
                  pixel.setRed((avg*0.4)+153);
                  pixel.setGreen((2*avg)-255);
                  pixel.setBlue((avg*0.4)+153); 
              }
            }
             
             
           }
    }
  rainbow_image.drawTo(can);
}

function blurr()
{



var blurr_image = new SimpleImage(image.getWidth(),image.getHeight());

for(var pixel of blurr_image.values())
{
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random()<0.5)
    {
        blurr_image.setPixel(x,y,image.getPixel(x,y));
    }
    else
    {  
        var imgx = Math.floor((Math.random()*10));
        var imgy = Math.floor((Math.random()*10));
        if(x>=10 && y>=10)
      {
            var imgx1 = x-imgx;
            var imgy1 = y-imgy;
            blurr_image.setPixel( x, y, blurr_image.getPixel(imgx1,imgy1) );
      }
        else if( (x<10 && x>1) && ( y<10 && y>1 ) )
      {
              blurr_image.setPixel(x,y,blurr_image.getPixel(imgx1,imgy));
      }
      else
      {
          blurr_image.setPixel(x,y,image.getPixel(x,y));
      }
    }
}
  blurr_image.drawTo(can);
}
function reset()
{
  upload();
}


