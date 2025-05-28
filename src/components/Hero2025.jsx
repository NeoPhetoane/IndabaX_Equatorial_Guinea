import CountdownTimer from "./CountdownTimer";

export default function Hero2025() {
  return (
    <section>
      <div
        className="top-0 h-screen w-full bg-green-500 text-white flex
        items-center justify-center"
      >
        <div className="text-center px-6">
          <h2 className="text-4xl font-bold">
            IndabaX Equatorial Guinea 2025 Has Arrived
          </h2>
          <p>
            Join us on an epic three day spree of never ending talk, exibitions
            and creations
          </p>
          <p className="mt-4 text-lg">July 15 – 17 · Malabo</p>
          <CountdownTimer targetDate="2025-07-01T00:00:00" />
        </div>
      </div>
    </section>
  );
}
