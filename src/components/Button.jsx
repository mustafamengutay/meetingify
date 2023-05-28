import "./Button.css";

export const PrimaryButton = () => {
  return (
    <a href="#" className="btn btn-primary">
      Try Now
    </a>
  );
};

export const SecondaryButton = () => {
  return (
    <a href="#" className="btn btn-secondary">
      See Demo
    </a>
  );
};

const Button = () => {
  return (
    <div className="btn-section">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
};

export default Button;
