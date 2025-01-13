import {useState} from "react" 
// create SignUpForm Component
export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      // console.log(`Button is Clicked!`);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p> {successMessage}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
