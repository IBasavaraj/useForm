const Input: React.FC<any> = ({
  name,
  label,
  defaultValue,
  register = undefined,
  placeHolder,
  onChange,
  errors,
  type,
  validationSchema,
  value,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {register ? (
        <input
          id={name}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
          type={type}
          {...register(name, validationSchema)}
        />
      ) : (
        <input
          id={name}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          type={type}
        />
      )}
    </div>
  );
};
export default Input;

{
  /* {errors && errors[name]?.type === "required" && (
        <span>{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === "minLength" && (
        <span>{errors[name]?.message}</span>
      )} */
}
