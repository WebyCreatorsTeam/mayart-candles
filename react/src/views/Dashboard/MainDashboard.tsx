import { FC, Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import { ICandles } from "../../utils/types/candles";

const MainDashboard: FC = () => {
  const { candles }: any = useLoaderData() as { admins: Array<ICandles> };

  return (
    <Suspense fallback={<h1 className="no_data_text">Loading...</h1>}>
      <Await resolve={candles}>
        <section>
          <img
            src="/images/hero-image.webp"
            alt="תמונת רקע של הירו"
            width={1684}
            height={972}
          />{" "}
          {/* צריך לעשות שהתמונה תיהיה מותאמת לפי העיצוב */}
        </section>
        <section>
          {candles.map((cdl: ICandles) => (
            <Link to={`candle/${cdl._id}`} key={cdl._id}>
              <img
                src="/images/candleimage.png"
                alt={`תמונה של מוצר ${cdl.name}`}
                width={530}
                height={700}
              />
              <h2>{cdl.name}</h2>
              <p>{cdl.price}</p>
              {cdl.salePrice && <p>{cdl.salePrice}</p>}
            </Link>
          ))}
        </section>
      </Await>
    </Suspense>
  );
};

export default MainDashboard;
