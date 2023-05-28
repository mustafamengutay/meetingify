import "./Header.css";

export const Logo = () => {
  return <h1 className="logo">meetingify</h1>;
};

export const Navigation = () => {
  return (
    <ul className="navigation-list">
      <li>
        <a href="#">Product</a>
      </li>
      <li>
        <a href="#">Features</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#" className="btn-sign-up">
          Sign up
        </a>
      </li>
    </ul>
  );
};

const Header = () => {
  return (
    <nav className="navigation">
      <Logo />
      <Navigation />
    </nav>
  );
};

export default Header;
