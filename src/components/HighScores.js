import React, { useEffect, useState } from "react";
import { useFirebase } from "./Firebase/FirebaseContext";
import { Link } from "react-router-dom";

const HighScores = () => {
  const [scores, setScores] = useState();
  const [loading, setLoading] = useState(true);
  const firebase = useFirebase();
  useEffect(() => {
    firebase.scores().once("value", (snapshot) => {
      const data = snapshot.val();
      const formattedData = formatData(data);
      setScores(formattedData);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);
  const formatData = (data) => {
    const formattedData = Object.keys(data)
      .map((key) => {
        const record = data[key];
        record["key"] = key;
        return record;
      })
      .sort((s1, s2) => s2.score - s1.score)
      .slice(0, 10);

    return formattedData;
  };

  if (loading) return <div id="loader"></div>;
  return (
    <>
      {scores && (
        <>
          <Link to="/" className="btn">
            Back Home
          </Link>
          <h1>High Scores</h1>
          <div id="highScoresList">
            {scores.map((score) => (
              <div className="high-score">
                <div>{score.username}</div>
                <div>-</div>
                <div>{score.score}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default HighScores;
