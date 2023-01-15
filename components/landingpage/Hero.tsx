import { useRef } from "react";
import { useHover } from "usehooks-ts";
import Image from "next/image";
import classes from "./hero.module.css";
import { MdOutlineLogin } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function Hero(): JSX.Element {
  const loginRef = useRef<HTMLButtonElement>(null);
  const detailRef = useRef<HTMLButtonElement>(null);
  const isLoginHovered = useHover<HTMLButtonElement>(loginRef);
  const isDetailHovered = useHover<HTMLButtonElement>(detailRef);

  function moreDetails() {
    window.scrollTo({ top: 650, behavior: "smooth" });
  }

  return (
    <div className={classes.center}>
      <Image
        src="/images/moneychart-brand.png"
        alt="MoneyChart Logo"
        width={500}
        height={200}
        priority
      />
      <h1 className={classes.slogan}>
        Tracking Finances Has Never Been Easier
      </h1>
      <div className={classes.actions}>
        <button className={classes.button} ref={loginRef}>
          Log In
          {isLoginHovered && (
            <MdOutlineLogin className={classes.loginbuttonicon} />
          )}
        </button>
        <button
          className={classes.button}
          ref={detailRef}
          onClick={moreDetails}
        >
          More Details
          {isDetailHovered && (
            <IoMdArrowDropdown className={classes.detailbuttonicon} />
          )}
        </button>
      </div>
    </div>
  );
}

export default Hero;
