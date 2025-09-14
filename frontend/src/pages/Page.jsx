import Headers from '../components/Header';
import Hero from '../components/Hero';

// Page component acts as the main wrapper for the layout
const Page = () => {
  return (
    <div className="background-page flex flex-col items-center justify-center p-4`">
      <Headers />
      <Hero />
    </div>
  );
};

export default Page;