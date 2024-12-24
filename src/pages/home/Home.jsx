import About from "./_components/About";
import { Client } from "./_components/Client";
import Jumbotron from "./_components/Jumbotron";
import Review from "./_components/Review";
import Services from "./_components/Services";
import Story from "./_components/Story";


const Home = () => {
  return (
    <>
      <Jumbotron />
      <About imagePosition="left" label={true} />
      <About imagePosition="right" label={false} />
      <About imagePosition="left" label={false} />
      <Story />
      <Review />
      <Services />
      <Client />
    </>
  );
};

export default Home;