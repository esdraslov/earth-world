let box={};box.load=class load{obj=null;material=null;domElement=null;constructor(sx,sy,sz,x,y,z,color){this.obj=new THREE.BoxGeometry(sx,sy,sz);this.material=new THREE.MeshBasicMaterial({color: color});this.domElement=new THREE.Mesh(this.obj,this.material);}setY=function(y){this.domElement.position.y=y};setX=function(x){this.domElement.position.x=x};setZ=function(z){this.domElement.position.z=z};}