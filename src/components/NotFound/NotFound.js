// import React from "react";
// import { Link } from "react-router-dom";
import "./NotFound.css";

// const NotFound = () => {
//   return (
//     <div className="not-found">
//       <h1>Oops! You seem to be lost.</h1>
//       <p>Here are some helpful links:</p>
//       <Link to="/">Home</Link>
//       <Link to="/blog">Blog</Link>
//       <Link to="/contact">Contact</Link>
//     </div>
//   );
// };

// export default NotFound;
import React, { useState } from "react";

const nouns = [
  { noun: "Mann", article: "der", english: "man" },
  { noun: "Frau", article: "die", english: "woman" },
  { noun: "Kind", article: "das", english: "child" },
  { noun: "Hund", article: "der", english: "dog" },
  { noun: "Katze", article: "die", english: "cat" },
  { noun: "Auto", article: "das", english: "car" },
  { noun: "Tisch", article: "der", english: "table" },
  { noun: "Uhr", article: "die", english: "clock" },
  { noun: "Buch", article: "das", english: "book" },
  { noun: "Stuhl", article: "der", english: "chair" },
  { noun: "Tasche", article: "die", english: "bag" },
  { noun: "Haus", article: "das", english: "house" },
  { noun: "Baum", article: "der", english: "tree" },
  { noun: "Blume", article: "die", english: "flower" },
  { noun: "Bild", article: "das", english: "picture" },
  { noun: "Apfel", article: "der", english: "apple" },
  { noun: "Banane", article: "die", english: "banana" },
  { noun: "Glas", article: "das", english: "glass" },
  { noun: "Kaffee", article: "der", english: "coffee" },
  { noun: "Milch", article: "die", english: "milk" },
  { noun: "Wasser", article: "das", english: "water" },
  { noun: "Berg", article: "der", english: "mountain" },
  { noun: "Stadt", article: "die", english: "city" },
  { noun: "Dorf", article: "das", english: "village" },
  { noun: "Fluss", article: "der", english: "river" },
  { noun: "Insel", article: "die", english: "island" },
  { noun: "Meer", article: "das", english: "sea" },
  { noun: "Wald", article: "der", english: "forest" },
  { noun: "Straße", article: "die", english: "street" },
  { noun: "Zimmer", article: "das", english: "room" },
  { noun: "Schuh", article: "der", english: "shoe" },
  { noun: "Hose", article: "die", english: "pants" },
  { noun: "Hemd", article: "das", english: "shirt" },
  { noun: "Computer", article: "der", english: "computer" },
  { noun: "Maus", article: "die", english: "mouse" },
  { noun: "Telefon", article: "das", english: "telephone" },
  { noun: "Schlüssel", article: "der", english: "key" },
  { noun: "Uhr", article: "die", english: "watch" },
  { noun: "Fenster", article: "das", english: "window" },
  { noun: "Kuchen", article: "der", english: "cake" },
  { noun: "Schokolade", article: "die", english: "chocolate" },
  { noun: "Eis", article: "das", english: "ice cream" },
  { noun: "Zug", article: "der", english: "train" },
  { noun: "U-Bahn", article: "die", english: "subway" },
  { noun: "Fahrrad", article: "das", english: "bicycle" },
  { noun: "Löffel", article: "der", english: "spoon" },
  { noun: "Gabel", article: "die", english: "fork" },
  { noun: "Messer", article: "das", english: "knife" },
  { noun: "Lehrer", article: "der", english: "teacher" },
  { noun: "Lehrerin", article: "die", english: "female teacher" },
];

const ArticleQuiz = () => {
  const [current, setCurrent] = useState(
    Math.floor(Math.random() * nouns.length)
  );
  const [selectedArticle, setSelectedArticle] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const { n, a, eng } = nouns[current];

  const checkArticle = (article) => {
    setSelectedArticle(article);
    setIsCorrect(a === article);
  };

  const nextNoun = () => {
    setCurrent(Math.floor(Math.random() * nouns.length));
    setSelectedArticle("");
    setIsCorrect(null);
  };

  return (
    <div>
      <h2>Which article is correct for "{n}"?</h2>
      <button onClick={() => checkArticle("der")}>der</button>
      <button onClick={() => checkArticle("die")}>die</button>
      <button onClick={() => checkArticle("das")}>das</button>

      {selectedArticle && (
        <p>
          {isCorrect
            ? `Correct! ${n} = ${eng}`
            : "Incorrect. The correct article is " + a}
        </p>
      )}

      <button onClick={nextNoun}>Next Noun</button>
    </div>
  );
};

export default ArticleQuiz;
