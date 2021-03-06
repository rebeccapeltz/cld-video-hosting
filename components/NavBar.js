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
            <Link href="/sandbox_compare">
              <a className={props.navActive === "sandboxcompare" ? "active" : ""}>Code Sandbox</a>
            </Link>
          </li>
          <li>
            <Link href="/add_hd_profile">
              <a className={props.navActive === "addhdprofile" ? "active" : ""}>HD Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/video_embed_element">
              <a className={props.navActive === "videoembedelement" ? "active" : ""}>Video Embed Element</a>
            </Link>
          </li>
          <li>
            <Link  href="/video_player_time">
              <a className={props.navActive === "videoplayertime" ? "active" : ""}>Video Player</a>
            </Link>
          </li>
       
          <li>
            <Link  href="/internet_archive">
              <a className={props.navActive === "internetarchive" ? "active" : ""}>Internet Archive</a>
            </Link>
          </li>
          <li>
            <Link  href="/multiple_players">
              <a className={props.navActive === "multipleplayers" ? "active" : ""}>MulitplePlayers</a>
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