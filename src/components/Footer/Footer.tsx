import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import youtube from '../../assets/youtube.svg'
import facebook from '../../assets/faceboook.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.linkedin.com/in/supagit-ruarn/" className="logo">
        <span>Better to gether</span>
        <span></span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/supagit-ruarn/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/JamesSupagit/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.youtube.com/@jamessupagit6294"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="Youtube" />
        </a>
        <a
          href="https://www.facebook.com/supagit.ruarn/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/james_sr9/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
