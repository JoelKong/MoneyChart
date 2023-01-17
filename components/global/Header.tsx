import Image from "next/image";
import classes from "./header.module.css";
import handleLogIn from "../../utils/login/login";

function Header(): JSX.Element {
  function handleIconClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className={classes.header}>
      <Image
        className={classes.icon}
        src="/images/moneychart-icon.png"
        alt="MoneyChart icon"
        width={40}
        height={40}
        onClick={handleIconClick}
      />
      <div className={classes.headerdiv}>
        <button className={classes.login} onClick={handleLogIn}>
          Log In
        </button>
      </div>
    </header>
  );
}

export default Header;
