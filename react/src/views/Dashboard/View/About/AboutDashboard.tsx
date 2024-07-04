import axios from "axios";
import { FC, Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import AboutHeader from "./AboutHeader";
import AboutDesc from "./AboutDesc";
import AboutImage from "./AboutImage";
import { BASE_API } from "../../../../utils/api-connect";
// import { BASE_API } from "../../../../utils/api-connect";

interface IAbout {
  _id: string
  title: string
  desc: string
  images: Array<{ img: string, _id: string }>
}

const AboutDashboard: FC = () => {
  const { about } = useLoaderData() as { about: IAbout }

  return (
    <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
      <Await resolve={about}>
        <section className="aboutDash">
          <h1>קצת עליי</h1>
          <AboutHeader id={about._id} title={about.title} />
          <AboutDesc id={about._id} desc={about.desc} />
          <h3 className="aboutDash__backstage">מאחורי הקלעים של MAYART</h3>
          <div className="aboutDash__images">
            {about.images.map((image, idx) => (
              <AboutImage key={idx} id={about._id} img={image} idx={idx} />
            ))}
          </div>
        </section>
      </Await>
    </Suspense>
  )
};

export default AboutDashboard;

const handleGetAbout = async () => {
  try {
    const { data: { continueWork, aboutText } } = await axios.get(`${BASE_API}/about/get-about`)
    if (continueWork) return aboutText
  } catch (error) {
    return alert(error)
  }
}

export const aboutDashLoader = async () => {
  return defer({
    about: await handleGetAbout()
  })
}

