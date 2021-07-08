
## 폴더구조

Asset : 이미지 파일같은 정적 파일을 위한 폴더
Components : 페이지에 들어갈 컴포넌트를 위한 폴더
Pages : 구성될 페이지를 위한 폴더

### settings.json
```json
{
    "prettier.printWidth": 140,
    "prettier.tabWidth": 4,
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
     },
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
    "eslint.alwaysShowStatus": true,
    "prettier.disableLanguages": ["js"],
    "files.autoSave": "onFocusChange",
}
```


### 프로젝트 루트 설정
import SampleComponent from "../../Components/SampleComponent"
--> import SampleComponet from "Components/SampleComponent"
- src폴더가 baseUrl