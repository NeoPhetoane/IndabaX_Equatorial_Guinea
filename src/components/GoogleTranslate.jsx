import { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }

    if (!document.querySelector("script[src*='translate_a/element.js']")) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    // Wait for the Google Translate dropdown to exist
    const trySetLanguage = () => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = newLang;
        select.dispatchEvent(new Event("change"));
      } else {
        setTimeout(trySetLanguage, 100); // Try again in 100ms
      }
    };
    trySetLanguage();
  };

  return (
    <>
      {/* Hidden native Google Translate dropdown */}
      <div id="google_translate_element" className="hidden" />

      {/* Custom Dropdown */}
      <div className="relative">
        <select
          value={language}
          onChange={handleChange}
          className="text-gray-900 hover:text-gray-300 transition focus:outline-none hover:bg-gray-200"
        >
          <option value="" disabled hidden>
            Language
          </option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>
    </>
  );
}
