canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "";

color = "blue";

lineWidth = 2;

canvas.addEventListener("mousedown", my_mousedown);

canvas.addEventListener("mouseup", my_mouseup);

canvas.addEventListener("mouseleave", my_mouseleave);

canvas.addEventListener("mousemove", my_mousemove);

function my_mousedown(e) {
    mouseEvent = "mousedown";
}

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function my_mousemove(e) {

    console.log(e);
    current_mouseX = e.clientX - canvas.offsetLeft;
    current_mouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;

        console.log("Last Position of X and Y coordinates="+"X="+last_mouseX+",Y="+last_mouseY);
        ctx.moveTo(last_mouseX,last_mouseY);

        console.log("Current Position of X and Y coordinates="+"X="+current_mouseX+",Y="+current_mouseY);
        ctx.lineTo(current_mouseX,current_mouseY);
        ctx.stroke();
    }
    last_mouseX=current_mouseX;
    last_mouseY=current_mouseY;
}

color = "black";
    width_of_line = 2;

    screen_width=screen.width;
    screen_height=screen.height;

    canvas_newwidth=screen_width-67;
    canvas_newheight=screen_height-300;

    if(screen_width<992)
    {
        canvas.width=canvas_newwidth;
        canvas.height=canvas_newheight;
        document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove",my_touchmove);

    function my_touchmove(e)
    {
     console.log(e);
current_position_of_touch_x=e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y=e.touches[0].clientY - canvas.offsetTop;
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }