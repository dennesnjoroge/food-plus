import { Hero } from "../components/Hero";
import { Featured } from "../components/Featured";
import { Promotion } from "../components/Promotion";
import { OurMenu } from "../components/OurMenu";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { HowItWorks } from "../components/HowItWorks";
import { CTA } from "../components/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Promotion />
      <OurMenu />
      <WhyChooseUs />
      <HowItWorks />
      <CTA />
    </>
  );
};

export default Home;
