import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowUp } from "react-icons/fa6";
import { LuLoader2 } from "react-icons/lu";
import { FaRegCopy } from "react-icons/fa";
import "../App";

function Gemini() {
  const [question, setQuestion] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [ copy , setCopy] = useState(false)

  useEffect(() => {
    setQuestion("");
    window.scrollTo(0, 0);
    const getCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const formattedHours = String(hours % 12 || 12).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      setStatus(hours >= 0 && hours < 12 ? "Good Morning" : "Good Evening");

      return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    };

    setCurrentTime(getCurrentTime());

    const timerId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    let index = 0;
    const revealText = () => {
      if (index < data.length) {
        setDisplayedText((prev) => prev + data[index]);
        index++;
        setTimeout(revealText, 20); // Adjust the delay to speed up/slow down the text display
      }
    };

    if (data) {
      setDisplayedText(""); // Reset displayed text before starting to reveal the new one
      revealText();
    }
  }, [data]);

  const handleSubmit = () => {
    setData(""); // Clear previous data
    setLoading(true);
    axios
      .post("https://backend-gemini.vercel.app/getResponse", { question })
      .then((response) => {
        setData(response.data.response);
        setLoading(false);
        setQuestion("");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const replaceAsterisks = (text) => {
    return text.replace(/\*\*/g, " ");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopy(true)
    setTimeout(()=>{
      setCopy(false)
    },5000)
  };

  const isCodeBlock = (text) => {
    const htmlPattern = /<([a-z][\s\S]*?)>/i;
    const cssPattern = /^(\/\*[\s\S]*?\*\/|[^{}]*\{[^}]*\})+$/;
    const jsPattern = /function|var|let|const|console\.log|=>|return/;

    return (
      htmlPattern.test(text) ||
      cssPattern.test(text) ||
      jsPattern.test(text)
    );
  };

  return (
    <>
      <div className="bg-[#1C1917] mt-[-20px] fixed top-0 left-0 w-full h-screen">
        <div className="flex flex-col justify-center mx-2 md:mx-10 mt-1 md:mt-5 h-screen">
          {data ? (
            <div className="flex flex-col justify-center items-center">
              {question && (
                <p className="text-start text-white border border-white rounded-md px-2 py-1 my-1">
                  {question.slice(0, 20)}
                </p>
              )}
              <div className="w-[75%] bg-[#27272A] rounded-md text-white p-4 h-[400px] overflow-y-auto">
                {replaceAsterisks(displayedText)
                  .split("\n\n")
                  .map((paragraph, index) => {
                    if (isCodeBlock(paragraph)) {
                      return (
                        <div
                          key={index}
                          className="relative bg-gray-900 p-4 mb-4 rounded-lg border border-gray-700"
                        >
                          <pre className="overflow-x-auto text-sm text-green-400">
                            <code>{paragraph}</code>
                          </pre>
                          <button
                            onClick={() => copyToClipboard(paragraph)}
                            className="absolute top-2 flex justify-center items-center gap-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 text-xs rounded"
                          >
                           {copy ? 'Copied' : <><FaRegCopy /> Copy</>}

                          </button>
                        </div>
                      );
                    }
                    return (
                      <p key={index} className="mb-4 capitalize">
                        {paragraph}
                      </p>
                    );
                  })}
              </div>
            </div>
          ) : (
            <div className="w-[90%] mx-auto text-white mt-[-120px]">
              <h1 className="font-extrabold py-4 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, <span className="mx-1">{status}</span>
              </h1>
              <p className="text-xl font-bold mt-4">
                You can find everything using this AI feature.
              </p>
            </div>
          )}

          <div className="flex items-center bg-gray-800 rounded-full p-2 shadow-lg fixed bottom-10 left-[5%] w-[90%]">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
              type="text"
              placeholder="Enter a prompt here"
              className="flex-grow w-1-2 bg-transparent text-white placeholder-gray-400 px-4 border-none focus:outline-none"
            />
            {loading ? (
              <LuLoader2 className="text-gray-400 mx-2 p-2 cursor-pointer text-4xl animate-spin" />
            ) : (
              <FaArrowUp
                onClick={handleSubmit}
                className="text-gray-400 mx-2 p-2 cursor-pointer text-4xl border rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gemini;
