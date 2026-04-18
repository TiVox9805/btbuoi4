import { useTheme } from "../context/ThemeContext";

const Header = ({ count }) => {
  const { toggleTheme } = useTheme();

  return (
    <div className="header">
      <h2>📒 Ghi Chú Cá Nhân</h2>
      <div className="header-right">
        <span>{count} ghi chú</span>
        <button onClick={toggleTheme}>🌙</button>
      </div>
    </div>
  );
};

export default Header;