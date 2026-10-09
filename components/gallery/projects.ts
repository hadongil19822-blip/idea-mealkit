export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  linkLabel?: string;
  image?: string;
  screenshots?: string[];
  logo?: string;
  color: string;
  ink: string;
  statement: string;
  services: string[];
};

// Only the five projects selected by the user are exposed on the main site.
// URLs and descriptions are based on the user's repositories and public services.
// See public/projects/SOURCES.md for screenshot and logo provenance.
export const projects: Project[] = [
  { id: 'metalook', name: 'MetaLook', category: 'AI FASHION PLATFORM', image: '/projects/metalook.jpg', logo: '/metalook.png', color: '#c6c8bc', ink: '#15222c', statement: 'Beyond the frame.', url: 'https://metalook.store', description: '촬영의 한계를 넘어, 브랜드가 상상한 장면을 현실로. 가상 모델 생성부터 피팅과 룩북 제작까지 연결하는 AI 크리에이티브 플랫폼입니다.', services: ['Web platform', 'Generative AI', 'UI / UX'] },
  { id: 'semapage', name: '세마페이지', category: 'IMAGE TO HTML STUDIO', image: '/projects/semapage.jpg', color: '#dedfd5', ink: '#222222', statement: 'Beyond the pixels.', url: 'https://semapage.ai.kr/', description: '이미지 안에 머물던 상품 정보를, 검색과 AI가 읽을 수 있는 HTML로. 원본 상세페이지의 디자인을 살리면서 텍스트와 이미지를 편집 가능한 웹 콘텐츠로 재구성합니다.', services: ['Web studio', 'Image to HTML', 'AI workflow'] },
  { id: 'hangulwave', name: 'HangulWave', category: 'LANGUAGE & CULTURE', logo: '/HangulWave_icon_512.png', screenshots: ['/projects/hangul-home.webp', '/projects/hangul-choice.webp'], color: '#e9ecdc', ink: '#18243e', statement: '안녕, 새로운 세계.', url: 'https://apps.apple.com/us/app/hangulwaves/id6767775835', linkLabel: 'App Store에서 보기', description: '선택에 따라 이어지는 이야기로 한국어를 배웁니다. 일상과 K-컬처 속 대화, 듣기와 발음 연습, 학습 게임을 연결한 한국어 학습 앱입니다.', services: ['Mobile app', 'Edutech', 'Speech recognition'] },
  { id: 'cosmicspell', name: 'Cosmic Spell Survivors', category: 'MOBILE SURVIVAL GAME', logo: '/projects/cosmic-icon.png', screenshots: ['/projects/cosmic-missiles.webp', '/projects/cosmic-boss.webp'], color: '#171923', ink: '#f1f0ea', statement: 'Survive.\nGo beyond.', url: 'https://apps.apple.com/us/app/cosmic-spell-survivors/id6815463401', linkLabel: 'App Store에서 보기', description: '우주를 무대로 펼쳐지는 로그라이트 슈팅 게임, 코스믹 스펠 서바이버. 기체와 무기의 조합, 보스 전투와 스토리 캠페인으로 매번 다른 전투를 경험합니다.', services: ['iOS game', 'Roguelite shooter', 'Game experience'] },
  { id: 'brandeye', name: 'BrandEye', category: 'AI SEARCH VISIBILITY', image: '/projects/brandeye.jpg', color: '#e1e1d7', ink: '#222222', statement: 'Be seen. Be understood.', url: 'https://brandeye.ai.kr/', description: 'AI의 답변 속에서 우리 브랜드는 어떻게 발견될까요? 브랜드의 AI 검색 가시성과 경쟁사, 응답 근거를 살펴보고 콘텐츠의 다음 방향을 찾는 진단 서비스입니다.', services: ['GEO platform', 'AI analytics', 'Brand intelligence'] },
];
