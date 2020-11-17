import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul className="list-disc">
        <li>
          <Link
            to="/timer"
            className="no-underline hover:underline text-blue-500"
          >
            Timer
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
