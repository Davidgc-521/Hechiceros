function cambiarImagen()                 //GUARDA LA IMAGEN SELECCIONADA
					{
						var fotoSeleccionada = document.getElementById("fotos").value;
			
						var rutaImagen;
						switch(fotoSeleccionada) 
						{
							case "foto1":
								rutaImagen = "Img/perfil1.jpg";
								break;
							case "foto2":
								rutaImagen = "Img/perfil2.jpg"; 
								break;
							case "foto3":
								rutaImagen = "Img/perfil3.jpg";
								break;
							case "foto4":
								rutaImagen = "Img/perfil4.jpg"; 
								break;
						}
			
						var imagenSeleccionada = document.getElementById("imagen-seleccionada");            //ESTO ES LO QUE CAMBIA LA IMAGEN
						imagenSeleccionada.src = rutaImagen;
					}
			
					function crearPerfil()             //GUARDA LA INFO A JAVA
					{
						var nombre = document.getElementById("nombre").value;
						var apellido = document.getElementById("apellido").value;
						var edad = document.getElementById("edad").value;
						var fotoSeleccionada = document.getElementById("fotos").value;
						var grados = ["Grado Especial", "Primer Grado", "Segundo Grado", "Tercer Grado", "Cuarto Grado"]; // para los grados aleatorios
						var azar = Math.floor(Math.random() * grados.length);
						var gradoale = grados[azar];
			
						var rutaImagen;               //ELIGE LA FOTO
						switch(fotoSeleccionada) 
						{
							case "foto1":
								rutaImagen = "Img/perfil1.jpg";
								break;
							case "foto2":
								rutaImagen = "Img/perfil2.jpg"; 
								break;
							case "foto3":
								rutaImagen = "Img/perfil3.jpg";
								break;
							case "foto4":
								rutaImagen = "Img/perfil4.jpg"; 
								break;
						}
						
						if (!nombre || !apellido || !edad)    //POR SI NO SE RELLENA TODA LA INFO 
						{
							alert("Por favor rellene todos los datos necesarios");
						  	return;
						}

						var tarjetaDiv = document.getElementById("tarjeta");   //IMPRIME LA INFO EN LA PAGINA
						tarjetaDiv.innerHTML = 
						   `<img src="img/Icono.png" alt="fotito" id="ima">
							<h2 id="title">Tokyo Prefectural Jujutsu High School</h2><br><br><br>
							<p class="campo"> Numero ID  101012301</p>
							<p class="campo">Nombre  <span id="nomb">${nombre}  ${apellido}</span></p>
							<p class="campo">Edad: ${edad}</p>
							<p id="mini">THE ABOVE PROVES THEY ARE A STUDENT OF THIS SCHOOL</p>
							<img src="img/QR.jpg" alt="fotito" id="qr">
							<img src="${rutaImagen}" alt="fotito" class="foto">
							<div class="grade">
							<p id="gradito">${gradoale}</p>
							</div><br><br>`;
					}