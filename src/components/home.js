import React, { useEffect } from "react";
import styled from "styled-components";
import pix from "../components/illus.svg";
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {

      useEffect(() => {
        AOS.init({ duration: 3000 });
      }, []);
  return (
    <Container>
      <Wrapper>
        {/* //flip left fade-left fade-right */}
        <Text data="flip-right">
          <H1>Grow Together</H1>
          <P>
            Generate discussions with your audience and build a strong loyal
            community. Think of the insightfull conversations you miss out on
            with a feedback form
          </P>
        </Text>
        <Image src={pix} />
      </Wrapper>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 75%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Text = styled.div`
  width: 500px;
  height: 120px;
  display: flex;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 30px;
`;

const P = styled.div`
  font-size: 17px;
  width: 100%;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 500px;
  object-position: center;
  height: 500px;
`;
