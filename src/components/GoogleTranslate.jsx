import { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    addScript();
  }, []);

  const handleChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = newLang;
      select.dispatchEvent(new Event("change"));
    }
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
