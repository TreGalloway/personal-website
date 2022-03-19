import React from 'react';

const ContactSection = () => {
  return (
    <div className="grid pb-10 bg-gray-50 grid-cols justify-items-center ">
      <div className="flex flex-col pb-8 ">
        <h1 className="items-center justify-center max-w-2xl pb-24 mx-auto text-4xl text-center text-gray-800 underline bg-gray-50 decoration-solid decoration-emerald-500">
          Contact
        </h1>
      </div>
      <div className="max-w-6xl px-4 mx-auto text-2xl transform rounded-lg shadow-2xl bg-gray-50 sm:px-6 lg:px-8">
        <header className="px-8 py-5 text-3xl font-bold text-center underline rounded-t-lg bg-gray-50 decoration-solid decoration-emerald-500">
          Lets Talk
        </header>
        <div class="py-5 px-8">
          <h2 className="text-center">
            Job Related or not lets have a conversation.
          </h2>

          <div className="grid grid-cols-3 justify-items-start">
            {' '}
            <div>
              <button class="text-2xl mt-4 rounded-lg px-10 py-2 bg-primary-500 hover:bg-primary-600 text-blue-50 shadow hover:shadow-xl duration-300">
                Email
              </button>
            </div>
            <div>
              <button class="text-2xl mt-4 rounded-lg px-10 py-2 bg-primary-500 hover:bg-primary-600 text-blue-50 shadow hover:shadow-xl duration-300">
                Twitter
              </button>
            </div>
            <div>
              <button class="text-2xl mt-4 rounded-lg px-10 py-2 bg-primary-500 hover:bg-primary-600 text-blue-50 shadow hover:shadow-xl duration-300">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
