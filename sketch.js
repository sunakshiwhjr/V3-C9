var n1, n2, num1, num2;
var b1, b2, b3, b4;

function setup() {
  createCanvas(400, 400);


  num1 = createInput();
  num1.position(5,60);


  num2 = createInput();
  num2.position(200, 60);


  b1 = createButton("Add");
  b1.position(10, 200);
  b1.mousePressed(add);
  b1.style("background-color","tomato");
 

  b2 = createButton("Multiply");
  b2.position(100, 200);
  b2.mousePressed(mul);
  b2.style("background-color","orange");

  b3 = createButton("Sub");
  b3.position( 200, 200);
  b3.mousePressed(sub);
  b3.style("background-color","tomato");

  b4 = createButton("Div");
  b4.position(300, 200);
  b4.mousePressed(div);
  b4.style("background-color","orange");

  //textAlign(CENTER);
 // textSize(300);

}



function draw() {
  background("Teal");

  fill("white");
  textSize(20)
  text("Number 1", 50, 50);
  text("Number 2", 250, 50);

  n1 = parseInt(num1.value());
  n2 = parseInt(num2.value());


}

function add()
{
  console.log(n1 + n2);
}

function mul()
{

  console.log(n1 * n2);

}


function sub()
{

   console.log(n1-n2);

}


function div()
{

    console.log(n1/n2);
}