import React from 'react';
import { projects, type Project } from './projects';

export function MealkitMark({ className = '', word = 'MEALKIT' }: { className?: string; word?: 'IDEA' | 'MEALKIT' }) {
  const idea = word === 'IDEA';
  return <svg className={className} viewBox={`0 0 ${idea ? 530 : 1000} 200`} preserveAspectRatio="none" fill="currentColor" role="img" aria-label={word}>
    {idea ? <g>
      <path d="M0 0H50V200H0Z" />
      <path fillRule="evenodd" d="M65 0H125C180 0 215 40 215 100S180 200 125 200H65ZM112 45V155H125C154 155 168 136 168 100S154 45 125 45Z" />
      <path d="M230 0H360V45H275V78H345V122H275V155H360V200H230Z" />
      <path fillRule="evenodd" d="M410 0H490L530 200H483L474 154H426L417 200H370ZM450 45L436 109H464Z" />
    </g> : <g>
    <path d="M0 200V0H45L80 40L115 0H160V200H114V67L80 101L46 67V200Z" />
    <path d="M170 0H300V45H215V78H285V122H215V155H300V200H170Z" />
    <path fillRule="evenodd" d="M350 0H430L470 200H423L414 154H366L357 200H310ZM390 45L376 109H404Z" />
    <path d="M480 0H530V155H600V200H480Z" />
    <path d="M610 0H660V76L705 0H760L692 100L760 200H704L660 124V200H610Z" />
    <path d="M770 0H845V200H770Z" />
    <path d="M855 0H1000V50H952V200H903V50H855Z" />
    </g>}
  </svg>;
}

export function InfoBar({ notes, setNotes, floating = false }: { notes: boolean; setNotes: (value: boolean) => void; floating?: boolean }) {
  return <div className={`reference-info${floating ? ' floating-info' : ''}`}>
    <span><a href="#top">IDEA MEALKIT</a> — Web, App & AI Studio</span>
    <span className="info-middle">다섯 가지 아이디어, 각자의 가능성.<br /><a href="#projects">Explore the kit / 01—05</a></span>
    <span className="info-actions"><label><input type="checkbox" checked={notes} onChange={event => setNotes(event.target.checked)} />제작 노트</label><a href="#contact">프로젝트 문의 ↗</a></span>
  </div>;
}

function MiniFacts({ type }: { type: 'hangul' | 'metalook' | 'sema' }) {
  const facts = type === 'hangul' ? [['01', 'Experience', 'Story choices', 'Daily conversations', 'K-culture'], ['02', 'Practice', 'Listen & speak', 'Pronunciation', 'Learning games'], ['03', 'Language', 'Korean', 'Through stories']] : type === 'metalook' ? [['01', 'Create', 'Virtual models', 'AI fitting', 'Lookbooks'], ['02', 'Platform', 'Fashion brands', 'Creative workflow', 'Generative AI']] : [['01', 'Input', 'Product images', 'Original design'], ['02', 'Output', 'Readable HTML', 'Editable content', 'Search & AI']];
  return <div className="mini-facts">{facts.map(([number, title, ...lines]) => <div key={title}><span>{number}</span><div><strong>{title}</strong>{lines.map(line => <span key={line}>{line}</span>)}</div></div>)}</div>;
}

export function OpeningComposition({ open }: { open: (project: Project) => void }) {
  return <div className="opening-composition">
    <button className="opening-portrait paper-poster" data-depth onClick={() => open(projects[2])} aria-label="한글웨이브 소개 열기"><div className="opening-app-preview"><img src="/projects/hangul-home.webp" alt="한글웨이브 학습 화면" /></div><div className="portrait-copy"><div className="tiny-heading"><span>03<br />(IDEA MEALKIT)</span><span>Hangul<br />Wave</span></div><MiniFacts type="hangul" /></div></button>
    <div className="opening-badge" aria-hidden="true"><span>IDEAS<br /><b>05</b></span></div>
    <button className="opening-tile" onClick={() => open(projects[4])} aria-label="브랜드아이 소개 열기"><img src="/projects/brandeye.jpg" alt="BrandEye AI 검색 진단" /></button>
    <button className="opening-wide paper-poster" data-depth onClick={() => open(projects[0])} aria-label="메타룩 소개 열기"><div className="poster-photo editorial-photo"><img src="/projects/editorial/fashion.jpg" alt="건축적인 실루엣의 패션 콘셉트 화보" /></div><div className="wide-facts"><div className="tiny-heading"><span>01<br />(IDEA MEALKIT)</span><span>MetaLook</span></div><MiniFacts type="metalook" /></div><div className="wide-type" aria-hidden="true"><small>01 / THE FASHION KIT</small><span>Imagine.<br /><i>Wear it.</i></span><small>METALOOK / AI FASHION</small></div></button>
    <button className="opening-mini opening-mini-left paper-poster" onClick={() => open(projects[1])} aria-label="세마페이지 소개 열기"><span>02 / Sema Page</span><strong>IMAGE<br />TO HTML</strong></button>
    <button className="opening-mini opening-mini-right paper-poster" onClick={() => open(projects[4])} aria-label="브랜드아이 서비스 소개 열기"><img src="/projects/brandeye.jpg" alt="" /><span>05<br />BrandEye</span></button>
    <button className="opening-game paper-poster" data-depth onClick={() => open(projects[3])} aria-label="코스믹 스펠 서바이버 소개 열기"><span>04<br />(IDEA MEALKIT)<br />Cosmic Spell<br />Survivors</span><img src="/projects/cosmic-boss.webp" alt="코스믹 스펠 서바이버 전투 화면" /><strong>PLAY<br />BEYOND.</strong></button>
    <div className="opening-circle paper-poster" aria-hidden="true"><span className="circle-top">BRAND / VISIBILITY / INTELLIGENCE</span><div>AI sees.<br /><i>Be seen.</i></div><span className="circle-bottom">05 / BrandEye</span></div>
    <span className="reference-note opening-note">아이디어는 하나의 형태에 머물지 않습니다.</span>
  </div>;
}

export function ProjectScenes({ open }: { open: (project: Project) => void }) {
  return <section className="project-sequence" id="projects" tabIndex={-1} aria-labelledby="projects-title">
    <h2 id="projects-title" className="sr-only">아이디어밀키트의 다섯 가지 프로젝트</h2>
    <div className="sequence-background" aria-hidden="true"><img src="/projects/editorial/sculpture.jpg" alt="" /></div>
    <div className="sequence-guides" aria-hidden="true"><span /><span /></div>
    <article className="project-scene scene-hangul">
      <div className="scene-side-label">03 / (HangulWave)<br />Language through stories.</div>
      <div className="vertical-specimen paper-poster"><div className="vertical-meta"><span>03<br />(IDEA MEALKIT)</span><h3>HangulWave</h3></div><div className="vertical-columns"><div className="vertical-copy"><MiniFacts type="hangul" /><p>안녕,<br />새로운<br />이야기.</p></div><img src="/projects/hangul-choice.webp" alt="한글웨이브 이야기 선택 화면" /></div><button onClick={() => open(projects[2])}>이야기로 배우는 한국어 ↗</button></div>
      <div className="scene-huge-type" aria-hidden="true">{["안녕,", "새로운", "세계."].map((line, i) => <span className="type-line" key={line}><span>{i === 2 ? <i>{line}</i> : line}</span></span>)}</div>
      <span className="reference-note">선택하고, 듣고, 이야기하며 배우는 한국어.</span>
    </article>
    <article className="project-scene scene-metalook">
      <div className="scene-side-label">01 / (MetaLook)<br />Beyond the frame.</div>
      <div className="horizontal-specimen paper-poster"><div className="poster-photo"><img src="/projects/metalook.jpg" alt="MetaLook 가상 모델" /></div><div className="horizontal-copy"><div className="tiny-heading"><span>01<br />(IDEA MEALKIT)</span><h3>MetaLook</h3></div><p>Beyond<br /><i>the frame.</i></p><MiniFacts type="metalook" /><button onClick={() => open(projects[0])}>AI 패션 플랫폼 ↗</button></div><div className="horizontal-image"><img src="/projects/editorial/textile.jpg" alt="실크 주름과 금속 커프의 패션 소재 콘셉트 이미지" /><span>VIRTUAL<br />BECOMES<br />REAL.</span></div></div>
      <div className="scene-running-type" aria-hidden="true">VIRTUAL / REAL / VIRTUAL / REAL /</div>
    </article>
    <article className="project-scene scene-sema">
      <div className="scene-side-label">02 / (Sema Page)<br />Beyond the pixels.</div>
      <div className="sema-strips"><div className="sema-strip paper-poster"><span>02 / Input</span><strong>&lt;image&gt;</strong><div className="sema-image-fragments" role="img" aria-label="세마페이지 원본 디자인">{Array.from({ length: 8 }, (_, i) => <span key={i} aria-hidden="true" style={{ backgroundPosition: `${i % 4 * 100 / 3}% ${Math.floor(i / 4) * 100}%` }} />)}</div></div><div className="sema-strip paper-poster"><span>02 / Transform</span><strong>이미지에서,<br /><i>웹으로.</i></strong><MiniFacts type="sema" /></div><div className="sema-strip paper-poster"><span>02 / Output</span><strong>&lt;html&gt;</strong><button onClick={() => open(projects[1])}>검색과 AI가 읽는 상세페이지 ↗</button></div></div>
    </article>
    <article className="project-scene scene-brand">
      <div className="scene-side-label">05 / (BrandEye)<br />Be seen. Be understood.</div>
      <div className="brand-disc"><div className="brand-focus-frame" aria-hidden="true" /><div className="brand-scan-beam" aria-hidden="true" /><div className="brand-disc-ring" aria-hidden="true">{['AI SEARCH', 'BRAND VISIBILITY', 'INTELLIGENCE', 'BRANDEYE'].map((text, i) => <span key={text} style={{ '--step': i } as React.CSSProperties}>{text}</span>)}</div><div className="brand-disc-content"><span>05 / BrandEye</span><h3 aria-label="Be seen. Be understood."><span className="type-line" aria-hidden="true"><span>Be seen.</span></span><span className="type-line" aria-hidden="true"><span><i>Be understood.</i></span></span></h3><p>AI의 답변 속에서,<br />우리 브랜드는 어떻게 발견될까요?</p><button onClick={() => open(projects[4])}>브랜드아이 살펴보기 ↗</button></div></div>
      <div className="brand-underlay" aria-hidden="true">BE DISCOVERED / BE REMEMBERED /</div>
    </article>
    <article className="project-scene scene-cosmic">
      <div className="cosmic-gates" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <span key={i} />)}</div>
      <div className="scene-side-label">04 / (Cosmic Spell Survivors)<br />Survive. Go beyond.</div>
      <div className="cosmic-triangle"><div className="triangle-heading"><span>04</span><h3>COSMIC SPELL<br />SURVIVORS</h3><span>✳</span></div><div className="triangle-words">CAST.<br />DODGE.<br /><i>SURVIVE.</i></div><p>기체와 무기를 조합해<br />우주 끝까지 살아남기.</p><button onClick={() => open(projects[3])}>App Store ↗</button></div>
      <img className="cosmic-side cosmic-side-left" src="/projects/cosmic-missiles.webp" alt="코스믹 스펠 서바이버 무기 전투" /><img className="cosmic-side cosmic-side-right" src="/projects/cosmic-boss.webp" alt="코스믹 스펠 서바이버 보스 전투" />
      <div className="cosmic-ribbon" aria-hidden="true">PLAY / BEYOND / PLAY / BEYOND / PLAY / BEYOND /</div>
    </article>
    <div className="sequence-index" aria-hidden="true"><span>(Selected projects)</span><div>{['03 / LANGUAGE', '01 / FASHION', '02 / HTML', '05 / AI SEARCH', '04 / PLAY'].map(text => <span key={text}>{text}</span>)}</div><span>SCROLL ↓</span></div>
  </section>;
}

export function ClosingScene() {
  const message = ['생각을', '현실로.'];
  return <section className="closing-sequence" id="studio" tabIndex={-1} aria-labelledby="closing-title">
    <div className="closing-grid" aria-hidden="true" />
    <div className="closing-poster paper-poster"><h2 id="closing-title" aria-label="생각을 현실로.">{message.map(word => <span className="closing-word" aria-hidden="true" key={word}>{[...word].map((letter, i) => <span className="closing-letter" key={i}>{letter}</span>)}</span>)}</h2><div className="closing-poster-content"><div className="poster-photo editorial-photo"><img src="/projects/editorial/sculpture.jpg" alt="아이디어가 형태가 되는 모습을 표현한 금속 리본 조형물" /></div><div><p>상상을 화면으로.<br />화면을 서비스로.</p><span>기획 · 디자인 · 개발 · 출시</span><a href="https://pf.kakao.com/_mxbzgn/chat" target="_blank" rel="noopener noreferrer">카카오톡으로 문의하기 ↗</a><a href="mailto:hadongil19822@gmail.com">hadongil19822@gmail.com ↗</a></div></div><span className="closing-poster-foot">IDEA MEALKIT / Independent digital studio, Korea</span></div>
    <div className="closing-caption"><span>한 가지 생각, 무한한 다음.</span><span>(What’s in your kit?)</span></div>
  </section>;
}

export function ContactSection() {
  return <section className="contact-section" id="contact" tabIndex={-1} aria-labelledby="contact-title">
    <div className="contact-intro"><span className="contact-eyebrow">IDEA MEALKIT / CONTACT</span><h2 id="contact-title">다음 아이디어를<br />함께 만들어볼까요?</h2><p>웹사이트, 앱, AI 서비스.<br />떠오른 생각부터 출시할 프로젝트까지 편하게 이야기해 주세요.</p></div>
    <div className="contact-methods">
      <a className="contact-method contact-kakao" href="https://pf.kakao.com/_mxbzgn/chat" target="_blank" rel="noopener noreferrer"><span className="contact-method-label">01 / KAKAOTALK</span><strong>카카오톡으로 문의하기 <span aria-hidden="true">↗</span></strong><span className="contact-method-detail">아이디어 밀키트 카카오톡 채널</span></a>
      <a className="contact-method contact-email" href="mailto:hadongil19822@gmail.com"><span className="contact-method-label">02 / EMAIL</span><strong>이메일 보내기 <span aria-hidden="true">↗</span></strong><span className="contact-method-detail">hadongil19822@gmail.com</span></a>
    </div>
  </section>;
}
