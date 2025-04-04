import React from "react";
import { useForm } from "react-hook-form";
import "../CSS/ReactHookForm.css";

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Registered Successfully!");    
    console.log(data);
    console.log("FullName:", data["First name"] + " " + data["Last name"]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        color: "blue",
        marginLeft: 200,
        marginRight: 200,
        marginTop: 100,
        backgroundColor: "black",
      }}>
      <br />
      <hr/>
      <h2>REACT HOOKFORM DEMO</h2>
      <br />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 5 })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 5 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <input type="submit" />
    </form>
  );
}
