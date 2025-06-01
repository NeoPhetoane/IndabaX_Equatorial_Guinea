import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const hasMultipleCards = cards.length > 1;

  // Calculate the indices of the visible cards
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(cards[(currentIndex + i) % cards.length]);
    }
    return visible;
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // For pagination dots, show one dot per card
  const handleDotClick = (idx) => setCurrentIndex(idx);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="w-full h-full flex items-center justify-center gap-4">
        {getVisibleCards().map((card, idx) => (
          <div
            key={idx}
            className="flex-1 h-full flex items-center justify-center"
          >
            {card}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      {hasMultipleCards && (
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>
      )}

      {/* Next Button */}
      {hasMultipleCards && (
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>
      )}

      {/* Pagination Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              idx === currentIndex ? "bg-green-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
