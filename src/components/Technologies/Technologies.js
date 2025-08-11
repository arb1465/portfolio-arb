import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit, DiPython } from 'react-icons/di';
import { SiFigma, SiCplusplus, SiMysql, SiVisualstudiocode, SiExpress, SiMongodb } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle main>Skills</SectionTitle>
    <SectionText>
      I've worked with these Technologies.
    </SectionText>
    <List>
      <ListItem>
        <SiCplusplus size="4.3rem"/> <br/>
        <ListContainer>
          <ListTitle>C++</ListTitle>
          <ListParagraph>DSA & OOPs</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiHtml5 size="4.5rem"/> <br/>
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          <ListParagraph>Semantic & Accessible Markup</ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiCss3 size="4.5rem"/> <br/>
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
          <ListParagraph>Responsive and Modular Styling</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript1 size="4.5rem"/> <br/>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>Logic, DOM Manipulation</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="4.5rem"/> <br/>
        <ListContainer>
          <ListTitle>ReactJS</ListTitle>
          <ListParagraph>Component-based UI Development</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiFigma size="4.2rem"/> <br/>
        <ListContainer>
          <ListTitle>Figma</ListTitle>
          <ListParagraph>UI/UX Design Prototyping</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGit size="4.5rem"/> <br/>
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>Version Control</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiMysql size="4.5rem"/> <br/>
        <ListContainer>
          <ListTitle>SQL</ListTitle>
          <ListParagraph>Relational Database Queries</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPython size="4.5rem"/> <br/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>Scripting & Data Processing</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiExpress size="4.5rem" /> <br/>
        <ListContainer>
          <ListTitle>Express.js</ListTitle>
          <ListParagraph>Backend Framework for APIs & Routing</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiMongodb size="4.5rem" /> <br/>
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
          <ListParagraph>Document-Oriented Database with Mongoose</ListParagraph>
        </ListContainer>
      </ListItem>

       <ListItem>
        <SiVisualstudiocode size="4.5rem"/> <br/>
        <ListContainer>
          <ListTitle>VS Code</ListTitle>
          <ListParagraph>Development Environment</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
