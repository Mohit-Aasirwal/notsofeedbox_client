import React, { useState } from "react";
import Image from "next/image";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Perform form submission logic here, e.g., send the data to a server

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-[#003865]" id="Contact">
      <div className="top-0 left-0 relative">
        <Image
          src={"/contact.svg"}
          alt="contact"
          width={50}
          height={50}
          className="w-full h-screen "
        />
        <Image
          src={"/connecttext.svg"}
          alt="connecttext"
          width={200}
          height={200}
          className="absolute md:top-1/3 md:left-1/3 xl:w-96 w-80 "
        />
      </div>

      <div>
        <Image
          src={"/contact2.svg"}
          alt="line and cross"
          width={20}
          height={100}
          className="mx-auto"
        />
        <form onSubmit={handleSubmit}>
          <div className="mx-10">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter College Mail"
              className="text-sans w-full mx-auto rounded-full p-3 my-5"
              required
            />
          </div>
          <div className="mx-10">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter Your Name"
              className="text-sans w-full mx-auto rounded-full p-3 my-5"
              required
            />
          </div>
          <div className="mx-10">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Why do you want to open our club in your college?"
              className="text-sans w-full mx-auto rounded-xl h-56 p-3 my-5"
              required
            />
          </div>
          <div className="mx-10">
            <button
              type="submit"
              className="w-full border border-white text-white py-4 my-5 hover:bg-gradient-to-tr from-[#00ff00] to-white hover:text-black rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
