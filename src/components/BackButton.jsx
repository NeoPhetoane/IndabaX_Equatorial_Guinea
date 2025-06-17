import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();
  const [canGoBack, setCanGoBack] = useState(true);

  useEffect(() => {
    // Disable if there's no previous page in history
    if (window.history.length <= 1) {
      setCanGoBack(false);
    }
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleBack}
      disabled={!canGoBack}
      className={`fixed top-20 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-300
        ${
          canGoBack
            ? "bg-true-blue text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      aria-label="Back"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}
