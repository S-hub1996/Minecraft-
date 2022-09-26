import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './Components/Ground'
// import { Player } from './Components/Player'
import { FPV } from './Components/FPV'
import { Cubes } from './Components/Cubes'
import { TextureSelector } from './Components/TextureSelector';
import { Menu } from './Components/Menu';


function App() {
  return (
    <>
    <div height={'100vh'}>


      <Canvas >
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV/>
        <Physics>
          {/* <Player/> */}
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
      </div>
    </>
  );
}

export default App;