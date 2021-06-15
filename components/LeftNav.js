import Link from "next/link";

export default function LeftNav(props) {
  return (
    <div className="sidebar">
      <Link href="/">
        <a className={props.navActive === "home" ? "active" : ""}>Home</a>
      </Link>

      <Link href="/single_source">
        <a className={props.navActive === "singlesource" ? "active" : ""}>
          Single Source
        </a>
      </Link>

      <Link href="/sandbox_compare">
        <a className={props.navActive === "sandboxcompare" ? "active" : ""}>
         Sandbox Compare
        </a>
      </Link>

      <Link href="/add_hd_profile">
        <a className={props.navActive === "addhdprofile" ? "active" : ""}>
          HD Profile
        </a>
      </Link>

      <Link href="/video_embed_element">
        <a className={props.navActive === "videoembedelement" ? "active" : ""}>
          Video Embed Element
        </a>
      </Link>

      <Link href="/video_player_time">
        <a className={props.navActive === "videoplayertime" ? "active" : ""}>
          Video Player
        </a>
      </Link>

      <Link href="/internet_archive">
        <a className={props.navActive === "internetarchive" ? "active" : ""}>
          Internet Archive
        </a>
      </Link>

      <Link href="/multiple_players">
        <a className={props.navActive === "multipleplayers" ? "active" : ""}>
          MulitplePlayers
        </a>
      </Link>

      <Link href="/about">
        <a className={props.navActive === "about" ? "active" : ""}>About</a>
      </Link>
    </div>
  );
}
