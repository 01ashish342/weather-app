import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>About this Weather App</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
