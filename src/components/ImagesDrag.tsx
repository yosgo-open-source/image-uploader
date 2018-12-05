import * as React from "react";
import styled from "styled-components";

type Props = {};

export default class ImagesDrag extends React.Component<Props> {
  render() {
    return (
      <ImagesDragWrap>
        <div>
          <img
            src="https://image.flaticon.com/icons/svg/214/214333.svg"
            alt="cover"
          />
        </div>
      </ImagesDragWrap>
    );
  }
}

const ImagesDragWrap = styled.div`
  min-height: 330px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    height: 180px;
    width: auto;
    object-fit: cover;
    opacity: 0;
    animation-name: bounceIn;
    animation-duration: 450ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3) translate3d(0, 0, 0);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.1);
    }
    80% {
      opacity: 1;
      transform: scale(0.89);
    }
    100% {
      opacity: 1;
      transform: scale(1) translate3d(0, 0, 0);
    }
  }
`;
