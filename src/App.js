import React, { useState, Suspense, memo, useMemo, useRef, useEffect } from 'react';
import Loader from './components/Loader';
import Modal from './components/Modal';
import AnimatedBoxes from './components/AnimatedBoxes.jsx';
import TypedTerminal from './components/TypedTerminal';
import FadeInSection from './components/FadeInSection';
import AnimatedTagline from './components/AnimatedTagline';
import DigitalYear from './components/DigitalYear';
import TechPill from './components/TechPill';
import TechTooltip from './components/TechTooltip';
import { descriptions } from './techDescriptions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

const App = memo(function App() {
  const [loading, setLoading] = useState(true);
  const [showKryptonModal, setShowKryptonModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedTech, setSelectedTech] = useState(null);
  const techSectionRef = useRef(null);
  const [isTestMode] = useState(window.location.search.includes('test'));

  const handleSectionClick = (event) => {
    // If clicking outside any tech pill, reset the states
    if (!event.target.closest('.tech-pill')) {
      setSelectedSection('');
      setSelectedTech(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleSectionClick);
    return () => document.removeEventListener('mousedown', handleSectionClick);
  }, []);
  
  useEffect(() => {
    const handleWheel = () => {
      // Reset states immediately on any wheel movement
      setSelectedSection('');
      setSelectedTech(null);
    };

    const handleTouchMove = () => {
      // Reset states on touch movement for mobile
      setSelectedSection('');
      setSelectedTech(null);
    };

    // Add both wheel and touch events
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  const handleTechClick = (section, tech) => {
    if (selectedSection === section && selectedTech === tech) {
      // If clicking the same pill, reset the state
      setSelectedSection('');
      setSelectedTech(null);
    } else {
      // If clicking a different pill, update the state
      setSelectedSection(section);
      setSelectedTech(tech);
    }
  };

  const getSectionHeader = (sectionTitle, section) => {
    if (selectedSection !== section || !selectedTech) return (
      <div className="h-[48px] flex flex-col justify-center">
        {sectionTitle}
      </div>
    );

    const description = descriptions[selectedTech.toLowerCase()];
    if (!description) return sectionTitle;

    return (
      <div className="h-[48px] flex flex-col justify-center">
        <div className="flex items-center justify-center">
          <span className="text-purple text-sm">{description.title}</span>
          <span className="text-white ml-2 text-xs">({description.desc.split('\n')[0]})</span>
        </div>
        <div className="text-xs text-white/80 mt-0.5">
          {description.desc.split('\n')[1]}
        </div>
      </div>
    );
  };

  const KryptonZeroContent = (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl text-[#b37b98]">kryptonzero.</h2>
      <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300 text-justify">
        <p className="text-sm sm:text-base">a group of friends in the music industry known for their dynamic and energetic production style. specializing in pop, future bass, and electronic dance music. <span className="font-medium">kryptonzero.</span> has quickly made a name for themselves with their catchy melodies and driving beats.</p>
        <p className="text-sm sm:text-base"><span className="font-medium">kryptonzero.</span> brings a unique and diverse perspective to their work, creating music that resonates with listeners of all ages. their work has collected over 15 million plus streams to date.</p>
        <p className="text-sm sm:text-base">in recent years, <span className="font-medium">kryptonzero.</span> has worked with a variety of artists. their tracks have been played at major festivals, solidifying their place as a sought-after producer in the dance music scene.</p>
        <p className="text-sm sm:text-base">with a relentless work ethic and a true love for music, <span className="font-medium">kryptonzero.</span> is poised for continued success in the years ahead. keep an eye out for their latest releases and get ready to dance to the beat of <span className="font-medium">kryptonzero.'s</span> infectious tracks.</p>
      </div>
      <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4 text-sm sm:text-base">
        <a 
          href="https://open.spotify.com/artist/5e7CkuRnVGvPYgVAlurpHc" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b37b98] hover:text-gray-600 transition-colors"
        >
          spotify
        </a>
        <span className="text-[#b37b98]">•</span>
        <a 
          href="https://www.instagram.com/_kryptonzero" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b37b98] hover:text-gray-600 transition-colors"
        >
          instagram
        </a>
        <span className="text-[#b37b98]">•</span>
        <a 
          href="https://www.youtube.com/@kryptonzero." 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b37b98] hover:text-gray-600 transition-colors"
        >
          youtube
        </a>
      </div>
    </div>
  );

  if (isTestMode) {
    return <TestPage />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loader onLoadingComplete={() => setLoading(false)} />
            ) : (
              <div
                className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden overscroll-none ${
                  loading ? 'hidden' : ''
                } relative bg-softBg dark:bg-darkBlue transition-colors duration-500`}
              >
                <section className="snap-start bg-softBg dark:bg-darkBlue h-screen md:min-h-0 flex items-center justify-center relative overflow-hidden py-8 md:py-0 transition-colors duration-500">
                  {/* Background decoration */}
                  <div className="absolute top-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-blue/5 rounded-full blur-2xl md:blur-3xl" />
                  <div className="absolute bottom-20 right-20 w-32 md:w-64 h-32 md:h-64 bg-purple/5 rounded-full blur-2xl md:blur-3xl" />
                  
                  <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 relative z-10">
                    {/* for bringing the hii im down */}
                    {/* <div className="space-y-3 md:space-y-4 w-full max-w-2xl mx-auto"></div> */}
                    <div className="space-y-3 md:space-y-4 w-full max-w-2xl mx-auto">
                      <div className="-mb-3">
                        <FadeInSection delay={200}>
                          <h2 className="text-base sm:text-lg font-light text-softText dark:text-darkBlueText">
                            hii, i'm
                          </h2>
                        </FadeInSection>
                      </div>
                      <FadeInSection delay={400}>
                        <h1 className="text-4xl md:text-[3.5rem] font-sans font-light lowercase leading-none">
                          <span className="text-softText dark:text-darkBlueText text-3d inline-block">worlar</span>
                          <span className="text-softText dark:text-darkBlueText text-3d inline-block ml-3">usham.</span>
                        </h1>
                      </FadeInSection>
                      <FadeInSection delay={600}>
                        <div className="font-sans text-xl lowercase text-softText dark:text-darkBlueText/90">
                          <AnimatedTagline />
                        </div>
                      </FadeInSection>
                      <FadeInSection delay={800}>
                        <div className="text-softText dark:text-darkBlueText/90">
                          <TypedTerminal loading={loading} />
                        </div>
                      </FadeInSection>
                      <FadeInSection delay={1000}>
                        {/* <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                          <a href="#" className="text-textPrimary dark:text-primary transition-all duration-300 transform hover:-translate-y-1">
                            <span className="border border-blue/20 hover:border-purple/20 hover:shadow-lg hover:shadow-blue/5 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base">github.</span>
                          </a>
                          <a href="#" className="text-textPrimary dark:text-primary transition-all duration-300 transform hover:-translate-y-1">
                            <span className="border border-blue/20 hover:border-purple/20 hover:shadow-lg hover:shadow-blue/5 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base">linkedin.</span>
                          </a>
                        </div> */}
                      </FadeInSection>
                    </div>
                  </div>
                </section>

                {/* Technologies Section */}
                <section className="snap-start bg-[#CDC1FF] dark:bg-darkPurple h-screen md:min-h-0 flex items-center justify-center relative overflow-hidden transition-colors duration-500">
                  <div className="absolute top-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-purple/5 rounded-full blur-2xl md:blur-3xl" />
                  <div className="absolute bottom-20 right-20 w-32 md:w-64 h-32 md:h-64 bg-blue/5 rounded-full blur-2xl md:blur-3xl" />
                  
                  <div className="container mx-auto px-4 max-w-4xl relative flex justify-center">
                    <div className="w-full max-w-3xl">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Left Column - Title */}
                        <FadeInSection delay={400}>
                          <div className="flex flex-col justify-center h-full md:min-h-[360px]">
                            <h2 className="text-[#6355AB] dark:text-darkPurpleText text-3xl md:text-[3.5rem] font-light text-center md:text-right">
                              technologies.
                            </h2>
                          </div>
                        </FadeInSection>

                        {/* Right Column - Tech Lists */}
                        <FadeInSection delay={600}>
                          <div className="space-y-12 h-full flex flex-col justify-center">
                            <div>
                              <h3 className="text-lg font-light text-[#6355AB] dark:text-darkPurpleText/90 mb-3 text-center md:text-left">languages</h3>
                              <div className="flex flex-wrap md:flex-nowrap items-center gap-x-3 gap-y-6 md:gap-y-0 justify-center md:justify-start">
                                {['python', 'javascript', 'html', 'css', 'sql'].map((tech, index, array) => (
                                  <React.Fragment key={tech}>
                                    <TechTooltip 
                                      name={tech}
                                      description={descriptions[tech.toLowerCase()]?.desc.split('\n')[0]}
                                      color="text-gray-600"
                                    />
                                    {index !== array.length - 1 && (
                                      <span className="text-[#6355AB]/60 dark:text-darkPurpleText/60">·</span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-light text-[#6355AB] dark:text-darkPurpleText/90 mb-3 text-center md:text-left">frameworks</h3>
                              <div className="flex flex-wrap md:flex-nowrap items-center gap-x-3 gap-y-6 md:gap-y-0 justify-center md:justify-start">
                                {['node.js', 'express.js', 'jquery', 'bootstrap', 'ejs'].map((tech, index, array) => (
                                  <React.Fragment key={tech}>
                                    <TechTooltip 
                                      name={tech}
                                      description={descriptions[tech.toLowerCase()]?.desc.split('\n')[0]}
                                      color="text-gray-600"
                                    />
                                    {index !== array.length - 1 && (
                                      <span className="text-[#6355AB]/60">·</span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-light text-[#6355AB] dark:text-darkPurpleText/90 mb-3 text-center md:text-left">tools</h3>
                              <div className="flex flex-wrap md:flex-nowrap whitespace-nowrap items-center gap-x-3 gap-y-6 md:gap-y-0 justify-center md:justify-start">
                                {['git', 'vs code', 'terminal', 'photoshop', 'fl studio'].map((tech, index, array) => (
                                  <React.Fragment key={tech}>
                                    <TechTooltip 
                                      name={tech}
                                      description={descriptions[tech.toLowerCase()]?.desc.split('\n')[0]}
                                      color="text-gray-600"
                                    />
                                    {index !== array.length - 1 && (
                                      <span className="text-[#6355AB]/60">·</span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          </div>
                        </FadeInSection>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Section (Now Third Slide) */}
                <section className="snap-start bg-[#FFCCEA] dark:bg-darkPink h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500">
                  <div className="absolute top-20 right-20 w-64 h-64 bg-pinkLight/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple/5 rounded-full blur-3xl" />
                  
                  <div className="container mx-auto relative h-full flex flex-col">
                    <div className="flex-1 flex flex-col justify-center">
                      <FadeInSection delay={200}>
                        <h2 className="text-[#b37b98] dark:text-darkPinkText text-3xl md:text-[3.5rem] font-light mb-12 text-center">
                          let's connect.
                        </h2>
                      </FadeInSection>
                      <div className="w-[320px] md:w-[768px] mx-auto relative">
                        {/* Guide paths - hidden */}
                        <div className="absolute -left-3 -top-3 w-[calc(100%+24px)] h-[calc(100%+24px)] border-2 border-dashed border-purple/0 pointer-events-none" />
                        <div className="absolute left-1/2 top-0 w-0 h-full border-l-2 border-dashed border-purple/0 pointer-events-none md:block hidden" />
                        {/* Horizontal guides - hidden */}
                        <div className="absolute left-[0%] right-[50%] top-[151px] border-t-2 border-dashed border-purple/0 pointer-events-none" />
                        <div className="absolute left-[50%] right-[0%] top-[220px] border-t-2 border-dashed border-purple/0 pointer-events-none" />
                        
                        <div className="relative">
                          <AnimatedBoxes />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Left column - Contact */}
                          <FadeInSection delay={400}>
                            <div className="h-full flex flex-col justify-between">
                              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                                <a href={`mailto:worlariscoooool@gmail.com?subject=${encodeURIComponent("Let's work together!")}&body=${encodeURIComponent("Hi Worlar,\n\nI'd like to discuss a potential project/collaboration.\n\nBest regards,")}`}
                                  className="h-[140px] group p-6 bg-white/50 dark:bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-gray-600/5 flex flex-col justify-center"
                                >
                                  <h3 className="text-xl text-[#b37b98] dark:text-darkPinkText mb-2 group-hover:text-gray-600 dark:group-hover:text-darkPinkText/70">
                                    email me
                                  </h3>
                                  <p className="text-gray-600 dark:text-darkPinkText/80 text-[13px]">what's up?</p>
                                </a>
                                <a href="https://www.instagram.com/worlar_usham/" 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="h-[140px] group p-6 bg-white/50 dark:bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-gray-600/5 flex flex-col justify-center"
                                >
                                  <h3 className="text-xl text-[#b37b98] dark:text-darkPinkText mb-2 group-hover:text-gray-600 dark:group-hover:text-darkPinkText/70">instagram</h3>
                                  <p className="text-gray-600 dark:text-darkPinkText/80 text-sm">@worlar_usham</p>
                                </a>
                              </div>
                            </div>
                          </FadeInSection>
                          {/* Right column - Quick Facts */}
                          <FadeInSection delay={600}>
                            <div className="h-full flex flex-col justify-between">
                              <div className="h-[210px] p-6 bg-white/50 dark:bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/10 mb-4">
                                <h3 className="text-xl text-[#b37b98] dark:text-darkPinkText mb-4">quick facts</h3>
                                <div className="space-y-4">
                                  <p className="text-gray-600 dark:text-darkPinkText/80 text-sm flex items-center gap-2">
                                    <span className="text-blue">🎵</span>
                                    coding to chill music
                                  </p>
                                  <p className="text-gray-600 dark:text-darkPinkText/80 text-sm flex items-center gap-2 whitespace-nowrap">
                                    <span className="text-blue">✨</span>
                                    turning caffeine into code since 2019
                                  </p>
                                  <p className="text-gray-600 dark:text-darkPinkText/80 text-sm inline-flex items-center gap-2 whitespace-nowrap">
                                    <span className="text-blue">🎹</span>
                                    music producer under
                                    <a 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setShowKryptonModal(true);
                                      }}
                                      href="https://open.spotify.com/artist/5e7CkuRnVGvPYgVAlurpHc?si=KnBVxUgvTzmLv3bVEr0Vfg" 
                                      className="text-[#b37b98] dark:text-white/70 hover:text-gray-600 dark:hover:text-darkPinkText/80 transition-colors cursor-pointer"
                                    >
                                      @kryptonzero.
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div className="h-[70px] p-6 bg-white/50 dark:bg-black/40 backdrop-blur-sm rounded-lg border border-gray-600/10 flex items-center">
                                <p className="text-gray-600 dark:text-darkPinkText/80 text-sm">
                                  currently available for freelance work and collaborations
                                </p>
                              </div>
                            </div>
                          </FadeInSection>
                        </div>
                      </div>
                    </div>

                    <div className="py-4 text-center">
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-white/60">
                        made with 
                        <span class="mx-1 text-blue dark:text-darkBlueText animate-pulse">🩵</span> 
                        by worlar usham © <DigitalYear />
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Modal isOpen={showKryptonModal} onClose={() => setShowKryptonModal(false)}>
        {KryptonZeroContent}
      </Modal>
    </Router>
  );
});

export default App;
