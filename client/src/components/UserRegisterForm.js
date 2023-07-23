import React, { useState } from "react";
import axios from "axios";

import validateEmail from "../helpers/emailValidation";
import phoneNumberValidate from "../helpers/phoneNumberValidate";

const UserRegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [gender, setGender] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (
      validateEmail(email) &&
      phoneNumberValidate(phoneNumber) &&
      password.length >= 8 &&
      password === confirmPassword
    ) {
      const res = await axios.post("/users", {
        fullName,
        email,
        phoneNumber,
        password,
        birthDate,
        gender,
      });
      if (res.data) alert("Success!");
      else alert("Failed!");
    } else alert("Failed!");
  };

  return (
    <div className="ui inverted segment">
      <h1>Register as User</h1>

      <div className="ui inverted form">
        <form onSubmit={onFormSubmit}>
          <div className="one field">
            <div className="field">
              <label>Full name</label>
              <input
                placeholder="Full name"
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                required
              />
            </div>
            <div className="field">
              <label>Gender</label>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="field">
              <label>Birthdate</label>
              <input
                placeholder="Birthdate"
                type="date"
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate}
                required
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="field">
              <label>Phone number</label>
              <input
                placeholder="Phone number"
                type="tel"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                required
              />
            </div>

            <div className="field">
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Confirm Password</label>
              <input
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </div>
          </div>
          <input className="ui submit button" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default UserRegisterForm;
