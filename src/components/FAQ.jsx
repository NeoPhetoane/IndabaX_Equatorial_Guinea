import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
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
    <section className="bg-pastel-blue py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
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
