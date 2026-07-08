import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  useEffect(() => {
  const handleResize = () => {
    setBiplane(adjustBiplaneForScreenSize());
    setIsland(adjustIslandForScreenSize());
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);


const adjustBiplaneForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 480) {
    // Small mobile
    screenScale = [1.2, 1.2, 1.2];
    screenPosition = [0, -1.2, 0];
  } else if (window.innerWidth < 768) {
    // Large mobile
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [0, -1.5, 0];
  } else if (window.innerWidth < 1024) {
    // Tablet
    screenScale = [2.2, 2.2, 2.2];
    screenPosition = [0, -3, -2];
  } else {
    // Desktop
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4];
  }

  return [screenScale, screenPosition];
};

 const adjustIslandForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 480) {
    // Small mobile
    screenScale = [0.62, 0.62, 0.62];
    screenPosition = [0, -6.2, -43.4];
  } else if (window.innerWidth < 768) {
    // Large mobile
    screenScale = [0.72, 0.72, 0.72];
    screenPosition = [0, -6.4, -43.4];
  } else if (window.innerWidth < 1024) {
    // Tablet
    screenScale = [0.84, 0.84, 0.84];
    screenPosition = [0, -6.5, -43.4];
  } else {
    // Desktop
    screenScale = [0.9, 0.9, 0.9];
    screenPosition = [0, -6.5, -43.4];
  }

  return [screenScale, screenPosition];
};

 const [[biplaneScale, biplanePosition], setBiplane] = useState(
  adjustBiplaneForScreenSize()
);

const [[islandScale, islandPosition], setIsland] = useState(
  adjustIslandForScreenSize()
);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-10 flex items-center justify-center px-4'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

     <div className="absolute bottom-14 left-5 sm:bottom-5 sm:left-4 z-30">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
