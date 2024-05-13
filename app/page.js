"use client";
import React, { useState, useEffect } from "react";
import TriviaApp from "../public/trivia/src/App";

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showTrivia, setShowTrivia] = useState(false); // Om de trivia quiz te tonen/verbergen

  const word = "programmeren in stijl";

  useEffect(() => {
    if (index < word.length) {
      const timer = setTimeout(() => {
        setText((prevText) => prevText + word[index]);
        setIndex(index + 1);
        setCursorVisible(!cursorVisible);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [index, cursorVisible, word]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Functie om de trivia quiz te tonen
  const showTriviaQuiz = () => {
    setShowTrivia(true);
  };

  return (
    <html>
      <body>
        <div className="relative">
          {/* Eerste div */}
          <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-40 text-center relative z-1">
            <div className="mx-auto text-left text-lg pl-44">
              <p>Cerchio Gerrits</p>
              <p>
                {text}
                {cursorVisible && "|"}
              </p>
              <div className="flex-none order-last">
                <img
                  src="/profiel.jpg"
                  alt="smile"
                  className="w-44 h-44 object-cover rounded-lg ml-[800px] mt-[-110px]"
                />
              </div>
            </div>
          </div>

          {/* Tweede div */}
          <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white py-40 text-center relative z-1">
            <div className="pl-14 flex items-center justify-center">
              <img
                src="eten.jpg"
                alt="Afbeelding 1"
                className="w-68 h-44 object-cover rounded-lg mr-6"
              />
              <img
                src="voedsel.jpg"
                alt="Afbeelding 2"
                className="h-44 object-cover rounded-lg mr-6"
              />
              <img
                src="jur.jpg"
                alt="Afbeelding 3"
                className="w-68 h-44 object-cover rounded-lg mr-6"
              />
              <div className="text-right text-lg text-justify">
                <p>
                  Op het gebied van programmeren ben ik vooral bezig met
                  front-end.
                  <br />
                  Het is altijd leuk om nieuwe dingen te verkennen.
                  <br />
                  Daarnaast doe ik ook een fotografie-keuzedeel op school.
                </p>
              </div>
            </div>
          </div>

          {/* Derde div */}
          <div className="bg-blue-900 text-white py-40 text-center relative">
            <div className="mx-auto text-left text-lg text-justify pl-14 flex items-center justify-between">
              <p>
                Wat ik prachtig vind aan fotografie, is dat er heel veel
                techniek achter zit.
                <br />
                De foto moet natuurlijk scherp zijn, maar om het scherp te
                krijgen moet je de techniek van belichting goed vinden en om dat
                te krijgen moet je veel oefenen.
              </p>

              <div className="flex items-center justify-center">
                <img
                  src="bes.jpg"
                  alt="Afbeelding 2"
                  className="w-60 h-44 object-cover rounded-lg mr-6"
                />
                <img
                  src="koe.jpg"
                  alt="Afbeelding 3"
                  className="w-60 h-44 object-cover rounded-lg mr-24"
                />
              </div>
            </div>
            <h1 className="text-center mt-80 text-2xl">Projecten</h1>
          </div>

          {/* Vierde div */}
          <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-60 text-center relative">
            <div className="flex items-center justify-around mb-20">
              {/* Trivia Quiz */}
              {showTrivia && <TriviaApp />}
            </div>
            <button
              className="bg-white text-black px-4 py-2 rounded-full"
              onClick={showTriviaQuiz}
            >
              Toon Trivia Quiz
            </button>
            {scrollY > 200 && (
              <button
                className="bg-white text-black px-4 py-2 rounded-full"
                onClick={scrollToTop}
              >
                Terug naar boven
              </button>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
