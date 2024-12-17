/* TODO 6.1 : 현재 무료로 플레이 가능한 챔피언들의 ID를 가져옵니다. 
- **구현 방법**:
    1. **환경 변수에서 API 키 가져오기**
        - `process.env.RIOT_API_KEY`를 사용하여 API 키를 가져옵니다.
        - API 키가 없는 경우 에러를 발생시킵니다.
        - 힌트: 환경 변수를 사용할 때는 process.env를 통해 접근합니다. 
        TypeScript에서는 process.env의 타입이 string | undefined이므로, 
        사용 시 타입 체크를 하거나 타입 단언을 해야 합니다.
    2. **Riot Games API 호출**
        - 엔드포인트: `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations`
        - 요청 헤더에 `X-Riot-Token`을 설정하여 API 키를 포함시킵니다.
    3. **데이터 변환 및 응답**
        - 응답 데이터를 `ChampionRotation` 타입으로 변환합니다.
        - `NextResponse.json()`을 사용하여 JSON 형태로 응답합니다.
    
    > 힌트:
    > 
    > - 요청 시 `headers` 옵션을 사용하여 인증 헤더를 설정합니다.
    > - 에러 발생 시 상태 코드와 메시지를 정확히 반환합니다.

*/