import React from 'react';
import { projects, type Project } from './projects';
import { MealkitMark } from './StudioChrome';

type Props = { open: (project: Project) => void };
const names = ['MetaLook', 'SemaPage', 'HangulWave', 'Cosmic Spell', 'BrandEye'];
function Caption({ index, children }: { index: number; children: React.ReactNode }) {
  return <div className="canvas-caption"><span>0{index + 1} / {names[index]}</span><span>{children}</span><span>IDEA MEALKIT</span></div>;
}
function Detail({ index, children, open }: Props & { index: number; children: React.ReactNode }) {
  return <button className="canvas-detail" onClick={() => open(projects[index])}>{children}<span aria-hidden="true">↗</span></button>;
}
function Shot({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />;
}
export function PortfolioCanvas({ open }: Props) {
  return <>
    <section className="canvas-hero" id="top" tabIndex={-1} aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">IDEA MEALKIT — 아이디어를 웹, 앱, AI 서비스로.</h1>
      <MealkitMark word="IDEA" className="canvas-masthead" />
      <div className="canvas-byline"><span>INDEPENDENT DIGITAL STUDIO</span><span>WEB / APP / AI</span><span>SEOUL, KR ↘</span></div>
      <div className="cover-composition">
        <div className="cover-intro"><p>생각은 자유롭게.<br />가능성은 구체적으로.</p><a href="#projects">다섯 가지 아이디어 탐색 ↓</a></div>
        <a className="cover-print cover-main" href="#project-metalook"><img src="/projects/editorial/fashion.jpg" alt="건축적인 실루엣의 패션 콘셉트 화보" fetchPriority="high" /><span><b>01</b> METALOOK / AI FASHION <i>↗</i></span></a>
        <a className="cover-print cover-language" href="#project-hangulwave"><span>03 / LANGUAGE</span><strong>안녕,<br />새로운<br /><i>세계.</i></strong><img src="/projects/hangul-home.webp" alt="한글웨이브 학습 앱 화면" /></a>
        <a className="cover-print cover-web" href="#project-semapage"><span>02 / IMAGE TO WEB</span><strong>&lt;idea&gt;<br /><i>becomes</i><br />&lt;real&gt;</strong><span>SEMAPAGE ↗</span></a>
        <span className="cover-edition" aria-hidden="true">A COLLECTION<br />OF POSSIBILITIES.<br /><b>01—05</b></span>
        <div className="cover-title" aria-hidden="true"><span>Ideas take</span><span><i>shape.</i></span></div>
      </div>
      <div className="cover-bottom"><span>FROM A THOUGHT<br />TO A THING THAT WORKS.</span><span>상상을 화면으로.<br />화면을 서비스로.</span><a href="#projects">SCROLL TO UNPACK ↓</a></div>
    </section>
    <section className="canvas-index" id="projects" tabIndex={-1} aria-labelledby="projects-title">
      <div className="index-heading"><h2 id="projects-title">Selected<br /><i>possibilities.</i></h2><p>패션, 언어, 브랜드, 그리고 놀이.<br />서로 다른 생각을 디지털 경험으로 만듭니다.</p><span>(05)</span></div>
      <nav aria-label="프로젝트 바로가기">{projects.map((p, i) => <a key={p.id} href={`#project-${p.id}`}><span>0{i + 1}</span><strong>{p.name}</strong><span>{p.category}</span><span>↗</span></a>)}</nav>
    </section>
    <article className="canvas-project canvas-fashion" id="project-metalook" tabIndex={-1} aria-labelledby="fashion-title">
      <Caption index={0}>VIRTUAL BECOMES REAL</Caption>
      <div className="fashion-stage">
        <div className="fashion-spread">
          <div className="fashion-panel fashion-left"><Shot src="/projects/editorial/fashion.jpg" alt="메타룩의 패션 제작을 표현한 흑백 콘셉트 화보" /><span>01 / THE NEW SILHOUETTE</span></div>
          <div className="fashion-panel fashion-center"><span>AN IDEA, DRESSED.</span><h2 id="fashion-title">Beyond<br />the<br /><i>frame.</i></h2><p>상상을 입히는 기술.<br />가상 모델부터 피팅과 룩북까지.</p><Detail index={0} open={open}>MetaLook 살펴보기</Detail></div>
          <div className="fashion-panel fashion-right"><Shot src="/projects/editorial/textile.jpg" alt="실크 주름과 금속의 질감을 표현한 패션 소재 화보" /><span>MAKE THE UNSEEN, SEEN.</span></div>
        </div>
        <div className="fashion-word" aria-hidden="true">METALOOK</div>
        <p className="canvas-note">AI CREATION / VIRTUAL FITTING / LOOKBOOK</p>
      </div>
    </article>
    <article className="canvas-project canvas-sema" id="project-semapage" tabIndex={-1} aria-labelledby="sema-title">
      <Caption index={1}>A NEW LIFE FOR PIXELS</Caption>
      <h2 className="sema-title" id="sema-title"><span>이미지의</span><span><i>다음 페이지.</i></span></h2>
      <div className="sema-worktable">
        <div className="sema-sheet sema-source"><header><span>01 / ORIGINAL IMAGE</span><span>↓</span></header><Shot src="/projects/semapage.jpg" alt="세마페이지 서비스 원본 웹 화면" /><strong>More than<br /><i>a picture.</i></strong><span>DESIGN IN. POSSIBILITIES OUT.</span></div>
        <div className="sema-sheet sema-output"><header><span>02 / READABLE CONTENT</span><span>↗</span></header><div className="code-window" aria-hidden="true"><span>&lt;article&gt;</span><span>&nbsp;&nbsp;&lt;h1&gt;<b>읽히는 상품.</b>&lt;/h1&gt;</span><span>&nbsp;&nbsp;&lt;p&gt;이제, 검색과 AI에게도.&lt;/p&gt;</span><span>&lt;/article&gt;</span></div><h3>보이는 디자인에서,<br />읽히는 정보로.</h3><p>이미지 안의 상품 정보를<br />편집 가능한 HTML로 연결합니다.</p><Detail index={1} open={open}>세마페이지 살펴보기</Detail></div>
      </div>
      <div className="sema-ticker" aria-hidden="true"><span>IMAGE → HTML → POSSIBILITY → </span></div>
    </article>
    <article className="canvas-project canvas-hangul" id="project-hangulwave" tabIndex={-1} aria-labelledby="hangul-title">
      <Caption index={2}>A LANGUAGE OPENS A WORLD</Caption>
      <h2 id="hangul-title" className="hangul-title" aria-label="안녕!"><span aria-hidden="true">안</span><span aria-hidden="true">녕</span><span aria-hidden="true">!</span></h2>
      <div className="hangul-layout"><div className="hangul-copy"><span>HANGULWAVE</span><h3>한 마디가,<br /><i>새로운 세계로.</i></h3><p>선택하고, 듣고, 이야기하며.<br />일상과 K-컬처 속에서 배우는 한국어.</p><Detail index={2} open={open}>한글웨이브 살펴보기</Detail></div><div className="hangul-prints"><figure className="app-print app-print-one"><Shot src="/projects/hangul-home.webp" alt="한글웨이브 홈과 학습 기능 전체 화면" /><figcaption>01 / YOUR DAILY RHYTHM</figcaption></figure><figure className="app-print app-print-two"><Shot src="/projects/hangul-choice.webp" alt="한글웨이브 스토리 선택 전체 화면" /><figcaption>02 / CHOOSE YOUR STORY</figcaption></figure></div></div>
      <div className="hangul-baseline"><span>READ. LISTEN. SPEAK.</span><span>한글로 열리는 가능성 ↗</span></div>
    </article>
    <article className="canvas-project canvas-cosmic" id="project-cosmicspell" tabIndex={-1} aria-labelledby="cosmic-title">
      <Caption index={3}>ONE MORE RUN</Caption>
      <div className="cosmic-heading"><h2 id="cosmic-title">PLAY<br /><i>BEYOND.</i></h2><p>COSMIC SPELL SURVIVORS<br />우주 끝까지, 살아남기.</p></div>
      <div className="cosmic-contact-sheet"><div className="cosmic-copy"><span>04 / SURVIVAL GAME</span><strong>CAST.<br />DODGE.<br /><i>REPEAT.</i></strong><p>기체와 무기의 조합.<br />매번 새롭게 펼쳐지는 전투.</p><Detail index={3} open={open}>게임 살펴보기</Detail></div><figure className="game-print game-print-one"><Shot src="/projects/cosmic-missiles.webp" alt="코스믹 스펠 서바이버 무기 전투 전체 화면" /><figcaption>01 / INTO THE UNKNOWN</figcaption></figure><figure className="game-print game-print-two"><Shot src="/projects/cosmic-boss.webp" alt="코스믹 스펠 서바이버 보스 전투 전체 화면" /><figcaption>02 / STAY IN THE GAME</figcaption></figure></div>
    </article>
    <article className="canvas-project canvas-brand" id="project-brandeye" tabIndex={-1} aria-labelledby="brand-title">
      <Caption index={4}>MAKE YOUR BRAND VISIBLE</Caption>
      <div className="brand-layout"><div className="brand-heading"><h2 id="brand-title">Be seen.<br /><i>Be understood.</i></h2><p>AI의 답변 속에서,<br />우리 브랜드는 어떻게 발견될까요?</p><Detail index={4} open={open}>브랜드아이 살펴보기</Detail></div><div className="brand-study"><Shot src="/projects/editorial/sculpture.jpg" alt="여러 시점에서 다른 형태를 드러내는 금속 조형물" /><div className="brand-viewfinder" aria-hidden="true"><span>BRAND IN FOCUS</span><span>05 / INTELLIGENCE</span></div></div></div>
      <div className="brand-data"><span>VISIBILITY<br />IS A BEGINNING.</span><div><Shot src="/projects/brandeye.jpg" alt="BrandEye AI 검색 가시성 진단 서비스" /><span>BRANDEYE / AI SEARCH INTELLIGENCE</span></div><p>AI 검색 가시성과 경쟁사,<br />응답의 근거를 살펴보고<br />브랜드의 다음 방향을 찾습니다.</p></div>
    </article>
    <section className="canvas-outro" aria-labelledby="outro-title"><span>WHAT’S IN YOUR KIT?</span><h2 id="outro-title"><span>작은 생각이</span><span><i>다음이 된다.</i></span></h2><div><span>기획 · 디자인 · 개발 · 출시</span><a href="#contact">함께 만들기 ↗</a></div></section>
  </>;
}
