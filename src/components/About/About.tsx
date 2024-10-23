import { Container } from "./styles";
import JamesSupagit from "../../assets/jamessupagit.jpg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ansibleIcon from "../../assets/ansible.svg";
import arduinoIcon from "../../assets/arduino.svg";
import githubIcon from "../../assets/github-icon.svg";
import herokuIcon from "../../assets/heroku.svg";
import homebrewIcon from "../../assets/homebrew.svg";
import openaiIcon from "../../assets/openai-icon.svg";
import opencvIcon from "../../assets/opencv.svg";
import raspberryIcon from "../../assets/raspberry-pi.svg";
import rockylinuxIcon from "../../assets/rocky-linux-icon.svg";
import webhookIcon from "../../assets/webhooks.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi! I’m James Supagit, a cybersecurity enthusiast dedicated to protecting digital assets and ensuring data integrity. With four years of experience in the field, I actively engage with emerging threats and implement innovative solutions, constantly striving to stay ahead in this dynamic landscape.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Alongside my passion for cybersecurity, I enjoy analyzing financial markets and making informed investment decisions. By combining thorough research with strategic planning, I aim to identify opportunities and navigate risks in the ever-evolving finance sector.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          On the investment side, I enjoy analyzing financial markets and making informed decisions to maximize returns. By combining through research with strategic planning, I aim to identify opportunities and navigate risks in the ever-evolving landscape of finance.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={ansibleIcon} alt="Ansible" />
            </ScrollAnimation>
          </div>    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={githubIcon} alt="Github" />
            </ScrollAnimation>
          </div>    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={homebrewIcon} alt="Homebrew" />
            </ScrollAnimation>
          </div>    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={openaiIcon} alt="OpenAI" />
            </ScrollAnimation>
          </div>    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={opencvIcon} alt="OpenCV" />
            </ScrollAnimation>
          </div>    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={raspberryIcon} alt="Raspberry-Pi" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={rockylinuxIcon} alt="Rockylinux" />
            </ScrollAnimation>
          </div>    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={webhookIcon} alt="Webhook" />
            </ScrollAnimation>
          </div>    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={arduinoIcon} alt="Arduino" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={herokuIcon} alt="Heroku" />
            </ScrollAnimation>
          </div>    
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={JamesSupagit} alt="James Supagit" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
