 window.onload = function(){
        //canvas init
        var canvas = document.getElementById("gwd-canvas");
        var ctx = canvas.getContext("2d");
            document.body.appendChild(canvas);

        //canvas 
        var W = 300;
        var H = 210;
        canvas.width = W;
        canvas.height = H;

        //flower 
        var mp = 55; //숫자조절
        var particles = [];
        for(var i = 0; i < mp; i++)
        {
            particles.push({
                x: Math.random()* 2, //x-coordinate
                y: Math.random()*H, //y-coordinate
                r: Math.random()*0.5+1, //radius
                d: Math.random()*mp //density
            })
        }

        //draw 
        function draw()
        {
            ctx.clearRect(0, 0, W, H);

            ctx.fillStyle = "rgba(255, 153, 255, 1)";
            ctx.beginPath();
            for(var i = 0; i < mp; i++)
            {
                var p = particles[i];
                ctx.moveTo(p.x, p.y);
                ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
            }
            ctx.fill();
            update();
        }

       
        var angle = 0;
        function update()
        {
            angle += 0.002;
            for(var i = 0; i < mp; i++)
            {
                var p = particles[i];
                
               
                p.y += Math.cos(angle+p.d) + 1 + p.r/2;
                p.x += Math.sin(angle) *2;

               
                if(p.x > W+5 || p.x < -5 || p.y > H)
                {
                    if(i%3 > 0) 
                    {
                        particles[i] = {x: Math.random()*2, y: -10, r: p.r, d: p.d};
                    }
                    else
                    {
                       
                        if(Math.sin(angle) > 0)
                        {
                            // left
                            particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                        }
                        else
                        {
                            // right
                            particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                        }
                    }
                }
            }
        }

      
        setInterval(draw, 30);
    }