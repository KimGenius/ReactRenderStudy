# 라이프 사이클 & 렌더 스터디 용도

Render Test는 [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko) v3의 Highlight Updates를 사용하였습니다.
## 기록
react hooks 에서는 같은 값이면 setParentValue를 해도 render가 일어나지 않음.<br/>
class component 에서는 같은 값이여도 setState를 하면 render가 일어남.

의문점

class component 에서는 같은 값으로 setState를 해도 render를 한다.<br/>
그럼 hooks의 useState에서 같은 값이면 내부적으로 state 변경을 안하나..?
