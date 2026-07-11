import "./Header.css";

function Header() {
  return (
    <header className="mgp-header">
      <div className="mgp-logo">
        MotionGraph <span>Pro</span>
      </div>

      <button className="mgp-settings">
        ⚙
      </button>
    </header>
  );
}

export default Header;