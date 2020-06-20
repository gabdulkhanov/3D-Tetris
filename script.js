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
		camera.position.set( -5, 10, 5 );		
		controls.update();
		
		
		
		{
			var light = new THREE.DirectionalLight(0xffffff, 1);
			light.position.set(-1, 2, 4);
			scene.add(light);
			
			var light2 = new THREE.DirectionalLight(0xffffff, 1);
			light2.position.set(1, -2, -4);
			scene.add(light2);
		}

		var geometry = new THREE.BoxGeometry(1,1,1);
		var material = new THREE.MeshPhongMaterial( { color: 0xffffff} );

		var figure = [
						 [[0,0,0],
						  [0,0,0],
						  [0,0,0]],
						
						 [[0,0,0],
						  [0,1,1],
						  [1,1,0]],
						  
						 [[0,0,0],
						  [0,0,0],
						  [0,0,0]],						  
						
					];
					
				
		let flag = true;
	
	
		
		addScene();
		
	
		
		renderer.render( scene, camera );
		
		
		
		
		window.onkeydown = function(e) {
			if (e.keyCode === 37) {				
			
				clearScene();				
				figure = rotate90_x(figure, true);
									
				addScene();
				
			};
			if (e.keyCode === 38) {			
				
				clearScene();			
				figure = rotate90_y(figure, flag, false);				
				addScene();				
				flag = !flag;
				
			};
			if (e.keyCode === 39) {
				
				clearScene();				
				figure = rotate90_x(figure, false);	
			
				addScene();
				
			};
			if (e.keyCode === 40) {
				
				clearScene();				
				figure = rotate90_y(figure, flag, true);			
				addScene();				
				flag = !flag;
			
			};
			
			
			renderer.render( scene, camera );
			
		}
		
		
		window.onmousedown = animate;	
		
		window.onresize = resize;
		
		
		
		function resize() {			
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}
		
		function animate() {

			requestAnimationFrame( animate );	
			controls.target.set( 0, 0, 0 );			
			controls.update();
			renderer.render( scene, camera );

		}
		
		
		function addScene() {
			for (let i = 0; i < figure.length; ++i)
				for (let j = 0; j < figure[i].length; ++j)
					for (let k = 0; k < figure[i][j].length; ++k)					
					{	
						if (figure[i][j][k]) {
							var cube = new THREE.Mesh( geometry, material );
							cube.position.set( k, i, j );							
							scene.add(cube);
						}						
					}
		}
		
		function clearScene() {
			for (let i = scene.children.length - 1; i >= 0; i--) {
				if(scene.children[i].type === "Mesh")
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


	
		
		
		
		function rotate90_y(mas, flag, reverse) {
			var new_mas = new_array3x3(mas);
			
			if (flag) {
				for (let i = 0; i < mas.length; i++) 
					for (let m = 0; m < mas[i].length; m++)
						for (let n = 0; n < mas[i][m].length; n++) {
							if (reverse) new_mas[mas.length-i-1][n][m] = mas[n][i][m];	
							else new_mas[i][n][m] = mas[n][i][m];								
						}
			}
			else {
				for (let i = 0; i < mas.length; i++) 
					for (let m = 0; m < mas[i].length; m++) 
						for (let n = 0; n < mas[i][m].length; n++) {
							if (reverse) new_mas[n][i][m] = mas[i][n][m];
							else new_mas[n][mas.length-i-1][m] = mas[i][n][m];								
					}
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

















