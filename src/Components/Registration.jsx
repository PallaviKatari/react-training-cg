import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Full Name:</label>
          <input type="text" {...register("fullName")} />
          <p style={{color:'red'}}>{errors.fullName?.message}</p>
        </div>

        <div>
          <label>Email:</label>
          <input type="email" {...register("email")} />
          <p style={{color:'red'}}>{errors.email?.message}</p>
        </div>

        <div>
          <label>Password:</label>
          <input type="password" {...register("password")} />
          <p style={{color:'red'}}>{errors.password?.message}</p>
        </div>

        <div>
          <label>Confirm Password:</label>
          <input type="password" {...register("confirmPassword")} />
          <p style={{color:'red'}}>{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
