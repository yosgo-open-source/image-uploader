# YOSGO image uploader

Image upload module with react, imgur, typescript.

# Features

- simple config and basic style
- Output images with array
- able to change image url order / delete

# Get start

### Install

styled-components is peerDependencies. If you don't install styled-components yarn add styled-components first.

```
yarn add @yosgo/image-uploader
```

### props

| props         | required | type          | description                             |
| ------------- | -------- | ------------- | --------------------------------------- |
| imgurClientId | yes      | string        | 至此申請 imgur app 並取得 imgurClientId |
| urls          | yes      | Array<string> | 陣列，陣列值為圖片網址字串              |
| onChange      | yes      | Function      | 更新 urls 陣列                          |
| description   | no       | string        | 上傳描述                                |
| hint          | no       | string        | 相關提示                                |
| btnText       | no       | string        | 上傳按鈕文字                            |
| multiple      | no       | boolean       | 是否一次上傳多張，預設為單張            |

### Example

View example on [CodeSandBox](https://codesandbox.io/s/y068qqql6z)
