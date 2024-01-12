import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  const sendData = async (data) => {
    try {
      const res = await axios.post("http://localhost:1337/api/contacts", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="grid container gap-5 my-10 ">
        <div className="text-3xl font-bold">
          <h1>Contact Us</h1>
        </div>
        <div className="text-[#999999]">
          <p>We're open for any suggestion or just to have a chat</p>
        </div>

        <div className=" grid gap-2 sm:flex sm:justify-between sm:items-center font-medium">
          <address className="text-[#999999]">
            ADDRESS: 198 West 21th Street, <br />
            Suite 721 New York NY <br /> 10016
          </address>
          <p>
            Email : <br />
            example@email.com
          </p>
          <p>
            Phone : <br /> +880 12355 798
          </p>
        </div>

        <div>
          <form action="#">
            <div>
              <input
                className="w-full h-8 mb-4 py-4  resize-none  border-b border-gray-300 focus:border-indigo-300 "
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="w-full h-8 mb-4 py-4  resize-none  border-b border-gray-300 focus:border-indigo-300"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="w-full h-8 mb-4 py-4  resize-none  border-b border-gray-300"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                className="w-full h-48 p-4 resize-none  border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="message"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const data = {
                      data: {
                        Name: formData.name,
                        Email: formData.email,
                        Subject: formData.subject,
                        Message: formData.message,
                      },
                    };
                    sendData(data);
                  }}
                  className="btn"
                >
                  Send Message
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
