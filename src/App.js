import './App.css';
import {Canvas} from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <Canvas>
          <mesh>
              <boxGeometry/>
          </mesh>
      </Canvas>
    </div>
  );
}

export default App;
