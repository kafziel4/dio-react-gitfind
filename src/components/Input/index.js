import './styles.css';

const Input = ({ value, onChange }) => {
  return (
    <input
      name="usuario"
      value={value}
      onChange={onChange}
      placeholder="@username"
    />
  );
};

export default Input;
