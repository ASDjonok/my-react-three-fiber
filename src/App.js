import './App.css';
import {Canvas} from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <Canvas>
          <ambientLight intensity={1}/>
          <pointLight position={[0, 15, 10]} />
          <mesh position={[2, 1, 0]}>
              <boxGeometry/>
              <meshStandardMaterial color="blue"/>
          </mesh>
      </Canvas>
    </div>
  );
}

export default App;
