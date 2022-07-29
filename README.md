# Survey(설문) 프로젝트 설계 🛠

1. 기본 컴포넌트 구현및 페이지분류

- 설문 페이지와 완료 페이지 두 페이지로 나눈 후 각각의 설문 문항과 세부 타이틀과 컨텐츠에 대해서는 컴포넌트화

2. 세부 기능 구현

- 설문 조사 진행 상태바
  - 문항수 만큼 막대를 표시한다
  - 답변완료한 문항과 현재 진행중인 문항에 서로 다른색으로 구분, 숫자로 현재 진행상황 표시
- 질문 내용 표시
  - 타이틀과 설명을 나누어 질문내용 가져오기
- 객관식 항목 체크
  - 객관식 항목 나열과 선택 시 체크표시
  - 재선택시 체크 해제
  - 최대 개수 만큼 선택했다면 다른 항목을 선택해서 변화 없음
  - 필수 입력 받기
- 단답식 입력 항목
  - 입력 글자 제한
  - 필수 입력 받기
- 서술식 입력 항목
  - 입력창 크기 조절 불가능
  - 입력 글자 제한
  - 필수 입력 받기
- 다음 버튼
  - 클릭 시, 다음 설문 내용으로 이동
  - 다음 문항이 있을 때만 노출
- 이전 버튼
  - 클릭 시, 이전 문항으로 이동
  - 이전 문항이 있을 때에만 노출
- 제출버튼
  - 클릭 시, 지금까지 작성한 답변들을 저장하고, 완료 페이지로 이동
  - 마지막 문항에서만 노출
- 설문 완료페이지 노출
- 재설문 버튼
  - 클릭 시, 모든 답변이 초기화된 처음 문항으로 이동

---

## 사용된 라이브러리 🪛

- [Recoil](https://recoiljs.org/ko/docs/introduction/getting-started) - 상태 저장관리소
- [style-components](https://styled-components.com/) - css스타일링
- [Axios](https://axios-http.com/kr/docs/intro) - 서버와 비동기 통신
- [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/tutorial) - 페이징처리

---

## src 폴더구조

```
📦src
 ┣ 📂assets - 정적 파일 보관
 ┃ ┣ 📜con.png
 ┃ ┗ 📜reload.png
 ┣ 📂components - 컴포넌트별 그룹화
 ┃ ┣ 📂ActionButtons
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Bar
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Body
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Button
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Desc
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂ProgressIndicator
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂QuestionBox
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SelectInput
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂TextAreaInput
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂TextInput
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂Title
 ┃ ┃ ┗ 📜index.js
 ┣ 📂constants - 스타일변수 저장
 ┃ ┗ 📜color.js
 ┣ 📂hooks - 재사용이 많은 hooks 그룹화
 ┃ ┣ 📜useAnswers.js
 ┃ ┣ 📜useCurrentAnswer.js
 ┃ ┣ 📜useCurrentQuestion.js
 ┃ ┣ 📜useRequiredOption.js
 ┃ ┣ 📜useStep.js
 ┃ ┗ 📜useSurveyId.js
 ┣ 📂pages -5페이지 구분
 ┃ ┣ 📂CompletionPage - 설문 완료 페이지
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂SurveyPage - 설문 페이지
 ┃ ┃ ┗ 📜index.js
 ┣ 📂services - API를 주고받을 파일들
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜mainApi.js - 기본 api주소 설정
 ┃ ┣ 📜getSurvey.js - 설문내용을 받을 주소 설정
 ┃ ┗ 📜postAnswers.js - 입력한 설문내용을 보낼 주소 설정
 ┣ 📂stores - 설문 답변, 현재 설문 인덱스, 설문데이터 전역 상태관리
 ┃ ┣ 📂answers
 ┃ ┃ ┗ 📜atom.js
 ┃ ┗ 📂survey
 ┃ ┃ ┣ 📜questionLengthState.js
 ┃ ┃ ┗ 📜surveyState.js
 ┣ 📜.DS_Store
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```

---

## 완성 화면

<div style="display: flex; flex-wrap: wrap;">
  <img width="50%" src="https://user-images.githubusercontent.com/76725512/181681381-70f88736-2b74-4888-bbea-bb54b3914190.png">

  <img width="50%" src="https://user-images.githubusercontent.com/76725512/181681386-d7f9b873-d2c6-4c7c-bc55-259c47b97bc9.png">

  <img width="50%" src="https://user-images.githubusercontent.com/76725512/181681391-74b5c3ea-9ff8-4738-ab54-abcbffccf2bc.png">

  <img width="50%" src="https://user-images.githubusercontent.com/76725512/181681392-9e9cbc2e-72e6-4c33-ab7d-a12db3778a6c.png">
</div>
