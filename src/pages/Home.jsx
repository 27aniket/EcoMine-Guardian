
import {
  Hero,
  IntentToSolution,
  QRMonitoring,
  Gallery,
  ExternalRedirect,
  Statistics,
} from "../sections";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <IntentToSolution />
      <QRMonitoring />
      {/* <Gallery /> */}
      <ExternalRedirect />
      {/* <Statistics /> */}
    </main>
  );
};

export default Home;
