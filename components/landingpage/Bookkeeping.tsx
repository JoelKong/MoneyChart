import { useState, useEffect } from "react";
import classes from "./bookkeeping.module.css";

function Bookkeeping() {
  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);

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
        <div>PIE CHART</div>
        <article>
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
