import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopading>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hey! I’m Aasutosh Baraiya — a passionate programmer and final-year Computer Science student at SVNIT Surat.
        I began my coding journey driven by a love for mathematics and problem-solving, which naturally led me into the world of Programming.
        I enjoy building projects that blend logic with design — from C++-powered algorithms to responsive web apps using HTML, CSS, and JavaScript. 
        I was part of a team of four that built 'KOE - The Kafe' for a college-wide competition under Google Winter of Code ’24, where we won 1st prize for our contribution.
        Beyond coding, I care deeply about collaboration and mentorship, often supporting my peers in tech clubs and team projects. I'm also drawn to clean design and intuitive user experience — believing that thoughtful interfaces can amplify impact. 
        With curiosity as my compass, I'm always learning — one challenge, one idea at a time.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:aasutoshbaraiya146@gmail.com'}>
               Get Connect
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;