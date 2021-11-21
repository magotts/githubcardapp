import { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${username}`);
    props.onSubmit(resp.data);
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Github Username"
        required
      />
      <button>Add Card</button>
    </form>
  );
};

export default Form;
