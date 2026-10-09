# Idea Mealkit

아이디어밀키트의 웹·앱·AI 포트폴리오 사이트입니다.

## Run locally

Node.js 22 이상을 권장합니다.

```sh
npm ci
npm run dev
```

개발 서버: http://localhost:3000

```sh
npm run typecheck
npm run build
npm run preview
```

API 키나 별도 환경 변수 없이 실행할 수 있습니다.

## Routes and content

- `/`: IDEA MEALKIT 흑백 중심 에디토리얼 구성, 다섯 프로젝트의 스크롤 장면 전환, 스튜디오 소개와 독립된 연락 섹션
- `/proposal`: 기존 파트너십 제안서 및 이미지 저장
- `/projects/flutterlog`: 기존 FlutterLog 상세 소개
- `components/gallery/projects.ts`: 프로젝트 설명, 링크, 커버 설정
- `components/gallery/reference-site.css`: 반응형 포스터 레이아웃
- `components/gallery/mealkit-identity.css`: 흑백 중심 색상·브랜딩·비대칭 구성
- `components/gallery/reference-motion.ts`: GSAP 스크롤 타임라인
- `components/gallery/ReferenceScenes.tsx`: 직접 작성한 포스터 콘텐츠와 장면
- `public/projects/SOURCES.md`: 미리보기 이미지 출처

GSAP와 ScrollTrigger로 포스터 확대와 교차 이동, 종이 스트립, 비대칭 둥근 카드·모서리 절삭 마스크 전환, 한글 글자 조립과 비스듬한 포스터 축소를 연출합니다. Lenis는 하나의 스크롤 엔진으로 GSAP ticker에 연결합니다. 모션 감소 설정에서는 고정 스크롤을 끄고 다섯 프로젝트를 정적으로 제공합니다. 이번 2D 디자인에는 Three.js를 사용하지 않습니다.

제안서와 FlutterLog 상세는 필요한 시점에 별도 로드됩니다. Tailwind는 로컬 빌드에 포함됩니다. 프로젝트 커버는 사용자의 기존 이미지와 서비스 이름으로 만든 타이포그래피 포스터입니다.

앱 화면은 전체 비율을 유지하는 프레임으로 표시하며, 포스터 자체를 움직이고 앱 이미지를 확대해 자르지 않습니다. 대형 색면은 중성색으로 통일하고 작은 배지·로고 점·게임 이미지에만 절제된 색상을 남깁니다. 참조 사이트의 에셋을 사용하지 않으며, 문구·배치·도형과 스크롤 전환을 별도로 작성했습니다. 이는 법적 비침해 보증을 의미하지 않습니다.

연락 섹션(`#contact`)은 포스터 축소 애니메이션 다음에 실제 크기로 표시됩니다. 카카오 채널의 공개 대화 버튼에서 확인한 1:1 채팅 주소와 `mailto:hadongil19822@gmail.com`을 제공합니다. 모바일에서도 이메일 주소를 숨기지 않습니다. IDEA / MEALKIT 워드마크의 장식 점은 제거했습니다.

## Motion expansion

- 포스터의 종이 층과 마우스 위치에 반응하는 미세한 입체 회전
- MetaLook 화보의 3개 면이 아코디언처럼 펼쳐지는 전환
- Sema Page 서비스 이미지 8조각 조립과 HTML 출력 마스크
- BrandEye 스크롤 스캔 및 초점 프레임
- Cosmic 우주 공간의 원근 프레임 통과
- 문의 내용의 순차 등장과 버튼 화살표 반응

포인터 효과는 정밀 포인터와 모션 허용 환경에서만 적용하며, 마우스 이탈·클릭·창 비활성화 시 회전을 초기화합니다. 이벤트 리스너와 트윈은 정리됩니다. 자동 반복 효과는 없습니다. 앱 스크린샷의 전체 비율은 유지합니다.
