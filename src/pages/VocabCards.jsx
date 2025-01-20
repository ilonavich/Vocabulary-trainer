import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import axios from "axios";

const VocabCards = () => {
  const [vocabList, setVocabList] = useState([
    { native: "Hallo", translation: "Hello", flipped: false },
    { native: "Danke", translation: "Thank you", flipped: false },
    { native: "Auf Wiedersehen", translation: "Goodbye", flipped: false },
  ]);

  const [newVocab, setNewVocab] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log(import.meta.env.VITE_OPENAI_TEXT);

  const translateWord = async (word) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_OPENAI_TEXT}`,
        {
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content:
                "You are a translation assistant. Translate the following word from German to English and return only the translate back, without adding comments",
            },
            {
              role: "user",
              content: `Translate the word: ${word}`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            provider: "open-ai",
            mode: "production",
            Authorization: `${import.meta.env.VITE_OPENAI_APIKEY}`,
          },
        }
      );
      console.log(response.data);
      return response.data.message?.content.trim() || "Translaiton failed";
    } catch (error) {
      console.error(
        "Translation API Error:",
        error.response?.data || error.message
      );
      return "Translation Failed";
    }
  };

  const addCard = async () => {
    if (!newVocab.trim()) return;
    setLoading(true);
    const translation = await translateWord(newVocab);
    setVocabList((prev) => [
      ...prev,
      { native: newVocab, translation, flipped: false },
    ]);
    setNewVocab("");
    setLoading(false);
  };

  const flipCard = (index) => {
    setVocabList((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <div className="flex items-center mb-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Gib ein neues Wort ein (German)"
            value={newVocab}
            onChange={(e) => setNewVocab(e.target.value)}
            className="input border-2 border-zinc-800 flex-grow"
          />
          <button
            onClick={addCard}
            className="btn btn-primary ml-4"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Card"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {vocabList.map((card, index) => (
            <ReactCardFlip
              key={index}
              isFlipped={card.flipped}
              flipDirection="horizontal"
            >
              <div
                className="p-4 w-80 h-48 cursor-pointer bg-teal-400 text-white rounded-lg flex flex-col items-center justify-center shadow-md"
                onClick={() => flipCard(index)}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-center">
                  {card.native}
                </h2>
              </div>

              <div
                className="p-4 w-80 h-48 cursor-pointer bg-indigo-500 text-white rounded-lg flex flex-col items-center justify-center shadow-md"
                onClick={() => flipCard(index)}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-400 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-center">
                  {card.translation}
                </h2>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VocabCards;
