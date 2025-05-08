import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault();
      setErrors(validationErrors);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen p-4 text-white bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/bpjjkrkb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            {errors.name && (
              <span className="mt-2 text-red-400">{errors.name}</span>
            )}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your mail"
              className="p-2 mt-4 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            {errors.email && (
              <span className="my-4 mt-2 text-red-400 ">{errors.email}</span>
            )}
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              id=""
              className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
            ></textarea>
            {errors.message && (
              <span className="mt-2 text-red-400">{errors.message}</span>
            )}
            <button className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
              Let&apos;s Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
