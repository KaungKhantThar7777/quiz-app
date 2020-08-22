import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFirebase } from "./Firebase/FirebaseContext";

const SaveScoreForm = ({ score }) => {
  const [username, setUsername] = useState("");
  const firebase = useFirebase();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const record = {
      username,
      score,
    };

    firebase.scores().push(record, () => {
      console.log("Score saved");
      history.push("/");
    });
  };

  return (
    <div className="container">
      <h1>Score: {score}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          required
          placeholder="cool kid 123"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="btn">
          Save
        </button>
      </form>
      <Link to="/" className="btn">
        Go Home
      </Link>
    </div>
  );
};

export default SaveScoreForm;
