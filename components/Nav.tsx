import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link href="/">
          <FontAwesomeIcon className="icon" icon={faHouse} />
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link href="favorites">
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <p>Favorites</p>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
