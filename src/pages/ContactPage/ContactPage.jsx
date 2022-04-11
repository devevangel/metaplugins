import React from "react";

const ContactPage = () => {
  return (
    <div className="text-center">
      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-black sm:text-2xl lg:text-2xl">
          Contact Us
        </h1>
        <p className="mt-6 text-xl text-black">
          You can reach out to us at
          <a
            href="mailto:admin@metaplugins.io"
            className="no-underline hover:underline"
          >
            {" "}
            admin@metaplugins.io
          </a>{" "}
          to find out more about making contributions and giving us feedback. We
          aim to establish and maintain a symbiotic relationship with everyone
          who downloads and uses our plugins, so get downloading!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
