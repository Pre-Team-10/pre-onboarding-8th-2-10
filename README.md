# 이슈 트래킹 기능 구현하기 (세션 2주차 )

**목차**

- [1.프로젝트 소개](#프로젝트-소개)
- [2.팀원 소개](#팀원-소개)
- [3.구현 기능](#구현-기능)
- [4.프로젝트 폴더 구조](#프로젝트-폴더-구조)
- [5.Best Practice 선정 사례](#Best-Practice-선정-사례)

## 프로젝트 소개

개발 기간: 23.01.03 ~ 23.01.06

### 배포 링크

[배포 링크](https://pre-onboarding-8th-2-10.vercel.app/)

### 구동 방법

```tsx
npm install
npm start
```

### 사용한 라이브러리

<div>
  <img src="https://img.shields.io/badge/redux-4B32C3?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" />
	<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

## 팀원 소개

---

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/jdy8739"><img src="https://avatars.githubusercontent.com/u/83811826?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀장: 정도영 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/kimdowan123"><img src="https://avatars.githubusercontent.com/u/97826223?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 김도완</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/smash009"><img src="https://avatars.githubusercontent.com/u/46629029?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 남장현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/SkyRain1225"><img src="https://avatars.githubusercontent.com/u/97310823?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 오경준</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ddaisylee"><img src="https://avatars.githubusercontent.com/u/88873956?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 이은지</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jazzyfact"><img src="https://avatars.githubusercontent.com/u/51365114?v=4" width="100px;" alt=""/><br /><sub><b>FE 팀원: 임혜미</b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>

## 구현 기능

---

## 📝 구현 기능 목록

<br>

### **👋 1. 이슈 목록 보기**

    - [x] 각 이슈는 CRUD(생성, 표출, 수정, 삭제)가 적용되어야 한다.
    - [x] 이슈는 각각 고유번호, 제목, 내용, 마감일, 상태, 담당자가 존재한다.
    - [x] 이슈의 상태는 “할 일”, “진행 중”, 완료”가 존재하며 칸반보드와 같이 상태별로 분류된다.

<br>

- [x] 이슈 작성 폼 생성

  - [x] 이슈의 작성 폼에서는 제목, 내용, 마감일, 상태, 담당자를 입력할 수 있다.
  - [x] 제목은 <input type=”text”> 태그를 사용한다.
  - [x] 마감일은 <input type=”datetime-local”> 태그를 사용한다.
  - [x] 내용은 <textarea> 태그를 사용한다.

<br>

- [x] 담당자 목록 생성

  - [x] 사전에 임의의 담당자 목록을 구성한다.
  - [x] <input type=”text”> 태그를 이용해 담당자를 검색한다.
  - [x] 검색을 수행하면 검색 결괏값이 노출되며 그중 하나를 선택해서 담당자를 지정한다.

<br>

- [x] 각 이슈를 클릭 시 상세정보 창 표시

  - [x] 상세정보 창에는 “저장”버튼이 존재한다.
  - [x] 상세정보창에서는 이슈의 각 정보를 수정할 수 있으며, “저장”버튼을 클릭 시 수정한 내용이 반영된다.
  - [x] 이슈 상태별 목록은 기본적으로 고유번호 순서대로 오름차순 정렬한다.

<br>

- [ ] 이슈 목록에서 마우스의 Drag & Drop 이벤트 생성

  - [ ] 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다.
  - [ ] 변경된 순서는 고유번호순 정렬보다 우선해서 적용된다.

<br>

### **👋 구현 조건**

- [x] 데이터가 로딩 중인 경우 사용자가 이를 인식할 수 있도록 UX를 고려해야 하며, 로딩 중에는 액션이 발생하는 것을 방지해야 한다.
- [x] 각 기능들은 실수로 인한 중복 액션을 방지하기 위해 실행 후 0.5초의 딜레이를 적용한다.
- [x] 데이터는 새로고침해도 유지될 수 있도록 관리한다.
- [x] 에러 상황을 고려해서 처리할 시 가산점을 부여한다.

## 프로젝트 폴더 구조

---

```tsx
src
 ┣ app
 ┃ ┣ kanbanSlice.ts
 ┃ ┗ store.ts
 ┣ components
 ┃ ┣ issues
 ┃ ┃ ┣ IssueBoardComponent.tsx
 ┃ ┃ ┣ IssueComponent.tsx
 ┃ ┃ ┗ ManagerSearchComponent.tsx
 ┃ ┣ modal
 ┃ ┃ ┗ ModalComponent.tsx
 ┃ ┣ SaveIssuesComponent.tsx
 ┃ ┗ ShowIssuesComponent.tsx
 ┣ constants
 ┃ ┣ kanban.ts
 ┃ ┗ managers.ts
 ┣ pages
 ┃ ┗ IssuesPage.tsx
 ┣ styles
 ┃ ┗ styles.ts
 ┣ utils
 ┃ ┣ duplicationPrevent.ts
 ┃ ┣ storage.ts
 ┃ ┣ types.ts
 ┃ ┗ utils.ts
 ┣ App.tsx
 ┗ index.tsx
```

### app 폴더

1. Redux 상태관리 (CRUD 기능 reducers함수 생성)

### components 폴더

1. Issue page를 구성하는 컴포넌트와 Issue 생성&수정을 위한 모달창 컴포넌트로 분리하여 구성

### styles 폴더

1. 하나의 styles 폴더에 모든 컴포넌트 스타일을 작성

### constants 폴더

1. managers 파일에서 담당자의 이름을 상수로 저장
2. kanban 파일에서 이슈의 상태를 상수로 저장

### utils 폴더

1. type들을 interface화 해서 사용
2. localStorage에 작성, 수정, 삭제되는 함수들을 하나의 파일에 분리

## Best Practice 선정 사례

---

### 1. 이슈 CRUD

```ts
// 최상단 컴포넌트가 mount된 후, 실제 api를 호출하는 것처럼 useEffect 훅의 내부에 이슈 목록이 담긴 promise를
// 반환하는 함수를 호출하여 이 응답받은 이슈 목록들이 반영된 화면을 setState로 업데이트 할 수 있도록 구현했습니다.

useEffect(() => {
  (async () => {
    try {
      const fetchedIssueLists = await getIssuesInLocalStorage();
      if (fetchedIssueLists) dispatch(defineIssueLists(fetchedIssueLists));
    } catch (e) {
      const error = e as Error;
      toast.error(error.message);
    }
    setIsFetchingIssues(false);
  })();
}, [dispatch]);
```

```ts
// 이슈 목록을 불러오는 함수는 로컬스토리지에서 데이터를 가져와 비동기처리를 통해 전역상태에 담길 수 있도록 구성했습니다.
// 만약 로컬스토리지에 저장된 json string의 형식이 훼손되어 브라우저에서 에러가 발생할 경우를 가정하여
// try catch 구문의 사용 및 컴포넌트에서 toast 알람 함수를 호출하여 예외 상황을 처리하였습니다.

export const getIssuesInLocalStorage = () => {
  return new Promise<InterfaceIssueLists | null>(
    (fetchIssuesSuccess, fetchIssuesfail) => {
      let storagedIssues: InterfaceIssueLists | null;
      try {
        const stringifiedIssues = localStorage.getItem(KANBAN_ISSUES_KEY);
        if (stringifiedIssues) {
          storagedIssues = JSON.parse(stringifiedIssues) as InterfaceIssueLists;
          filterUnverifiedAndDuplicatedIssues(storagedIssues);
          saveUpdatedIssuesInLocalStorage(storagedIssues);
        } else storagedIssues = null;
        fetchIssuesSuccess(storagedIssues);
      } catch (e) {
        deleteIssuesInLocalStorage();
        fetchIssuesfail(new Error("Failed to fetch issues!"));
      }
    },
  );
};
```

```ts
// 악의적인 코드나 사용자로 인해 로컬스토리지에 저장된 json string이 훼손될 수 있기 떄문에,
// 로컬스토리지에서 이슈 목록을 불러온 후 아래의 함수로 모든 이슈 객체들이 올바른 속성과 속성값을 가지고있는지 확인하도록 했습니다.
// 이에 따라, 불완전하거나 훼손된 이슈 목록들은 삭제될 수 있도록 구현했습니다.

export const filterUnverifiedAndDuplicatedIssues = (
  issueLists: InterfaceIssueLists,
) => {
  Object.keys(issueLists).forEach((issueState) => {
    const idSet = new Set();
    issueLists[issueState as IssueStateEnum].forEach(
      (issue, index, issueArray) => {
        const issueId = issue.id;
        if (issueId && !idSet.has(issueId)) idSet.add(issueId);
        else {
          issueArray.splice(index, 1);
          return;
        }
        if (
          !("id" in issue) ||
          !("title" in issue) ||
          !("content" in issue) ||
          !("dueDate" in issue) ||
          !("manager" in issue) ||
          !Object.values(MANAGERS).includes(issue.manager) ||
          !Object.values(IssueStateEnum).includes(issue.state) ||
          typeof issue.id !== "number"
        ) {
          issueArray.splice(index, 1);
        }
      },
    );
  });
};
```

- [x] localStorage에 저장 된 데이터들을 불러옵니다.
- [x] try...catch 문 사용해 에러 상황을 처리하도록 했습니다.
- [x] 직관적인 함수명으로 함수의 역할을 명확하고 상세하게 알 수 있도록 했습니다.

### 2. 0.5초 딜레이 함수

```ts
export const getThrottlingEater = () => {
  let isClicked = false;
  return (callback: () => void) => {
    if (isClicked) return;
    isClicked = true;
    callback();
    setTimeout(() => {
      isClicked = false;
    }, 500);
  };
};
```

- [x] utils 파일로 분리하여 여러 개의 함수에 재사용성 높였습니다.
- [x] callback과 setTimeout을 사용해 0.5초 딜레이를 체크합니다.

### 3. 모달 팝업 컴포넌트

```ts
function ModalComponent({
  targetIssue,
  hideModal,
}: {
  targetIssue: InterfaceIssue | undefined;
  hideModal: (() => void) | undefined;
}) {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();
  return (
    <Modal onClick={stopPropagation}>
      <SaveIssuesComponent targetIssue={targetIssue} hideModal={hideModal} />
    </Modal>
  );
}
```

- [x] 한 개의 모달 컴포넌트로 이슈 생성 및 수정에 재사용했습니다.

### 예외 처리

- [x] 중복 액션 방지하기 위해 실행 후 0.5초 딜레이를 적용했습니다.
- [x] 이슈 작성 시 작성되지 않은 곳이 있다면 색상으로 예외 처리를 했습니다.
- [x] 사용자가 localStorage에 저장된 value 값을 임의로 변경할 경우 리스트들을 초기화하고 error toast를 보여줍니다.

