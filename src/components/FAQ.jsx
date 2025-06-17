import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-lg font-semibold text-true-blue"
      >
        {question}
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className=" mb-10 w-full flex flex-col items-center text-left md:text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl ">
          Here are some common questions about the Deep Learning Indaba and
          IndabaX. If you have more questions, feel free to reach out to us!
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <FAQItem
          question="What is the Deep Learning Indaba?"
          answer="The Deep Learning Indaba is a pan-African initiative dedicated to strengthening African machine learning and AI. It brings together researchers, students, and professionals to share knowledge and foster collaboration."
        />
        <FAQItem
          question="What is IndabaX?"
          answer="IndabaX is a locally organized chapter of the Deep Learning Indaba. It's a community event aimed at strengthening African AI."
        />
        <FAQItem
          question="Who can participate?"
          answer="Students, researchers, professionals, and anyone interested in AI and machine learning are welcome to join."
        />
        <FAQItem
          question="Is the event free?"
          answer="Yes, participation is free. We aim to make AI education accessible to everyone."
        />
        <FAQItem
          question="How can I contribute?"
          answer="You can volunteer, become a mentor, give a talk, or partner with us to support the community."
        />
      </div>
    </section>
  );
};

export default FAQ;
