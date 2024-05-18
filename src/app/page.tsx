import HeroSection from '@/components/hero/HeroSection'
import Mission from '@/components/mission/Mission';
import Achievements from '@/components/acievements/Achievements';
import AboutAccordion from '@/components/aboutAccordion/AboutAccordion';
import Bhag from '@/components/bhag/Bhag';
import BlogList from '@/components/bloglist/BlogList';
export default function Home() {
  return (
    <main className="">
    <HeroSection/>
    <Achievements/>
    <AboutAccordion/>
    <Bhag/>
    <BlogList/>
    </main>
  );
}
