# Praxis Workforce — 현실 세계의 일을 할 사람 찾기

**Claude·ChatGPT나 직접 만든 AI Agent에서 사람을 찾습니다.**

사람들이 할 수 있는 일, 사는 곳, 가능한 시간을 등록합니다. AI Agent는 MCP·REST로 이 익명 프로필을 검색하고, 맞는 사람을 찾으면 유료 대화 요청을 보냅니다. 업무는 플랫폼 대화창에서 협의합니다. 실명·이메일·전화번호는 Agent에게 넘기지 않습니다.

[영문 안내](README.md) · [서비스](https://jobs.made-in.ai/ko) · [Agent 연결 안내](https://jobs.made-in.ai/ko/agents) · [개인정보 처리방침](https://jobs.made-in.ai/ko/privacy)

## 연결

| 사용하는 곳 | 연결 주소 | 로그인 |
|---|---|---|
| **Claude·ChatGPT** (커넥터) | `https://jobs.made-in.ai/mcp` | OAuth — Praxis 계정으로 로그인해 승인. API 키 복사 필요 없음 |
| **MCP 클라이언트** | `https://jobs.made-in.ai/api/mcp` | 검색은 없음. 대화는 `Authorization: Bearer <Agent 키>` |
| **REST** | `https://jobs.made-in.ai/api/v1` | 위와 같음 |

Claude에서는 설정 → 커넥터 → *사용자 지정 커넥터 추가*에 `https://jobs.made-in.ai/mcp`를 넣으세요.

스스로 움직이는 Agent에게는 이 문장을 주면 됩니다: *"Read https://jobs.made-in.ai/llms.txt and follow the steps for AI agents."*

## Agent가 할 수 있는 일

1. `get_capabilities` — 서비스 내용·요금·한도·금지 사항. 가장 먼저 호출합니다.
2. `list_skills`, `search_workers`, `get_worker_profile` — 기술·언어·국가·도시·원격/현장·예산·요일별 시간으로 익명 프로필 검색. 키가 필요 없습니다. 검색은 예약이 아닙니다.
3. `create_conversation_checkout` — 대화 요청을 받는 사람에게 대화 요청 (크레딧 $5).
4. `list_conversations`, `get_messages`, `send_message`, `respond_conversation` — 상대가 수락하면 플랫폼 대화창에서 대화. 대화창의 연락처는 자동 차단됩니다.
5. `get_credits`, `buy_credits`, `get_credit_purchase`, `refund_credits` — 선불 크레딧 관리.

## Agent 계정과 크레딧

- **Claude·ChatGPT 사용자**는 커넥터를 승인할 때 계정이 생깁니다. 로그인(또는 가입) 후 이메일을 한 번 확인합니다.
- **스스로 움직이는 Agent**는 `POST /api/v1/agent/sign-up`으로 직접 가입하고, 책임자 이메일로 간 6자리 코드로 확인합니다.
- 대화 요청은 **선불 크레딧 $5**입니다. 상대가 거절하거나 3일 안에 답하지 않으면 크레딧으로 돌려드립니다.
- 크레딧은 사람이 삽니다. Agent가 결제 링크(PayPal, 국내는 토스페이먼츠)를 만들고 책임자가 승인합니다. 쓰지 않은 크레딧은 180일 안에 환불할 수 있습니다.
- 대화창 안의 계약·업무 보수 결제는 아직 제공하지 않습니다.
- 이메일을 확인한 사람이 그 Agent가 한 일에 책임을 집니다. Praxis는 요청을 하나하나 검토하지 않습니다.

## 이 저장소

공개 통합 문서와 예제만 들어 있습니다. 운영 앱 소스·설정·데이터는 포함하지 않습니다. [`examples/`](examples/README.md)는 예전 *운영자 검토형 의뢰* 흐름용입니다. 오프라인 시연과 `--explore`(읽기 전용 탐색)는 그대로 실행되지만, 새 의뢰 접수(`submit_task`)는 닫혀 `410 INQUIRIES_CLOSED`를 돌려줍니다.

공식 MCP Registry에 `io.github.max7819/manpower`로 등록되어 있습니다 ([게시 기록](registry/README.md)).

문의: physical_agency@agentmail.to · 운영: 스탠다드 메이커

이 저장소의 예제와 문서는 [MIT 라이선스](LICENSE)로 공개합니다. 운영 중인 Praxis 서비스와 그 소스 코드·데이터는 이 라이선스에 포함되지 않습니다.

