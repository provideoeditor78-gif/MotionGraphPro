import "./GraphCanvas.css";

function GraphCanvas() {
  return (
    <div className="graph-container">
      <canvas id="graphCanvas"></canvas>

      <div className="graph-overlay">
        MotionGraph Engine v0.1
      </div>
    </div>
  );
}

export default GraphCanvas;