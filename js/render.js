let render={};render.initRenderer=function(w,h){const renderer = new THREE.WebGLRenderer({antialias:true});renderer.setSize(w,h);renderer.setClearColor(0xdddddd,1);document.body.appendChild(renderer.domElement);return renderer;}