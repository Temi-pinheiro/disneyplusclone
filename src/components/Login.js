import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt='partners' />
          <SignUp>EXPLORE A WORLD OF MAGIC</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and the Disney Bundle will increase by $1
          </Description>
          <BottomLogo src='/images/cta-logo-two.png' />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/login-background.jpg');
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CTALogoOne = styled.img`
  height: 100%;
  margin-bottom: 12px;
  /* max-width: 600px; */
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: 700;
  color: #f9f9f9;
  margin-top: 1em;
  margin-bottom: 12px;
  font-size: 1.5em;
  letter-spacing: 1.5px;
  padding: 1.2em 1.5em;
  background-color: #0063e5;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  display: block;
  margin: 0 0 24px;
  color: hsla(0, 0, 95.3%, 1);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const BottomLogo = styled.img`
  width: 100;
  margin-top: 1em;
`;

export default Login;
