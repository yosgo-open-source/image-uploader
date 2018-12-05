import * as React from "react";
import styled from "styled-components";

import Images from "./components/Images";
import Default from "./components/Default";
import ImagesDrag from "./components/ImagesDrag";

type Props = {
  imgurClientId: string;
  urls: Array<string>;
  onChange: (urls: Array<string>) => void;
  description?: string;
  hint?: string;
  btnText?: string;
};
type State = {
  content: string;
  drag: boolean;
};

export default class Uploader extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  state: State = {
    content: "",
    drag: false
  };

  handleUpload = (e: any) => {
    const files = e.target.files;
    const filesLength = e.target.files.length;
    for (var x = 0; x < filesLength; x++) {
      const request = new XMLHttpRequest();
      const data = new FormData();
      const file = files[x];
      const THIS = this;
      let CURR = x + 1;
      if (file) {
        data.append("image", file);
        request.open("POST", "https://api.imgur.com/3/image");
        request.setRequestHeader(
          "Authorization",
          `Client-ID ${this.props.imgurClientId}`
        );
        request.onreadystatechange = function() {
          if (request.status === 200 && request.readyState === 4) {
            let response = JSON.parse(request.responseText);
            const imageUrl = response.data.link;
            if (imageUrl) {
              THIS.props.onChange(THIS.props.urls.concat([`${imageUrl}`]));
              THIS.setState({
                content: ""
              });
            }
          }
        };
        request.upload.addEventListener("progress", oEvent => {
          if (oEvent.lengthComputable) {
            let percentComplete = Math.ceil(
              (oEvent.loaded / oEvent.total) * 100
            );
            const percentageText = `${CURR}/${filesLength} 圖片上傳中 ${percentComplete}%`;
            this.setState({ content: percentageText });
            if (percentComplete === 100) {
              this.setState({
                content: `${CURR}/${filesLength} 即將完成`
              });
            }
          } else {
            this.setState({ content: "計算圖片大小中" });
          }
        });
        request.upload.addEventListener("error", () => {
          this.setState({
            content: `OOPS! 發生錯誤`
          });
        });
        request.send(data);
      }
    }
  };

  handleOnDragOver = () => {
    this.setState({
      drag: true
    });
  };

  handleOnDragLeave = () => {
    this.setState({
      drag: false
    });
  };

  handleRemove = (index: number) => {
    const prevUrls = this.props.urls;
    this.props.onChange(
      prevUrls.filter((url: string, prevIndex: number) => index !== prevIndex)
    );
  };

  render() {
    const { content, drag } = this.state;
    const { urls, description, hint, btnText } = this.props;
    return (
      <UploaderWrap>
        <input
          type="file"
          className="upload_input"
          accept="image/*"
          onChange={e => this.handleUpload(e)}
          onDragOver={() => this.handleOnDragOver()}
          onDragLeave={() => this.handleOnDragLeave()}
          onDrop={() => this.handleOnDragLeave()}
          multiple
        />
        {content && content !== "" ? <Mask>{content}</Mask> : null}
        {
          <div>
            {drag ? (
              <ImagesDrag />
            ) : (
              <div>
                {urls && urls.length > 0 ? (
                  <Images urls={urls} onRemove={this.handleRemove} />
                ) : (
                  <Default
                    description={description}
                    hint={hint}
                    btnText={btnText}
                  />
                )}
              </div>
            )}
          </div>
        }
      </UploaderWrap>
    );
  }
}

const Mask = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: rgba(55, 55, 55, 0.8);
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  border-radius: 3px;
`;

const UploaderWrap = styled.div`
  min-height: 330px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  border: 4px dotted lightgray;
  border-radius: 3px;
  text-align: left;
  .upload_input {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
