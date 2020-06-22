window.onload = function() {
	
		var width = window.innerWidth-50;
		var height = window.innerHeight-50;	
	
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 5000 );		
		
		var renderer = new THREE.WebGLRenderer();
		
		document.body.appendChild( renderer.domElement );
		
		renderer.setSize( width, height );
		renderer.setClearColor(0x000000);
		
		
		var controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.target.set( 0, 0, 0 );
	
		camera.position.set( -10, 0, 0 );			
		
		controls.update();
		
		
		/****LIGHT****/
		{
			var light = new THREE.DirectionalLight(0xffffff, 1);
			light.position.set(-1, 2, 4);
			scene.add(light);
			
			var light2 = new THREE.DirectionalLight(0xffffff, 1);
			light2.position.set(1, -2, -4);
			scene.add(light2);
		}

		/****GEOMETRY AND MATERIAL******/
		var geometry = new THREE.BoxGeometry(1 ,1 ,1);
		var material = new THREE.MeshPhongMaterial( { color: 0xffffff} );	
		var material_center_figure = new THREE.MeshPhongMaterial( { color: 0xff0000} );	

		var material_field = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );		
		
		
		/***РЁБРА КУБА***/
		var geo_line = new THREE.EdgesGeometry( geometry );
		var mat_line = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 4} );	
		

		/***ARRAYS FIELD AND FIGURE***/
		var field = [					
						
						[
							[1,1,1,1,1,1,1,1], /***1***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],
						
						[
							[1,1,1,1,1,1,1,1], /***2***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],
						
						[
							[1,1,1,1,1,1,1,1], /***3***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],
						
						[
							[1,1,1,1,1,1,1,1], /***4***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],
						
						[
							[1,1,1,1,1,1,1,1], /***5***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],
						
						[
							[1,1,1,1,1,1,1,1], /***6***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],
						
						[
							[1,1,1,1,1,1,1,1], /***7***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],
						
						[
							[1,1,1,1,1,1,1,1], /***8***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],
						
						[
							[1,1,1,1,1,1,1,1], /***9***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],
						
						[
							[1,1,1,1,1,1,1,1], /***10***/
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,0,0,0,0,0,0,1],
							[1,1,1,1,1,1,1,1]
						],					
						
						[
							[1,1,1,1,1,1,1,1], /***0***/
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1]
						],
					];




		var figure = [
						 [[0,0,0],
						  [0,0,0],
						  [0,0,0]],
						
						 [[0,1,1],
						  [0,2,0],
						  [0,1,0]],
						  
						 [[0,0,0],
						  [0,0,0],
						  [0,0,0]],						  
						
					];
					
		
		/********ПЕРЕМЕННЫЕ*******/
		
		var x = 1;
		var y = 0;
		var z = 0;
		var timer, timeout;
		
		/********/
		
		animate();	
		
		
		
		/***********Управление*************/
		window.onkeydown = function(e) {
			if (e.keyCode === 65) {	/***A***/			
				clearScene();				
				figure = rotate90_x(figure, true);
				if (collision(figure, field, x , y, z)) {
					figure = rotate90_x(figure, false);
					console.log('Столкновение При повороте');
				}
				addScene_field();					
				addScene();				
			};			
			if (e.keyCode === 87) {	/***W***/			
				clearScene();			
				figure = rotate90_y(figure, false);	
				if (collision(figure, field, x , y, z)) {
					figure = rotate90_y(figure, true);
					console.log('Столкновение При повороте');
				}
				addScene_field();
				addScene();					
			};
			if (e.keyCode === 68) { /***D***/				
				clearScene();				
				figure = rotate90_x(figure, false);	
				if (collision(figure, field, x , y, z)) {
					figure = rotate90_x(figure, true);
					console.log('Столкновение При повороте');
				}
				addScene_field();
				addScene();				
			};			
			if (e.keyCode === 83) { /***S***/				
				clearScene();				
				figure = rotate90_y(figure, true);
				if (collision(figure, field, x , y, z)) {
					figure = rotate90_y(figure, false);
					console.log('Столкновение При повороте');
				}
				addScene_field();
				addScene();				
			};	

			if (e.keyCode === 38) {	/***Up***/			
				clearScene();				
				x++;
				if (collision(figure, field, x , y, z)) {
					x--;
					console.log('Границаup');
				}
				addScene_field();					
				addScene();				
			};			
			if (e.keyCode === 40) {	/***Down***/			
				clearScene();
				x--;	
				if (collision(figure, field, x , y, z)) {
					x++;
					console.log('Границаdown');
				}
				addScene_field();
				addScene();					
			};			
			
			if (e.keyCode === 37) {	/***Left***/			
				clearScene();				
				z--;
				if (collision(figure, field, x , y, z)) {
					z++;
					console.log('Границаleft');
				}
				addScene_field();					
				addScene();				
			};			
			if (e.keyCode === 39) {	/***Right***/			
				clearScene();
				z++;	
				if (collision(figure, field, x , y, z)) {
					z--;
					console.log('Границаright');
				}
				addScene_field();
				addScene();					
			};
			
			renderer.render( scene, camera );			
		}
		
		
		window.onmousedown = animate_camera;		
		window.onresize = resize;
		
		
		/*********Функции**************/
		
		function resize() {			
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}
		
		function animate_camera() {
			requestAnimationFrame( animate_camera );	
			controls.target.set( 0, 0, 0 );		
			camera.position.set( -10, 0, 0 );	//убрать строку для вращения камеры
			controls.update();
			renderer.render( scene, camera );
		}
		
		
		function animate() {
			timeout = setTimeout(function() {	
				timer = window.requestAnimationFrame(animate);
				y++;	
			}, 1000);
			
			
			if (collision(figure, field, x, y, z)) {
				y--;
				window.cancelAnimationFrame(timer);
				clearTimeout(timeout);
				console.log('Столкновение');
			}
			clearScene();
			addScene_field();		
			addScene();	
			renderer.render( scene, camera );
		}
	
		
		function collision(arr1, arr2, dx, dy, dz) {	
				
			for (let i = 0; i < arr1.length; ++i) 	
				for (let j = 0; j < arr1[i].length; ++j)	
					for (let k = 0; k < arr1[i][j].length; ++k) {	
						if ((arr1[i][j][k])&&(arr2[i+dy][j+dx][k+dz])) { 					
							return true;
						}
				}
			return false;
		}	
		
		
		function addScene() {
			for (let i = 0; i < figure.length; ++i)
				for (let j = 0; j < figure[i].length; ++j)
					for (let k = 0; k < figure[i][j].length; ++k)					
					{
						if (figure[i][j][k]) {
							let wireframe = new THREE.LineSegments( geo_line, mat_line );							
							wireframe.position.set( i+y, j-3+x, k-3+z );
							scene.add( wireframe );
						}
						if (figure[i][j][k] === 1) {
							let cube = new THREE.Mesh( geometry, material );
							cube.position.set( i+y, j-3+x, k-3+z );							
							scene.add(cube);
							
						}	
						else if (figure[i][j][k] === 2){
							let cube = new THREE.Mesh( geometry, material_center_figure );
							cube.position.set( i+y, j-3+x, k-3+z );							
							scene.add(cube);
							
						}
					}
		}
		
		
		function addScene_field() {
			for (let i = 0; i < field.length; ++i)
				for (let j = 0; j < field[i].length; ++j)
					for (let k = 0; k < field[i][j].length; ++k)					
					{	
						if (field[i][j][k]) {
							let cube_field = new THREE.Mesh( geometry, material_field );
							cube_field.position.set( i, j-3, k-3);						
							scene.add(cube_field);
							let wireframe = new THREE.LineSegments( geo_line, mat_line );
							wireframe.position.set( i, j-3, k-3);
							scene.add( wireframe );
						}							
					}
		}	


		function clearScene() {
			for (let i = scene.children.length - 1; i >= 0; i--) {
				if ((scene.children[i].type === "Mesh")||(scene.children[i].type === "LineSegments"))
					scene.remove(scene.children[i]);
			}
		}		
		
		
		function rotate90_x(mas, reverse) {
			var new_mas = [];
			for (let i = 0; i < mas.length; i++) {
				new_mas[i] = [];
				for (let m = 0; m < mas[i].length; m++)
				{
					new_mas[i][m] = [];
					for (let n = 0; n < mas[i][m].length; n++)
					{
						if (reverse) new_mas[i][m][n] = mas[i][n][mas[m].length-1-m];
						else new_mas[i][m][n] = mas[i][n][m];				
					}
					if (!reverse) new_mas[i][m].reverse();
				}
			}
			return new_mas;
		}		
		
		
		
		function rotate90_y(mas, reverse) {
			var new_mas = new_array3x3(mas);			
			for (let i = 0; i < mas.length; i++) 
				for (let m = 0; m < mas[i].length; m++)
					for (let n = 0; n < mas[i][m].length; n++) {
						if (reverse) new_mas[mas.length-i-1][n][m] = mas[n][i][m];	
						else new_mas[i][mas.length-n-1][m] = mas[n][i][m];								
					}		
			return new_mas;
		}			
		
		function new_array3x3(mas) {
			var new_mas = [];
			for (let i = 0; i < mas.length; i++) {
				new_mas[i] = [];
				for (let m = 0; m < mas[i].length; m++)
				{
					new_mas[i][m] = [];
					
					for (let n = 0; n < mas[i][m].length; n++) {					
						new_mas[i][m][n] = 0;
					}
				}
			}
			return new_mas;
		}		
}

















