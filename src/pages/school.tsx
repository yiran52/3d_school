import { useEffect } from 'react';
import * as THREE from 'three'
import  { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const School = ()=>{
const scene = new THREE.Scene();
    // 加载模型
const loader = new GLTFLoader();
loader.load( 't1.glb', function ( glb ) { 
    console.log('1111');
     
	glb.scene.position.set(0,0, 0)
	scene.add(glb.scene);
}, undefined, function ( error: any ) {
	console.error( error );
} );
    /**
     * 创建网格模型
     */
    // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
    const geometry = new THREE.BoxGeometry(1, 1, 1); //创建一个立方体几何对象Geometry
    const material = new THREE.MeshLambertMaterial({
      color: 0x0000ff
    }); //材质对象Material
    const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中
    /**
     * 光源设置
     */
    //点光源
    const point = new THREE.PointLight(0xffffff);
    point.position.set(0, 400, 0); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    const ambient = new THREE.AmbientLight(0x888888);
    scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    const width = window.innerWidth; //窗口宽度
    const height = window.innerHeight; //窗口高度
    const k = width / height; //窗口宽高比
    const s = 1; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(10, 10, 10); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);//设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    useEffect(()=>{
        document.getElementById('state')?.appendChild(renderer.domElement); //body元素中插入canvas对象
    },[])
  
    //执行渲染操作   指定场景、相机作为参数
    renderer.render(scene, camera);
    let T0:any = new Date();//上次时间
    function render() {
            let T1:any = new Date();//本次时间
            let t = T1-T0;//时间差
            T0 = T1;//把本次时间赋值给上次时间
            requestAnimationFrame(render);
            renderer.render(scene,camera);//执行渲染操作
            mesh.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
        }
    render();
    const controls = new OrbitControls(camera,renderer.domElement)
controls.target.set(0, 0, 0) 
controls.minDistance = 80
controls.maxDistance = 500000
controls.maxPolarAngle = Math.PI / 3
controls.update()
    return (
        <>
        <div id='state'></div>
        </>
    )
}
export default School