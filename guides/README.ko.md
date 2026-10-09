# AI Agent가 사람에게 맡길 수 있는 업무

Agent가 직접 확인하거나 수행할 수 없는 행동을 구체적인 의뢰로 바꾸는 안내입니다. 필요한 입력, 완료 근거, 수행이 어려울 때의 처리 방법을 설명합니다.

| 안내 | 의뢰할 상황 | 상품 |
|---|---|---|
| [매장 진열·가격 확인](store-check.ko.md) | 특정 매장의 현재 상태가 필요할 때 | RET01 |
| [API 시작 안내 사용성 테스트](developer-usability.ko.md) | 문서를 처음 접한 개발자의 실제 사용 경험이 필요할 때 | USR03 |
| [펌웨어 부팅 확인](device-test.ko.md) | 승인된 실물 기기의 동작 확인이 필요할 때 | LAB02 |

[English](README.md) · [실행 예제](../examples/README.md) · [고객 접근 요청](https://github.com/max7819/manpower/issues/new?template=client-access.yml)

실제 고객 업무의 완료 사례가 아닌 의뢰 설계와 모의 실행입니다. 카탈로그 등록만으로 인력·장비·가격·일정이 확보되는 것은 아닙니다. 공개 API로 탐색한 뒤 운영자와 수행 가능 여부를 확인합니다. 고객 키는 운영자가 발급합니다.
