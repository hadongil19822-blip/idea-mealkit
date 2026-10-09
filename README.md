# IDEA MEALKIT

다섯 개의 웹·앱·AI 서비스를 보여주는 모션 그래픽 포트폴리오입니다.

## Run locally

Node.js 22 이상, 별도 API 키 없이 실행합니다.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

개발 서버: http://localhost:3000

기존 `/proposal`, `/projects/flutterlog` 경로는 별도 로드합니다.

## Motion atlas

- `components/gallery/MotionAtlas.tsx`: 브랜드 글자와 다섯 프로젝트의 그래픽 장면
- `components/gallery/atlas-motion.ts`: 14초로 정규화한 스크롤 타임라인, 장면별 재생 루프와 정지 관리
- `components/gallery/motion-atlas.css`: CSS sticky 무대, 반응형 그래픽·실제 앱 프레임
- `components/gallery/showroom-shell.css`: 메뉴·연락처·푸터·상세 대화상자
- `components/gallery/Showroom.tsx`: Lenis 수명 관리, 장면 앵커 매핑, 상세 창과 포커스 복귀
- `components/gallery/StudioChrome.tsx`: IDEA / MEALKIT 워드마크, 연락 섹션
- `components/gallery/projects.ts`: 실제 프로젝트 설명과 링크

브랜드 글자 네 개가 회전·재배열되고 가로 워드마크와 사각 구성을 오갑니다. 스크롤하면 이 구성이 확대되어 패션 화보의 창을 엽니다. 이어서 3면 화보 분리 → 이미지 조각 조립 → HTML 띠 교차 → 한글 글자 분해와 앱 화면 등장 → 게임 프레임 통과 → 브랜드 초점 창 확대 → 문의로 연결됩니다.

기존 생성 화보와 실제 앱·서비스 화면을 사용합니다. 출처는 `public/projects/SOURCES.md` 및 `public/projects/editorial/`에 기록되어 있습니다. 참고 사이트의 이미지·코드·문구는 사용하지 않았습니다.

GSAP / ScrollTrigger와 데스크톱 Lenis 하나를 사용합니다. 전체 쇼케이스는 CSS sticky로 유지하므로 ScrollTrigger pin spacer를 만들지 않습니다. 모바일은 네이티브 스크롤이며 같은 타임라인을 세로 화면용 레이아웃으로 표시합니다. Three.js/WebGL은 사용하지 않습니다.

자동 재생은 현재 장면에만 적용합니다. 다른 장면·화면 밖·탭 비활성화·사용자의 모션 정지 선택에서는 루프를 멈춥니다. 큰 이미지에는 blur를 쓰지 않으며 실제 앱 화면은 contain으로 전부 표시합니다. 모션 감소 환경에서는 모든 장면을 정적인 세로 문서로 제공합니다. OS 설정은 브라우저 검수에서 변경하지 않습니다.

하단 장면 메뉴와 상단 프로젝트 링크는 완성된 장면의 시간 위치로 이동합니다. 문의 섹션에는 카카오 https://pf.kakao.com/_mxbzgn/chat 과 이메일 hadongil19822@gmail.com 을 표시합니다.

## Verification

타입 검사, 프로덕션 빌드, 데스크톱 장면 앵커, 모바일 390px 화면, 가로 넘침·앱 비율·44px 조작 영역, 상세 창 열기·Escape·포커스 복귀, 모션 정지, 새로고침 직접 링크 복원을 점검합니다. 실제 프레임률 벤치마크 수치는 측정하지 않았습니다.
