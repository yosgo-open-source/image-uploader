import * as React from "react";
import styled from "styled-components";

type Props = {
  description?: string;
  hint?: string;
  btnText?: string;
};

export default class Default extends React.Component<Props> {
  render() {
    const { description, hint, btnText } = this.props;
    return (
      <DefaultWrap>
        <div>
          <p>{description ? description : "直接拖曳圖片上傳或點選上傳按鈕"}</p>
          <small>{hint ? hint : "可上傳多張圖片與調整圖片順序"}</small>
          <button>
            <img
              src="https://image.flaticon.com/icons/svg/148/148711.svg"
              alt="cover"
            />
            {btnText ? btnText : "上傳圖片"}
          </button>
        </div>
      </DefaultWrap>
    );
  }
}

const DefaultWrap = styled.div`
  min-height: 330px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    font-size: 15px;
    display: block;
    margin: 0 0 5px 0;
    text-align: center;
  }
  small {
    text-align: center;
    font-size: 13px;
    display: block;
    color: gray;
  }
  button {
    margin: 15px auto 0 auto;
    border: 3px solid #00b5ad;
    border-radius: 4px;
    color: #00b5ad;
    display: flex;
    align-items: center;
    padding: 7px 10px;
    box-shadow: 0px;
    font-size: 17px;
    img {
      width: auto;
      height: 20px;
      object-fit: cover;
      display: inline-block;
      margin: 5px;
    }
  }
`;
