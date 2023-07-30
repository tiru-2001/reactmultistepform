import React, { createContext, useState } from "react";
export const dataa = createContext();
const StepContext = ({ children }) => {
  const [step, setstep] = useState(1);
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    number: "",
    id: "",
    city: "",
    landmark: "",
    code: "",
  });
  const [finaldata, setfinaldata] = useState([]);
  const setfunction = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onforsubmit = () => {
    setfinaldata((e) => {
      return [...e, data];
    });

    setdata({
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      number: "",
      id: "",
      city: "",
      landmark: "",
      code: "",
    });
    alert("form submitted");
    setstep(1);
  };
  console.log(finaldata);
  return (
    <>
      <dataa.Provider
        value={{
          step,
          setstep,
          data,
          setdata,
          finaldata,
          setfinaldata,
          setfunction,
          onforsubmit,
        }}
      >
        {children}
      </dataa.Provider>
    </>
  );
};

export default StepContext;
