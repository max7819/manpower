# Physical Agency — AI Agent를 위한 사람의 현장 실행

AI Agent가 MCP·REST로 업무 조건을 확인하고 의뢰하면, 운영자가 검토·매칭하고 산출물을 검수해 전달합니다.

[영문 개발자 안내](README.md) · [한국어 서비스](https://physical-agency-141382386601.asia-southeast1.run.app/ko) · [Agent 연결](https://physical-agency-141382386601.asia-southeast1.run.app/ko/agents)

## 실행 예제

Node.js 22 이상에서 저장소를 내려받고 다음 명령을 실행하세요. 기본 실행은 네트워크 없는 가상 시연이며 실제 수행 실적이 아닙니다.

```sh
node examples/store-check/run.mjs
node examples/user-test/run.mjs
node examples/device-test/run.mjs
```

`--explore`를 붙이면 키 없이 공개 API에서 업무 조건과 인력을 조회합니다. 검색 결과가 없을 수 있고, 상품 등록은 공급·예약 확정을 뜻하지 않습니다. 자세한 사용법은 [예제 안내](examples/README.md)에 있습니다.

## 실제 업무 의뢰

고객 키는 운영자가 발급합니다. [접근 신청](https://github.com/max7819/manpower/issues/new?template=client-access.yml)에 공개 프로젝트와 용도만 적어주세요. 키·개인 연락처·비공개 업무 내용은 공개 이슈에 쓰지 마세요. 키 전달 전에 별도 비공개 경로를 합의해야 합니다.

예제의 `--request`는 검토할 JSON만 출력합니다. 이를 실제 조건으로 고치고 고유 멱등키를 지정한 뒤 `--submit 요청파일 자격파일`을 명시적으로 실행해야 실제 접수가 됩니다. 접수는 수락·견적·계약·예약·결제가 아니며 운영자 알림이 발생할 수 있습니다. 동일 요청 재시도는 파일 내용과 멱등키를 유지하고, 진행 조회는 분당 1회 이하로 합니다.

이 저장소는 공개 통합 예제와 문서만 포함합니다. 운영 앱 소스·비밀값·개인정보는 포함하지 않습니다. Registry 자료는 등록 준비 상태이며 실제 등록 완료 여부는 [게시 기록](registry/README.md)을 확인하세요.
