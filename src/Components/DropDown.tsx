import { useState } from "react";

const DropDown: React.FC<any> = ({
  options,
  name,
  label,
  register,
  errors,
  validationSchema,
  disabled = false,
  dropDownName,
}) => {
  return (
    <>
      <label>{label}</label>
      <select {...register(name, validationSchema)}>
        <option value="">{dropDownName}</option>
        {options.map((option: any, index: number) => (
          <option key={index} disabled={disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
export default DropDown;
{
  /* {errors && errors[name]?.type === "required" && (
        <span>{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === "minLength" && (
        <span>{errors[name]?.message}</span>
      )} */
}
