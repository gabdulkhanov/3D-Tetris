window.onload = function() {
		/**********ДАННЫЕ************/		
		
		var x = 2;
		var y = 0;
		var z = 1;
		var pause = false;
		var timer, timeout;
		
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
		
	
		/**************************/
		
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



		var material_field = [	new THREE.MeshPhongMaterial( { color: 0xe87e0c } ),
								new THREE.MeshPhongMaterial( { color: 0x0a0345 } ),
								new THREE.MeshPhongMaterial( { color: 0x11d4f2 } ),
								new THREE.MeshPhongMaterial( { color: 0x9ba9e0 } ),
								new THREE.MeshPhongMaterial( { color: 0x0000ff } ),
								new THREE.MeshPhongMaterial( { color: 0x0ce8e4 } ),
								new THREE.MeshPhongMaterial( { color: 0xd52adb } ),
								new THREE.MeshPhongMaterial( { color: 0x40ff00 } ), //4
								new THREE.MeshPhongMaterial( { color: 0xeb092f } ), //3
								new THREE.MeshPhongMaterial( { color: 0xe6f035 } ), //2
								new THREE.MeshPhongMaterial( { color: 0x1015c2 } )  //1
							];
		
		
		
		/***РЁБРА КУБА***/
		var geo_line = new THREE.EdgesGeometry( geometry );
		var mat_line = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 4} );		

		
		
		/***********МОДАЛЬНОЕ ОКНО***********/
		var ok = document.getElementById("ok");
		var openModal = document.getElementById("openModal");
		
		ok.onclick = function() {
			openModal.style.display = "none";
			openModal.style.pointerEvents = "none";
			animate();
		}		
		
		
		
		/***********Управление*************/
		window.onkeydown = function(e) {
			if (e.keyCode === 68) {	/***D***/			
				clearScene();				
				figure = rotate90_x(figure, true);
				if (collision(figure, field, x , y, z)) {
					figure = rotate90_x(figure, false);					
				}
				addScene_field();					
				addScene();				
			};			
			if (e.keyCode === 87) {	/***W***/			
				clearScene();			
				figure = rotate90_y(figure, false);	
				if (collision(figure, field, x , y, z)) {
					figure = rotate90_y(figure, true);					
				}
				addScene_field();
				addScene();					
			};
			if (e.keyCode === 65) { /***A***/				
				clearScene();				
				figure = rotate90_x(figure, false);	
				if (collision(figure, field, x , y, z)) {
					figure = rotate90_x(figure, true);					
				}
				addScene_field();
				addScene();				
			};			
			if (e.keyCode === 83) { /***S***/				
				clearScene();				
				figure = rotate90_y(figure, true);
				if (collision(figure, field, x , y, z)) {
					figure = rotate90_y(figure, false);					
				}
				addScene_field();
				addScene();				
			};	

			if (e.keyCode === 38) {	/***Up***/			
				clearScene();				
				x++;
				if (collision(figure, field, x , y, z)) {
					x--;					
				}
				addScene_field();					
				addScene();				
			};			
			if (e.keyCode === 40) {	/***Down***/			
				clearScene();
				x--;	
				if (collision(figure, field, x , y, z)) {
					x++;					
				}
				addScene_field();
				addScene();					
			};			
			
			if (e.keyCode === 37) {	/***Left***/			
				clearScene();				
				z--;
				if (collision(figure, field, x , y, z)) {
					z++;					
				}
				addScene_field();					
				addScene();				
			};			
			if (e.keyCode === 39) {	/***Right***/			
				clearScene();
				z++;	
				if (collision(figure, field, x , y, z)) {
					z--;					
				}
				addScene_field();
				addScene();					
			};
			
			if (e.keyCode === 32) {	/***Space***/			
				clearScene();
				while (!collision(figure, field, x , y, z)) y++;	
				if (collision(figure, field, x , y, z)) {
					y--;					
				}
				addScene_field();
				addScene();					
			};
			if (event.keyCode == 80) { /***p***/
				pause = !pause;
				animate();
			}
			
			
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
			if (!pause) {
				timeout = setTimeout(function() {	
					timer = window.requestAnimationFrame(animate);
					y++;	
				}, 1000);
			}
			else {
				console.log("Pause");
				window.cancelAnimationFrame(timer);
				clearTimeout(timeout);
			}
			
			
			if (collision(figure, field, x, y, z)) {
				y--;				
				
				update_field(figure, field, x, y, z);
				color_field(field);
				x = 2;
				y = 0;
				z = 2;				
			
			}
			clearScene();
			addScene_field();		
			addScene();	
			renderer.render( scene, camera );
		}
	
		
		function update_field(figura_arr, field_arr, dx, dy, dz) {
			for (let i = 0; i < figura_arr.length; ++i) 	
				for (let j = 0; j < figura_arr[i].length; ++j)	
					for (let k = 0; k < figura_arr[i][j].length; ++k){				
						if (figura_arr[i][j][k]) field_arr[i+dy][j+dx][k+dz] = figura_arr[i][j][k];
				}
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
							let cube_field = new THREE.Mesh( geometry, material_field[field[i][j][k]-1] );												
							cube_field.position.set( i, j-3, k-3);						
							scene.add(cube_field);
								
							let wireframe = new THREE.LineSegments( geo_line, mat_line );
							wireframe.position.set( i, j-3, k-3);
							scene.add( wireframe );
						}							
					}
		}	

		
		function color_field(field_arr) {
			for (let i = 0; i < field_arr.length-1; ++i)
				for (let j = 1; j < field_arr[i].length-1; ++j)
					for (let k = 1; k < field_arr[i][j].length-1; ++k)
					{
						if (field_arr[i][j][k]) field_arr[i][j][k] = i+2;
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

















