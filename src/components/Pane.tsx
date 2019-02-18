import styled from "styled-components";

const Pane = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 0.5rem 1rem;
  overflow-y: auto;
  background: /* Shadow covers */ linear-gradient(
      #f2f2f2 30%,
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(rgba(255, 255, 255, 0), #f2f2f2 70%) 0 100%,
    /* Shadows */
      radial-gradient(
        farthest-side at 50% 0,
        rgba(24, 24, 24, 0.2),
        rgba(24, 24, 24, 0)
      ),
    radial-gradient(
        farthest-side at 50% 100%,
        rgba(24, 24, 24, 0.2),
        rgba(24, 24, 24, 0)
      )
      0 100%;
  background-repeat: no-repeat;
  background-color: #f2f2f2;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
`;

export default Pane;
