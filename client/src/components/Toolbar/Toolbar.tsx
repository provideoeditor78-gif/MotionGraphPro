import "./Toolbar.css";
import Button from "../Button";

function Toolbar() {
  return (
    <div className="toolbar">
      <Button>Read Keys</Button>
      <Button>Apply Ease</Button>
      <Button>Reset</Button>
    </div>
  );
}

export default Toolbar;