import { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [language, setLanguage] = useState("en");

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
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-300 shadow-md rounded p-2">
        <select
          value={language}
          onChange={handleChange}
          className="bg-white text-gray-800 border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none hover:bg-gray-100"
        >
          <option value="en">🌐 English</option>
          <option value="es">🇪🇸 Spanish</option>
        </select>
      </div>
    </>
  );
}
