import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { samplePieData } from "../../utils/samplechart";

export default function Bookkeeping(): JSX.Element {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <section className="flex justify-around items-center w-full h-full">
      <div>
        <Pie data={samplePieData} width={400} height={400} />
      </div>
      <article className="w-1/4 h-2/4">
        <div className="flex w-full h-full flex-col items-center">
          <h2 className="text-3xl font-bold underline">Bookkeeping</h2>
          <p className="pt-6 tracking-wide text-xl font-medium leading-10">
            Visualise your expenses easily through MoneyChart. We deliver charts
            which are categorised based off your transactions for your needs.
            Keeping track of your spending would never again be a hassle when
            you sign up with us.
          </p>
        </div>
      </article>
    </section>
  );
}
