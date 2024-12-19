
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
