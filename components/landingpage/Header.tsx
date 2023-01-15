import Image from "next/image";
import classes from "./header.module.css";

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
        <button className={classes.login}>Log In</button>
      </div>
    </header>
  );
}

export default Header;
