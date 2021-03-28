import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  width: 30rem;
  border: ${(props) => props.theme.colors.buttonPrimary};
  height: 6.25rem;
  text-transform: uppercase;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.background};
  border-radius: 1rem;
  font-weight: 700;
  transition: filter 0.2s;

  @media (max-width: 768px) {
    width: 18.75rem;
    font-size: 1.5rem;
    height: 2.5rem;
  }

  &:hover {
    filter: brightness(2);
  }
`;
