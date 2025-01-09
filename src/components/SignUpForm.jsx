import { useState } from "react";
import Authenticate from "./Authenticate";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup"
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }
  //console.log("Hello 👋");
  return (
    <>
      <div>
        <h2> Sign Up </h2>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <Authenticate/>
    </>
  );
}
