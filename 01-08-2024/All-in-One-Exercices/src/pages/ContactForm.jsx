import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email address is invalid";
    if (!formData.queryType) tempErrors.queryType = "Query type is required";
    if (!formData.message) tempErrors.message = "Message is required";
    if (!formData.consent)
      tempErrors.consent = "You must consent to be contacted";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage("Your message has been sent!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const springProps = useSpring({
    opacity: successMessage ? 1 : 0,
    transform: successMessage ? "translateY(0)" : "translateY(-20px)",
  });

  return (
    <div className="min-h-screen bg-grey-900 flex items-center justify-center p-4 font-karla">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-grey-900">Contact Us</h2>
        <animated.p style={springProps} className="text-green-600 mb-4">
          {successMessage}
        </animated.p>
        <div className="flex flex-row justify-between">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-grey-900 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.firstName ? "border-red" : "border-grey-500"
              } rounded-lg`}
            />
            {errors.firstName && (
              <p className="text-red mt-2">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-grey-900 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.lastName ? "border-red" : "border-grey-500"
              } rounded-lg`}
            />
            {errors.lastName && (
              <p className="text-red mt-2">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-grey-900 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.email ? "border-red" : "border-grey-500"
            } rounded-lg`}
          />
          {errors.email && <p className="text-red mt-2">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <p className="text-grey-900 mb-2">Query Type</p>
          <div className="flex flex-row justify-between">
            <label className="block mb-2">
              <input
                type="radio"
                name="queryType"
                value="general"
                checked={formData.queryType === "general"}
                onChange={handleChange}
                className="mr-2"
              />
              General Enquiry
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="queryType"
                value="support"
                checked={formData.queryType === "support"}
                onChange={handleChange}
                className="mr-2"
              />
              Support Request
            </label>
            {errors.queryType && (
              <p className="text-red mt-2">{errors.queryType}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-grey-900 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.message ? "border-red" : "border-grey-500"
            } rounded-lg`}
          />
          {errors.message && <p className="text-red mt-2">{errors.message}</p>}
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
            />
            I consent to be contacted
          </label>
          {errors.consent && <p className="text-red mt-2">{errors.consent}</p>}
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white p-3 rounded-lg w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
