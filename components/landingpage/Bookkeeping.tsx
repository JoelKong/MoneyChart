import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { PieChartProps } from "../../interfaces/charts/samplepiechart";
import classes from "./bookkeeping.module.css";

function Bookkeeping({ samplePieData }: PieChartProps): JSX.Element | null {
  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);

  ChartJS.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    const handleScroll = (): void => {
      const threshold: number = window.innerHeight * 0.3;
      if (window.scrollY > threshold) {
        setIsComponentMounted(true);
      }
      if (window.scrollY < 100) {
        setIsComponentMounted(false);
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
          <Pie data={samplePieData} width={410} height={410} />
        </div>
        <article className={classes.bookkeepingarticle}>
          <div>
            <h2 className={classes.bookkeepingtitle}>Bookkeeping</h2>
            <p className={classes.bookkeepingbody}>
              Visualise your expenses easily through MoneyChart. We deliver
              charts which are categorised based off your transactions for your
              needs. Keeping track of your spending would never again be a
              hassle when you sign up with us.
            </p>
          </div>
        </article>
      </section>
    );
}

export default Bookkeeping;
