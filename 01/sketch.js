
	function setup() {
createCanvas(700,500);   // Tamaño papel
background(213,195,164);   // Color papel

			strokeWeight(0); // tamaño pincel
		stroke(0,0,0); //color pincel
		beginShape(); // iniciar figura
		vertex(390,20); //crear vértice
    vertex(420,240); //crear vértice
 vertex(195,195); //crear vértice
		fill(255,255,0,200);
		endShape(close); //cerrar figura
		
	
		noStroke();   // Sin borde
fill(99,117,88,150);   // Color del relleno
ellipse(415, 250, 200, 200);   // Dibujar circulo

		noStroke();   // Sin borde
fill(74,54,97);   // Color del relleno
ellipse(50, 150, 135, 135);   // Dibujar circulo
		
		
		strokeWeight(5); // tamaño pincel
		stroke(0,0,0); //color pincel
		line(420,0,750,500) // dibujar linea
		
		strokeWeight(2); // tamaño pincel
		stroke(0,0,0); //color pincel
		line(490,0,500,20) // dibujar linea
		
		strokeWeight(7); // tamaño pincel
		stroke(0,0,0); //color pincel
		line(0,0,390,20) // dibujar linea
		
		strokeWeight(9); // tamaño pincel
		stroke(0,0,0); //color pincel
		line(100,0,370,300) // dibujar linea
		
		strokeWeight(4); // tamaño pincel
		stroke(0,0,0); //color pincel
		line(0,0,170,450) // dibujar linea
		
		strokeWeight(4); // tamaño pincel
		stroke(0,0,0); //color pincel
		line(0,350,350,350); // dibujar linea
		
      strokeWeight(12); //tamaño pincel
    stroke(181,178,155,100); // color pincel
    noFill(0,0,0,0); //sin relleno
    arc(30,350,135,135, PI,TWO_PI); // color sobre arco1
    
    strokeWeight(1); //tamaño pincel
    stroke(0,0,0); // color pincel
    noFill(0,0,0,0); //sin relleno
    arc(30,350,135,135, PI,TWO_PI); //arco1
    
    strokeWeight(12); //tamaño pincel
    stroke(255,206,194,110); // color pincel
    noFill(0,0,0,0); //sin relleno
    arc(-10,290,135,135, PI,TWO_PI); //color bajo el arco 2
    
        strokeWeight(1); //tamaño pincel
    stroke(0,0,0); // color pincel
    noFill(0,0,0,0); //sin relleno
    arc(-10,290,135,135, PI,TWO_PI); //arco 2
    
				strokeWeight(4); // tamaño pincel
		stroke(0,0,0); //color pincel
		line(0,160,310,160) // dibujar linea
		
		
		strokeWeight(3);   // Tamaño pincel
stroke(0,0,0);   // Color de la linea
fill(174,12,12);   // Color del relleno
rect(515, 350, 120, 60);   // Dibujar rectángulo
		
	strokeWeight(5); // tamaño pincel
		stroke(0,0,0); //color pincel
		line(570,390,650,390) // dibujar linea
		
		strokeWeight(4); // tamaño pincel
		stroke(0,0,0); //color pincel
		line(570,378,650,378) // dibujar linea
	
		
		
}  
