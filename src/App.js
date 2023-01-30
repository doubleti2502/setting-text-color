import './App.css';
import Result from "./components/Result";
import ColorPicker from "./components/ColorPicker";
import {useState} from "react";
import SizeSetting from "./components/SizeSetting";

const DEFAULT_COLOR = 'red';
const DEFAULT_SIZE = 15;

function App() {
    const [color, setColor] = useState(DEFAULT_COLOR);
    const [size, setSize] = useState(DEFAULT_SIZE);
    const handleSetColors = (color) => {
        setColor(color)
    };

    const handleSetSize = (size) => {
        setSize(size)
    };

    const handleReset = () => {
        setColor(DEFAULT_COLOR)
        setSize(DEFAULT_SIZE)
    };

  return (
    <div className="container mt-5">
        <div className="d-flex justify-content-between mb-5" style={{width: '100%'}}>
            <ColorPicker
                onSetColor={handleSetColors}
                color={color}
            />
            <div style={{width: '48%'}}>
                <SizeSetting
                    onSetSize={handleSetSize}
                    size={size}
                />
                <button className="btn btn-info mt-3" onClick={handleReset}>Reset</button>
            </div>
        </div>


        <Result
            color={color}
            size={size}
        />

    </div>
  );
}

export default App;
