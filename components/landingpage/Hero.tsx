import { Fragment } from "react";
import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <Fragment>
      <Image
        src="/images/moneychart-brand.png"
        alt="MoneyChart Logo"
        width={500}
        height={200}
      />
    </Fragment>
  );
}

export default Hero;
