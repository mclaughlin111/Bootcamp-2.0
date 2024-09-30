// Style
import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 1.5em;
  margin-right: 10px;
`;

export const Subtitle = styled.h3`
  font-size: 0.8em;
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

export const Container = styled.div`
  scale: 1;
  transform-origin: top;

  &:before {
    content: "";
    background-image: url("/animalbackground.jpg");
    background-repeat: tile;
    opacity: 0.09;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; /* place the background behind the content */
  }

  @media (max-width: 600px) {
    scale: 0.69;
  }
`;

export const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  font-size: calc(10px + 2vmin);
`;

export const AnimalImage = styled.img`
  width: 24px;
  opacity: 70%;
  border-radius: 5px;
  transition: opacity 50ms ease-in-out;

  &:hover {
    opacity: 100%;
  }
`;
export const Spacer = styled.div`
  margin-bottom: 1em;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterOrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 650px;
  margin-bottom: 1em;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const OrderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const AnimalTableContainer = styled.div`
  padding-left: 2em;
  margin-right: 2em;
`;
