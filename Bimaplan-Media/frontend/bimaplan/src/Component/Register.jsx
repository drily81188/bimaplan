import React from "react";
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    profile: "",
    jobrole: "",
    companyname: "",
    logo: "",
    address: "",
  });

  const handleDetails = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://login-signup-logout.herokuapp.com/register", user)
      .then((e) => {
        console.log("success", e);
      });
  };

  return (
    <section className="bg-gray-100 ">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="max-w-xl text-lg">UNO</p>

            <div className="mt-8">
              <span className="text-2xl font-bold text-pink-600">
                {" "}
                0151 475 4450{" "}
              </span>

              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form className="space-y-4 " onSubmit={handleSubmit}>
              <div>
                <label className="sr-only" for="name">
                  Name
                </label>
                <input
                  onChange={handleDetails}
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" for="email">
                    Email
                  </label>
                  <input
                    onChange={handleDetails}
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>

                <div>
                  <label className="sr-only" for="phone">
                    Password
                  </label>
                  <input
                    onChange={handleDetails}
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Password"
                    type="tel"
                    id="password"
                    name="password"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" for="name">
                  Profile picture
                </label>
                <input
                  onChange={handleDetails}
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Profile picture"
                  type="text"
                  id="Image"
                  name="profile"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" for="email">
                    Company Name
                  </label>
                  <input
                    onChange={handleDetails}
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Comapany Names"
                    type="text"
                    id="Comapan"
                    name="companyname"
                  />
                </div>

                <div>
                  <label className="sr-only" for="phone">
                    Job Role
                  </label>
                  <input
                    onChange={handleDetails}
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Job Role"
                    type="tel"
                    id="Job"
                    name="jobrole"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" for="name">
                  Logo
                </label>
                <input
                  onChange={handleDetails}
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Logo"
                  type="text"
                  id="Logo"
                  name="logo"
                />
              </div>
              <div>
                <label className="sr-only" for="name">
                  Address
                </label>
                <input
                  onChange={handleDetails}
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Address"
                  type="text"
                  id="Address"
                  name="address"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                >
                  <span className="font-medium"> Register bimaplan </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
