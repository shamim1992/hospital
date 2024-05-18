import HeroSection from '@/components/hero/HeroSection'
import Mission from '@/components/mission/Mission';
import Achievements from '@/components/acievements/Achievements';
import AboutAccordion from '@/components/aboutAccordion/AboutAccordion';
import Bhag from '@/components/bhag/Bhag';
export default function Home() {
  return (
    <main className="">
    <HeroSection/>
    <Achievements/>
    <AboutAccordion/>
    <Bhag/>
    </main>
  );
}
