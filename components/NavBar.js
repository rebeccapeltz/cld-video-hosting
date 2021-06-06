import Link from "next/link";

export default function NavBar(props) {
  return (
    <div>
       <ul>
          <li>
            <Link href="/">
              <a className={props.navActive === "home" ? "active" : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/small_abr">
              <a className={props.navActive === "smallabr" ? "active" : ""}>Small ABR</a>
            </Link>
          </li>
          <li>
            <Link  href="/large_abr">
              <a className={props.navActive === "largeabr" ? "active" : ""}>Large ABR</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={props.navActive === "about" ? "active" : ""}>About</a>
            </Link>
          </li>
        </ul>
    </div>
  )}