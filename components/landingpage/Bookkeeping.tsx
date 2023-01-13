import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { data } from "../../utils/charts/samplechart";
import classes from "./bookkeeping.module.css";

function Bookkeeping() {
  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);

  ChartJS.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    const handleScroll = () => {
      const threshold: number = window.innerHeight * 0.2;
      if (window.pageYOffset > threshold) {
        setIsComponentMounted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isComponentMounted) {
    return null;
  } else
    return (
      <section className={classes.bookkeeping}>
        <div className={classes.chart}>
          <Pie data={data} options={{ maintainAspectRatio: false }} />
        </div>
        <article className={classes.bookkeepingarticle}>
          <div>
            <h2>Bookkeeping</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nam
              ipsa, earum corrupti explicabo odio sint quis odit? Reiciendis
              odit, fuga deleniti repellat rem nemo explicabo eligendi ullam
              quae culpa?
            </p>
          </div>
        </article>
      </section>
    );
}

export default Bookkeeping;
