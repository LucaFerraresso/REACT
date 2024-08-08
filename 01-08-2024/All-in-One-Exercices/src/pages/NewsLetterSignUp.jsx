import React, { useState } from "react";
import successIcon from "/Exercises/newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg";
import listIcon from "/Exercises/newsletter-sign-up-with-success-message-main/assets/images/icon-list.svg";
import desktopIllustration from "/Exercises/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg";
import mobileIllustration from "/Exercises/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-mobile.svg";

const NewsletterSignUp = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email field cannot be empty");
      return;
    } else if (!emailPattern.test(email)) {
      setError("Please provide a valid email address");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-grayish-violet p-4">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-8">
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className="text-2xl font-bold text-grayish-blue mb-4">
            Sign up for our newsletter
          </h1>
          <p className="text-grayish-blue mb-4">
            Stay updated with our latest news and offers. Enter your email
            address below to receive our newsletter.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center">
              <img src={successIcon} alt="Success" className="mb-4" />
              <p className="text-green-600 text-lg">
                Thanks for subscribing! You’ll hear from us soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`border ${
                  error ? "border-red" : "border-gray-300"
                } p-2 w-full rounded mb-2 focus:outline-none focus:ring-2 focus:ring-primary-input-border transition duration-200`}
              />
              {error && <p className="text-red text-sm mb-2">{error}</p>}
              <button
                type="submit"
                className="bg-red mb-2 text-white font-bold py-2 px-4 rounded w-full hover:bg-opacity-90 transition duration-200"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>

        <div className="hidden md:block md:w-1/2">
          <img
            src={desktopIllustration}
            alt="Sign Up Illustration"
            className="w-full"
          />
        </div>
        <div className="md:hidden">
          <img
            src={mobileIllustration}
            alt="Sign Up Illustration"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignUp;
