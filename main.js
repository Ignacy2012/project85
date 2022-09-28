//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


//Give specific height and width to the car image

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 255;

function add() {
	//upload car, and background images on the canvas.
	console.log("in the add function");
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground();
	background_imgTag.src =  background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar();
	greencar_imgTag.src =  greencar_image;


}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function left(){
    if(greencar_x>=0){
		console.log("car_x left");
        greencar_x = greencar_x - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function right(){

    if(greencar_x<=725){
		console.log("car_x right");
        greencar_x = greencar_x + 10;
        uploadBackground();
        uploadgreencar();
    }
}

function up(){

    if(greencar_y>=60){
	    console.log("car_y up");
        greencar_y =greencar_y - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function down(){
    
    if(greencar_y<=240){
		console.log("car_y down");
        greencar_y = greencar_y + 10;
        uploadBackground();
        uploadgreencar();
	}
}
