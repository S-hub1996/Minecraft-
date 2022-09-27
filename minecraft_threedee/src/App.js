import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './Components/Ground'
import { Player } from './Components/Player'
import { FPV } from './Components/FPV'
import { Cubes } from './Components/Cubes'
import { TextureSelector } from './Components/TextureSelector';
import { Menu } from './Components/Menu';

function App() {
  return (
    <>
    <div >MineCraft
      Gameplay:5 types of blocks: Grass, Wood, Log, Glass and Dirt. You switch blocks with numbers 1-5 on your keyboard. You navigate the world with the mouse and WASD. You can click to add blocks and Alt+Click to remove blocks.
      Made with ReactJS, ThreeJS
     
    </div>
      <Canvas>
        <Sky sunPosition={[10, 1, 10]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;