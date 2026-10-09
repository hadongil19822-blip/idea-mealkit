# IDEA MEALKIT

아이디어를 웹·앱·AI 서비스로 만드는 스튜디오의 포트폴리오입니다.

## Run locally

Node.js 22 이상, 별도 API 키 없이 실행합니다.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

개발 서버는 http://localhost:3000 입니다. `/proposal`, `/projects/flutterlog` 기존 경로는 별도 로드합니다.

## Continuous editorial canvas

- `components/gallery/PortfolioCanvas.tsx`: 커버, 다섯 프로젝트, 스튜디오 메시지
- `components/gallery/portfolio-canvas.css`: 독립된 데스크톱·모바일 구성
- `components/gallery/canvas-motion.ts`: 첫 진입과 스크롤 연출
- `components/gallery/Showroom.tsx`: Lenis 수명 관리, 앵커 이동, 접근성 상세 대화상자
- `components/gallery/StudioChrome.tsx`: IDEA / MEALKIT 워드마크, 카카오·이메일 연락 섹션
- `components/gallery/projects.ts`: 다섯 서비스의 실제 링크와 설명
- `public/projects/SOURCES.md`, `public/projects/editorial/`: 서비스 이미지 출처와 기존 생성 화보의 프롬프트

상단 IDEA 네 글자가 조립되고, 서로 다른 방향에서 화보와 서비스 인쇄물이 자리 잡습니다. MetaLook은 접힌 3면 화보가 화면 폭으로 펼쳐지고, 세마페이지는 이미지와 HTML 인쇄물이 교차합니다. HangulWave는 대형 한글과 앱 화면, Cosmic Spell Survivors는 게임 화면, BrandEye는 초점 프레임으로 이어집니다. 하단 MEALKIT와 연락 섹션을 유지합니다.

이전 전체 화면 고정 슬라이드와 빈 커튼 전환을 제거했습니다. 일반 문서 흐름에서 MetaLook만 CSS sticky로 짧게 머물며, GSAP ScrollTrigger pin은 사용하지 않습니다. 데스크톱은 Lenis 하나를 GSAP ticker에 연결하고, 모바일은 네이티브 스크롤을 사용합니다. 자동 반복 효과, 배경 블러, WebGL은 없습니다. 스크롤 타임라인은 `scrub: true`, 이미지 프레임은 고정 비율입니다. 새로운 포인터·이동 키 입력은 남아 있는 관성을 해제합니다.

모션 감소 환경에서는 Lenis와 모든 GSAP 동작을 생략하고 완성된 정적 구성을 표시합니다. 미디어는 기존 생성 화보와 실제 서비스 화면을 사용하며, 앱 스크린샷은 `object-fit: contain`으로 전체를 표시합니다. 참고 사이트의 코드·이미지·문구는 사용하지 않았습니다.

카카오: https://pf.kakao.com/_mxbzgn/chat

이메일: hadongil19822@gmail.com

## Verification

타입 검사·프로덕션 빌드, 데스크톱/390px 모바일 구성과 앵커, 상세 대화상자 열기·Escape·포커스 복귀, 실제 앱 화면 비율, 가로 넘침과 콘솔 오류를 확인합니다. 모션 감소 분기는 코드로 검토하며 OS 설정은 변경하지 않습니다.
