import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <div className={classes.center}>
      <Image
        src="/images/moneychart-brand.png"
        alt="MoneyChart Logo"
        width={500}
        height={200}
      />
      <h1 className={classes.slogan}>
        Tracking Finances Has Never Been Easier
      </h1>
      <div className={classes.actions}>
        <button>Log In</button>
        <button>More Details</button>
      </div>
    </div>
  );
}

export default Hero;
