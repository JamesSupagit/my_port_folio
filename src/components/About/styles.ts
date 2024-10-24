import styled from "styled-components";

// Sound effect source (replace with your actual sound file path)
const hoverSound = new Audio('../../assets/short-beep-tonefds.mp3'); // Add your sound file path

const handleHover = () => {
  hoverSound.currentTime = 0; // Rewind to start
  hoverSound.play(); // Play sound
};

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
      transition: transform 0.5s, filter 0.5s; /* Transition for transform */
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: transform 0.5s, filter 0.5s, box-shadow 0.5s, border-color 0.5s; /* Transition for shadow and border color */
      border-radius: 50%; /* Circular border */
      border: 5px solid rgba(255, 255, 255, 0.8); /* Initial light border effect */

      /* Animation on hover */
      &:hover {
        filter: grayscale(0);
        transform: scale(1.1) rotate(360deg); /* Spin effect */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Shadow effect */
        outline: 10px solid #23ce6b; /* Change border to green */
        outline-offset: -5px; /* Adjust outline offset */
        
        /* Call the sound function */
        animation: spin 0.5s linear forwards; /* Spin animation */
        border-color: #23ce6b; /* Change border color on hover */
      }
    }
  }

  /* Keyframes for spinning animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: transform 0.5s, filter 0.5s, box-shadow 0.5s, border-color 0.5s; /* Transition for shadow and border color */
        border-radius: 50%; /* Circular border */
        
        &:hover {
          filter: grayscale(0);
          transform: scale(1.1) rotate(360deg); /* Spin effect */
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Shadow effect */
          outline: 10px solid #23ce6b; /* Change border to green */
          outline-offset: -5px; /* Adjust outline offset */
          animation: spin 0.5s linear forwards; /* Spin animation */
        }
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      max-width: 100%;

      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: transform 0.5s, filter 0.5s, box-shadow 0.5s, border-color 0.5s; /* Transition for shadow and border color */
        border-radius: 50%; /* Circular border */
        
        &:hover {
          filter: grayscale(0);
          transform: scale(1.1) rotate(360deg); /* Spin effect */
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Shadow effect */
          outline: 10px solid #23ce6b; /* Change border to green */
          outline-offset: -5px; /* Adjust outline offset */
          animation: spin 0.5s linear forwards; /* Spin animation */
        }
      }
    }
  }
`;
