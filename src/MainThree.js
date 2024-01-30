import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';

const MainThree = (props) => {
    const mountRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());
    const cameraRef = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
    const rendererRef = useRef(new THREE.WebGLRenderer());
    let light = new THREE.DirectionalLight(0xffffff, 3);
    let modelRef = useRef(null);
    let controls, model;

    // Function to handle window resize
    const handleResize = () => {
        if (mountRef.current && cameraRef.current && rendererRef.current) {
            const { clientWidth, clientHeight } = mountRef.current;
            rendererRef.current.setSize(clientWidth, clientHeight);
            cameraRef.current.aspect = clientWidth / clientHeight;
            cameraRef.current.updateProjectionMatrix();
        }
    };

    // orbitControls
    const orbitControls = () => {
        controls = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
        controls.minDistance = 4;
        controls.maxDistance = 10;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.dampingFactor = 1;
    };


    // Function to load GLB model
    async function loadGLBModel(modelPath) {
        const loader = new GLTFLoader();
        await loader.loadAsync(modelPath).then((glb) => {
            model = glb.scene;
            model.scale.set(0.02, 0.02, 0.02);
            sceneRef.current.add(model);
            sceneRef.current.add(light);
            modelRef.current = model;
            handleLeple();

        });
    }
    const handleLeple = () => {
        let Lapel_style = modelRef.current.children.filter((child) => child.name.substring(0, 4) === ("Lapel_style").substring(0, 4))[0];
        Lapel_style.children.forEach((child) => child.visible = false);
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.visible = false)
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].visible = true;
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === props.Lapel_width.substring(0, 4))[0].children.forEach((child) => child.visible = false);
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === props.Lapel_width.substring(0, 4))[0].visible = true;

        // button hole

        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === 'Buttonhole'.substring(0, 4))[0].children.forEach((child) => child.visible = false);
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === 'Buttonhole'.substring(0, 4))[0].visible = true;
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === 'Buttonhole'.substring(0, 4))[0].children.filter((child) => child.name.substring(0, 4) === props.Lapel_button_hole.substring(0, 4))[0].visible = true;
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === 'Buttonhole'.substring(0, 4))[0].children.filter((child) => child.name.substring(0, 4) === props.Lapel_button_hole.substring(0, 4))[0].children.forEach((child) => child.visible = false);
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === 'Buttonhole'.substring(0, 4))[0].children.filter((child) => child.name.substring(0, 4) === props.Lapel_button_hole.substring(0, 4))[0].children.filter((child) => child.name.substring(0, 3).toUpperCase() === 'RIG'.substring(0, 3).toUpperCase())[0].visible = true
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === 'Buttonhole'.substring(0, 4))[0].children.filter((child) => child.name.substring(0, 4) === props.Lapel_button_hole.substring(0, 4))[0].children.filter((child) => child.name.substring(0, 3).toUpperCase() === 'RIG'.substring(0, 3).toUpperCase())[0].children.forEach((child) => child.visible = false)
        Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === 'Buttonhole'.substring(0, 4))[0].children.filter((child) => child.name.substring(0, 4) === props.Lapel_button_hole.substring(0, 4))[0].children.filter((child) => child.name.substring(0, 3).toUpperCase() === 'RIG'.substring(0, 3).toUpperCase())[0].children.filter((child) => child.name.substring(0, 3).toUpperCase() === props.Lapel_width.substring(0, 3).toUpperCase())[0].visible = true

        if (props.AMF_Size !== 'None') {
            Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === props.Lapel_width.substring(0, 4))[0].children.forEach((child) => child.visible = false)
            Lapel_style.children.filter((child) => child.name === props.Lapel_style)[0].children.filter((child) => child.name.substring(0, 4) === props.Lapel_width.substring(0, 4))[0].children.filter((child) => child.name.substring(0, 3) === props.AMF_Size.substring(0, 3))[0].visible = true
        }



        // Shoulders
        let Shoulders = modelRef.current.children.filter((child) => child.name.substring(0, 4) === ("Shoulders").substring(0, 4))[0];

        Shoulders.children.forEach((child) => child.visible = false);
        Shoulders.children.filter((child) => child.name === props.Shoulder)[0].visible = true;

        // Chest_Pocket
        let Chest_Pocket = modelRef.current.children.filter((child) => child.name.substring(0, 4) === ("Chest_Pocket").substring(0, 4))[0];
        Chest_Pocket.children.forEach((child) => child.visible = false);
        Chest_Pocket.children.filter((child) => child.name.substring(0, 4) === props.Chest_Pocket.substring(0, 4))[0].visible = true;

        //Side_pocket
        let Side_pocket = modelRef.current.children.filter((child) => child.name.substring(0, 4) === ("Side_pocket").substring(0, 4))[0];
        Side_pocket.children.forEach((child) => child.visible = false);
        Side_pocket.children.filter((child) => child.name === props.Side_Pocket)[0].visible = true;

        // Ticket_pockets
        modelRef.current.children.filter((child) => child.name.substring(0, 4) === ("Ticket_pockets").substring(0, 4))[0].children.forEach((child) => child.visible = false);
        modelRef.current.children.filter((child) => child.name === "Lapel_style")[0].children[1].children[1].material.depthWrite = true;
        Side_pocket.children.forEach((child) => child.material.depthWrite = true);
        Shoulders.children.filter((child) => child.name === "spalla_camicia_2mm")[0].material.depthWrite = true;
        Shoulders.children.filter((child) => child.name === "spalla_camicia_2mm")[0].material.trnsprant = false;



        // buttons
        let buttons = modelRef.current.children.filter((child) => child.name === "buttons")[0];
        buttons.children.forEach((child) => child.children.forEach((child) => child.visible = false));
        buttons.children[1].children.filter((child) => child.name === props.Sleeve_Buttons)[0].visible = true;


        //Cuffed_sleeve
        Shoulders.children.filter((child) => child.name === 'Cuffed_sleeve')[0].visible = true;

        // Vent
        let Vent = modelRef.current.children.filter((child) => child.name === "Vent")[0];
        Vent.children.forEach((child) => child.visible = false);
        Vent.children[0].visible = true;

        // Lining
        let Lining = modelRef.current.children.filter((child) => child.name.substring(0, 4) === ("Lining").substring(0, 4))[0];
        Lining.children.forEach((child) => child.visible = false);
        Lining.children[0].visible = true;



    };

    modelRef.current !== null && handleLeple();


    useEffect(() => {
        const scene = sceneRef.current;
        const camera = cameraRef.current;
        const renderer = rendererRef.current;

        // Camera position
        camera.position.z = 5;
        // background color efefef
        scene.background = new THREE.Color(0x000b1b2f);

        // Renderer setup
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Load GLB model
        loadGLBModel('./newbutton.glb');
        orbitControls();


        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls && controls.update();
            light && light.position.set(camera.position.x, camera.position.y, camera.position.z);

        };

        // Handle initial resize and subscribe to future resize events
        handleResize();
        window.addEventListener('resize', handleResize);

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return <div ref={mountRef} style={{ width: '70vw', height: '100vh' }} className='main-canvas' />;
};

export default MainThree;
