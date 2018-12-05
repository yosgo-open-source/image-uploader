import * as React from "react";
import styled from "styled-components";

type Props = {
  urls: Array<string>;
  onRemove: (index: number) => void;
};

export default class Images extends React.Component<Props> {
  render() {
    const { urls, onRemove } = this.props;
    return (
      <ImagesWrap>
        {urls.map((url: string, index: number) => {
          return (
            <div className="image_block" key={`upload_img_${index + 1}`}>
              <img
                src={url}
                alt={`upload_img_${index + 1}`}
                className="image_url_view"
              />
              <div
                className="image_remove"
                onClick={() => {
                  var confirm = window.confirm("確認刪除此照片？");
                  if (confirm) onRemove(index);
                  else return;
                }}
              >
                <img src="https://image.flaticon.com/icons/svg/216/216683.svg" />
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
    margin: 5px;
    display: inline-block;
    .image_remove {
      position: absolute;
      z-index: 3;
      top: 0px;
      right: 0px;
      cursor: pointer;
      padding: 3px 3px 0 0;
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
`;
