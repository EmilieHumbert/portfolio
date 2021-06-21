import React from "react";

export default function Contact() {
  return (
    <>
      <h1 className="font-medium mt-24 text-4xl mb-4">Want to get in touch?</h1>
      <p>
        If you'd like to get in touch you can connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/emilie-humbert-58443376/"
          target="_blank"
          className="border-b-2 cursor-pointer hover:text-gray-500"
        >
          Linkedin
        </a>{" "}
        or send me a message using the contact form below. You can also see what
        I've been up to on{" "}
        <a
          href="https://github.com/EmilieHumbert"
          target="_blank"
          className="border-b-2 cursor-pointer hover:text-gray-500"
        >
          Github
        </a>
        .
      </p>
      <div>
        <form name="contact" method="POST" data-netlify="true">
          <div className="grid grid-cols-2 gap-x-6 mt-12">
            <div className="mb-6">
              <input
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
                name="name"
                placeholder="Name"
                type="text"
              ></input>
            </div>
            <div className="mb-6">
              <input
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
                name="email"
                placeholder="Email"
                type="email"
              ></input>
            </div>
            <div className="col-span-2 mb-6">
              <input
                className="ppearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
                name="subject"
                placeholder="Subject"
                type="text"
              ></input>
            </div>
            <div className="col-span-2 mb-6">
              <textarea
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full"
                name="message"
                placeholder="Message"
                type="text"
                rows="6"
              ></textarea>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <input type="hidden" name="form-name" value="contact" />
              <button
                className="border-2 border-gray-300 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-md"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
