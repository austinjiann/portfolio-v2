import { Header } from '../components/layout/Header';
import { Hero } from '../components/section/Hero';
import { Projects } from '../components/section/Projects';
import { WebringBadge } from '../components/ui/WebringBadge';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <WebringBadge siteUrl="austinjian.ca" />
    </>
  );
};