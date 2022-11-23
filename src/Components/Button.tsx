const Button: React.FC<any> = ({ name, text, register, errors, onClick }) => {
  return (
    <button onClick={onClick} {...register(name)}>
      {text}
    </button>
  );
};
export default Button;
