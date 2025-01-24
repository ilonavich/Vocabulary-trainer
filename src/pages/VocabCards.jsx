import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import axios from "axios";

// Custom useStorage Hook
function useStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error accessing localStorage", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  return [storedValue, setValue];
}

const VocabCards = () => {
  const [vocabList, setVocabList] = useStorage("vocabList", [
    { native: "Hallo", translation: "Hello", flipped: false },
    { native: "Danke", translation: "Thank you", flipped: false },
    { native: "Auf Wiedersehen", translation: "Goodbye", flipped: false },
  ]);

  const [newVocab, setNewVocab] = useState("");
  const [loading, setLoading] = useState(false);

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
                "You are a translation assistant. Translate the following word from German to English and return the most common translation back and adding to infinitive to verbs and only capitalize English words when needed, without adding comments.",
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
      return response.data.message?.content.trim() || "Translation failed";
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

  const deleteCard = (index) => {
    setVocabList((prev) => prev.filter((_, i) => i !== index));
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
                <h2 className="text-lg font-medium text-center">
                  {card.native}
                </h2>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCard(index);
                    }}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div
                className="p-4 w-80 h-48 cursor-pointer bg-indigo-500 text-white rounded-lg flex flex-col items-center justify-center shadow-md"
                onClick={() => flipCard(index)}
              >
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
