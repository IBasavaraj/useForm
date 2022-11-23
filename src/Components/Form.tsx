import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import DropDown from "./DropDown";
import Input from "./Input";

const Form: React.FC<any> = ({ metadata, setLoginData, style }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm();
  const onSubmit = (data: any, e: any) => {
    setLoginData(data, e);
    isSubmitSuccessful && reset();
  };
  const onError = (errors: any, e: any) => console.log(errors, e);
  return (
    <form style={style} onSubmit={handleSubmit(onSubmit, onError)}>
      {metadata.fields.map((element: any, index: any) => (
        <div key={index}>
          {(element.type === "dropdown" && (
            <DropDown
              options={element.options.options}
              name={element.name}
              label={element.label}
              register={register}
              errors={errors}
              type={element.type}
              validationSchema={element.validationSchema}
              dropDownName={element.dropDownName}
            />
          )) || (
            <Input
              type={element.type}
              name={element.name}
              defaultValue={element.defaultValue}
              label={element.label}
              placeHolder={element.placeHolder}
              errors={errors}
              value={element.value}
              register={register}
              validationSchema={element.validationSchema}
            />
          )}
        </div>
      ))}
      {metadata.buttons.map((element: any, index: number) => (
        <div key={index}>
          {element.type === "reset" ? (
            <Button
              name={element.name}
              type={element.type}
              register={register}
              validationSchema={element.validationSchema}
              onClick={() => {
                reset();
              }}
              text={element.text}
            />
          ) : (
            <Button
              register={register}
              type={element.type}
              text={element.text}
              name={element.name}
            />
          )}
        </div>
      ))}
    </form>
  );
};
export default React.memo(Form);

// useEffect(() => {
//   isSubmitSuccessful && resetValues ? reset(resetValues) : reset();
//   isSubmitSuccessful && reset();
// }, [isSubmitSuccessful]);
{
  /* <Input
        type="date"
        name="date"
        label="Due Date"
        errors={errors}
        register={register}
        validationSchema={{
          required: "Todo deadline is required",
        }}
      /> */
}
{
  /* {metadata.map((element: any) => (
        <Controller
          control={control}
          name={element.name}
          defaultValue={"junp"}
          render={element.render}
        />
      ))} */
}

// element.type === "button" ? (
//   <Button
//     name={element.name}
//     text={element.text}
//     register={register}
//     errors={errors}
//   />
// ) :

// useEffect(() => {
//   const subscription = watch((value, { name, type }) => {
//     // console.log(value, name, type);
//   });
//   return () => subscription.unsubscribe();
// }, [watch, watchFields]);
