import { useEffect, useState } from "react";
import Form from "../Components/Form";
import Input from "../Components/Input";

export default function Home() {
  const [loginData, setLoginData] = useState({});
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    console.log(loginData);
  }, [loginData]);
  const resetValues = {
    first_name: "",
    password: "",
    text_area: "",
  };
  const options = [
    {
      value: "Ind",
      label: "India",
    },
    {
      value: "US",
      label: "USA",
    },
    {
      value: "K",
      label: "UK",
    },
  ];
  const formData = {
    fields: [
      {
        type: "text",
        name: "first_name",
        label: "Name",
        defaultValue: "Enter",
        validationSchema: {
          onChange: (e: any) => setUserName(e.target.value),
          required: "Name",
          minLength: {
            value: 3,
            message: "Please enter a minimum of 3 characters",
          },
        },
      },
      {
        type: "password",
        name: "password",
        label: "Password",
        defaultValue: undefined,
        placeHolder: "password",
        validationSchema: {
          onChange: (e: any) => setPassword(e.target.value),
          required: "password",
          minLength: {
            value: 3,
            message: "Please enter a minimum of 3 characters",
          },
        },
      },
      {
        type: "number",
        name: "number",
        label: "number",
        validationSchema: {
          onChange: (e: any) => console.log(e),
          validate: {
            positive: (v: any) => parseInt(v) > 0,
            lessThanTen: (v: any) => parseInt(v) < 10,
          },
        },
      },
      {
        type: "textarea",
        name: "text_area",
        // value: userName || password ? `${userName}${password}` : "",
        defaultValue: userName || password ? `${userName}${password}` : "",
        label: "textarea",
        validationSchema: {
          disabled: true,
        },
      },
      {
        type: "file",
        name: "file1",
        label: "file",
        validationSchema: {
          onChange: (v: any) => v.split(".").pop() == "jpg",
          validate: {
            fileExtension: (v: any) => console.log(v[0].name),
          },
        },
      },
      {
        type: "date",
        name: "date",
        label: "Due Date",
        validationSchema: {
          valueAsDate: true,
        },
      },
      {
        type: "checkbox",
        name: "checkbox",
      },
      {
        type: "radio",
        name: "radio",
        label: "Male",
        value: "Male",
      },
      {
        type: "radio",
        name: "radio",
        label: "FeMale",
        value: "FeMale",
      },
      {
        type: "range",
        name: "slider",
        label: "Slider",
      },
      {
        type: "dropdown",
        name: "Country Picker",
        placeHolder: "Country Picker",
        options: { options },
        dropDownName: "Country_picker",
      },
    ],
    buttons: [
      {
        type: "submit",
        text: "Submit",
        name: "submit_button",
      },
      {
        type: "reset",
        text: "reset",
        name: "reset_button",
      },
    ],
  };
  return (
    <>
      <Form
        metadata={formData}
        setLoginData={setLoginData}
        resetValues={resetValues}
      />
      <Input name="My name" label="Hey its me" type="text" />
    </>
  );
}
