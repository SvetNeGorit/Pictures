import 'normalize.css';
import './App.css';
import BannerSection from './sections/BannerSection';
import  IntroSection from './sections/IntroSection';
import PortfolioSection from './sections/PortfolioSection';
import InfoSection from './sections/InfoSection'
import EndSection from './sections/EndSection'
import AnimatedSection from './components/AnimatedSection';

function App() {
  
  return (
    <>
      <BannerSection />
      <AnimatedSection animationType="fadeUp" delay={100}>
        <IntroSection />
      </AnimatedSection>
      
      <AnimatedSection animationType="fadeUp" delay={200}>
        <PortfolioSection />
      </AnimatedSection>
      
      <AnimatedSection animationType="fadeLeft" delay={300}>
        <InfoSection />
      </AnimatedSection>
      
      <AnimatedSection animationType="zoomIn" delay={400}>
        <EndSection />
      </AnimatedSection>
            
    </>
  )
}

export default App
