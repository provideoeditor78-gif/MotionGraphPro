import "./GraphCanvas.css";

import { useCanvas } from "./hooks/useCanvas";

function GraphCanvas() {
  const canvasRef = useCanvas();

  return (
    <div className="graph-container">
      <canvas
        ref={canvasRef}
        id="graphCanvas"
      />

      <div className="graph-overlay">
        MotionGraph Engine v0.1
      </div>
    </div>
  );
}

export default GraphCanvas;