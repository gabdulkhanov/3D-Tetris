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
		camera.position.set( 0, 14, 0 );		
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
							[1,1,1,1,1,1,1,1], /***0***/
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1],
							[1,1,1,1,1,1,1,1]
						],
						
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
						
					];




		var figure = [
						 [[0,0,0],
						  [0,0,0],
						  [0,1,0]],
						
						 [[0,1,1],
						  [0,2,0],
						  [0,1,0]],
						  
						 [[0,0,0],
						  [0,0,0],
						  [0,0,0]],						  
						
					];
					
		
		/*******************/
		
		
		addScene_field();		
		addScene();			
		renderer.render( scene, camera );		
		
		
		/***********Управление*************/
		window.onkeydown = function(e) {
			if (e.keyCode === 65) {	/***A***/			
				clearScene();				
				figure = rotate90_x(figure, true);
				addScene_field();					
				addScene();				
			};			
			if (e.keyCode === 87) {	/***W***/			
				clearScene();			
				figure = rotate90_y(figure, false);	
				addScene_field();
				addScene();					
			};
			if (e.keyCode === 68) { /***D***/				
				clearScene();				
				figure = rotate90_x(figure, false);	
				addScene_field();
				addScene();				
			};			
			if (e.keyCode === 83) { /***S***/				
				clearScene();				
				figure = rotate90_y(figure, true);	
				addScene_field();
				addScene();				
			};				
			renderer.render( scene, camera );			
		}
		
		
		window.onmousedown = animate;		
		window.onresize = resize;
		
		
		/*********Функции**************/
		
		function resize() {			
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}
		
		function animate() {

			requestAnimationFrame( animate );	
			controls.target.set( 0, 0, 0 );		
			camera.position.set( 0, 14, 0 );//убрать строку для вращения камеры
			controls.update();
			renderer.render( scene, camera );

		}
		
		
		function addScene() {
			for (let i = 0; i < figure.length; ++i)
				for (let j = 0; j < figure[i].length; ++j)
					for (let k = 0; k < figure[i][j].length; ++k)					
					{
						if (figure[i][j][k]) {
							let wireframe = new THREE.LineSegments( geo_line, mat_line );
							wireframe.position.set( k, i, j );
							scene.add( wireframe );
						}
						if (figure[i][j][k] === 1) {
							let cube = new THREE.Mesh( geometry, material );
							cube.position.set( k, i, j );							
							scene.add(cube);
							
						}	
						else if (figure[i][j][k] === 2){
							let cube = new THREE.Mesh( geometry, material_center_figure );
							cube.position.set( k, i, j );							
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
							cube_field.position.set( k-3, i-9, j-3 );							
							scene.add(cube_field);
							let wireframe = new THREE.LineSegments( geo_line, mat_line );
							wireframe.position.set( k-3, i-9, j-3);
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

















