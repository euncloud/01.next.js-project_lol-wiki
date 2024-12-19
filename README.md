
# 💡 LOL Wiki 

Riot API를 활용한 리그 오브 레전드 정보 앱
- riot api를 활용하여 챔피언 목록, 챔피언 상세 정보 등 다양한 데이터를 보여준다. 
- CSR, SSG, SSR, ISR 네가지 랜더링 방식을 이해하고 데이터 종류에 따라 다른 랜더링 방식으로 구현한다.
<br>  

## 배포 링크

- [🎮 [LOL Wiki] 사이트 둘러보기](https://lol-wiki-eta.vercel.app/)

<br>  

## 주요 기능
 **1. 챔피언 페이지**
- ISR 랜더링 방식(86400초)
- lol 최신 버전에 따른 전체 챔피언 목록

**2. 아이템 페이지**
- SSG 랜더링 방식
- 최신 버전에 따른 전체 아이템 목록 

**3. 로테이션 챔피언 페이지**
- CSR 랜더링 방식
- 실시간 로테이션 챔피언 목록

**2. 챔피언 상세 페이지**
- 동적 라우팅 방식
- 클릭한 챔피언의 상세 정보 페이지

## 파일 구조
```📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜imageUtils.ts
 ┃ ┃ ┣ 📜riotApi.ts
 ┃ ┃ ┗ 📜serverApi.ts
 ┃ ┣ 📜error.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┣ 📜page.tsx
 ┃ ┗ 📜providers.tsx
 ┣ 📂components
 ┃ ┗ 📜Card.tsx
 ┗ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜ChampionRotation.ts
 ┃ ┗ 📜Item.ts
```

<br>

## 🛠 Technologies
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=tailwindcss&logoColor=black">      

<br>
<br>

## 프로젝트 목표 및 결과
- Tailwind CSS 설치 및 적용
- 로그인 유지 기능 구현(localStorage)
- axios를 이용한 API 호출 및 axios Instance 사용
- Tanstack Query 사용

<br>

## 프로젝트 회고
서버별로 api 통신 방법이 다름을 이해하고 사용하는데 어려움이 있었다. 여러 라이브러리와 기능에 익숙치 않은 상태로 개발에 들어가서 코드가 제대로 정리되지 못했고 자잘한 버그가 많았으며, 수정하지 못했다.(등록한 테스트를 삭제하고 다른 페이지로 랜더링 하는 부분) json-server에서 데이터 수정은 어떤 식으로 하는지 알아보고 적용할 시간이 없어 아쉬웠다. 짧은 시간 내에 해결하기 위해 노력했고, 학습의 연장선이었다는 점에 긍정적인 의미를 둔다.
<br><br>


<br>

## 🛠 Technologies
<img src="https://img.shields.io/badge/nextdotjs-000000?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=tailwindcss&logoColor=black">      

<br>
<br>

## 프로젝트 목표 및 결과
- Tyscript의 타입을 적절하게 선언하고 활용한다
- Next.js의 4가지 랜더링 방식의 특징을 이해하고 api 요청 방식과 작동 원리를 이해한다
- Next.js의 다양한 성능 최적화를 프로젝트에 적용해 본다

<br>

## 프로젝트 회고
Next.js에서 제공하는 다양한 랜더링 방식의 장점을 이해하고 활용해 볼 수 있었다. 클라이언트에서 api를 직접 요청할 경우 CORS(Cross-Origin Resource Sharing) 에러가 발생할 수 있기 때문에 서버-서버로 통신이 필요하다. 
<br><br>
