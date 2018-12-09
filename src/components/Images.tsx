import * as React from "react";
import styled from "styled-components";

type Props = {
  urls: Array<string>;
  onRemove: (index: number) => void;
  onReOrder: (type: string, index: number) => void;
};

export default class Images extends React.Component<Props> {
  render() {
    const { urls, onRemove, onReOrder } = this.props;
    return (
      <ImagesWrap>
        {urls.map((url: string, index: number) => {
          return (
            <div className={`image_block`} key={`upload_img_${index + 1}`}>
              <img
                src={url}
                alt={`upload_img_${index + 1}`}
                className="image_url_view"
              />
              {urls.length > 1 ? (
                <div>
                  <div
                    className="icon_order"
                    onClick={() => onReOrder("prev", index)}
                    style={{ left: "3px" }}
                  >
                    <img
                      src="https://image.flaticon.com/icons/svg/52/52211.svg"
                      alt="icon"
                    />
                  </div>
                  <div
                    className="icon_order"
                    onClick={() => onReOrder("next", index)}
                    style={{ left: "27px" }}
                  >
                    <img
                      src="https://image.flaticon.com/icons/svg/51/51917.svg"
                      alt="icon"
                    />
                  </div>
                </div>
              ) : null}
              <div
                className="icon_remove"
                onClick={() => {
                  var confirm = window.confirm("確認刪除此照片？");
                  if (confirm) onRemove(index);
                  else return;
                }}
              >
                <img
                  src="https://image.flaticon.com/icons/svg/216/216683.svg"
                  alt="icon"
                />
              </div>
            </div>
          );
        })}
      </ImagesWrap>
    );
  }
}

const ImagesWrap = styled.span`
  display: inline-block;
  .image_block {
    width: 150px;
    height: 150px;
    border-radius: 3px;
    border: 1px solid lightgray;
    overflow: hidden;
    position: relative;
    z-index: 3;
    margin: 10px;
    display: inline-block;
    opacity: 0;
    animation-name: In;
    animation-duration: 450ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    .icon_remove {
      position: absolute;
      top: 0px;
      right: 0px;
      cursor: pointer;
      padding: 3px 3px 0 0;
      &:hover {
        opacity: 0.8;
      }
      img {
        display: inline-block;
        width: 20px;
        height: 20px;
        object-fit: cover;
      }
    }
    .icon_order {
      position: absolute;
      top: 5px;
      cursor: pointer;
      transition: 0.2s;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      &:hover {
        opacity: 0.9;
        background: white;
      }
      img {
        display: inline-block;
        width: 20px;
        height: 20px;
        object-fit: cover;
      }
    }
    .image_url_view {
      width: 150px;
      height: 150px;
      object-fit: contain;
      background: rgba(55, 55, 55, 0.2);
    }
  }
  @keyframes In {
    0% {
      opacity: 0;
      transform: scale(0.3) translate3d(0, 0, 0);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.02);
    }
    80% {
      opacity: 1;
      transform: scale(0.97);
    }
    100% {
      opacity: 1;
      transform: scale(1) translate3d(0, 0, 0);
    }
  }
`;
