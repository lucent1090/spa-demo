import styled from "@emotion/styled";

const Content = styled.div`
  width: 60dvw;
  margin: 5rem auto;

  @media screen and (max-width: 820px) {
    width: 80dvw;
  }
`;

function Error() {
  return (
    <Content>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </Content>
  );
}

export default Error;
