import React from 'react';
import { projects, type Project } from './projects';
import { MealkitMark } from './StudioChrome';

type Props = { open: (project: Project) => void };
function Action({ index, open }: Props & { index: number }) {
  return <button className="atlas-action" onClick={() => open(projects[index])}>{projects[index].name} 살펴보기 <span aria-hidden="true">↗</span></button>;
}
function Label({ index, text }: { index: number; text: string }) {
  return <div className="atlas-label"><span>0{index + 1} / {projects[index].name}</span><span>{text}</span></div>;
}
function GraphicInterlude({ kind }: { kind: 'fold' | 'flow' | 'play' | 'connect' }) {
  const captions = { fold: '상상을 형태로.', flow: '자연스럽게 이어지는 경험.', play: '작은 반응에서 시작되는 즐거움.', connect: '사람과 서비스를 연결합니다.' };
  return <section className={`atlas-act atlas-interlude interlude-${kind}`} aria-hidden="true">
    <div className="interlude-caption"><span>IDEA MEALKIT / CREATIVE PROCESS</span><span>{captions[kind]}</span></div>
    {kind === 'fold' && <div className="fold-panels">{'FORM'.split('').map((c,i)=><div className="fold-panel" key={c} style={{left:`${i*25}%`}}><span>{c}</span><small>FROM IDEA TO REALITY</small></div>)}</div>}
    {kind === 'flow' && <><div className="flow-rings">{[0,1,2,3].map(i=><span key={i} style={{inset:`${i*10}%`}} />)}</div><div className="interlude-word"><span className="flow-title">FLOW</span></div></>}
    {kind === 'play' && <><div className="play-tiles">{Array.from({length:16},(_,i)=><span key={i} className={(Math.floor(i/4)+i)%2?'tile-light':'tile-dark'} />)}</div><div className="interlude-word">{'PLAY'.split('').map(c=><span key={c}>{c}</span>)}</div></>}
    {kind === 'connect' && <><div className="connect-ribbons">{[0,1,2].map(i=><span key={i} />)}</div><div className="interlude-word">CONNECT</div></>}
    <span className="interlude-signature">THINK → DESIGN → DEVELOP</span>
  </section>;
}
export function MotionAtlas({ open }: Props) {
  return <section className="motion-experience" id="top" tabIndex={-1} aria-label="IDEA MEALKIT 모션 쇼케이스">
    <div className="motion-screen">
      <section className="atlas-act atlas-cover" aria-labelledby="hero-title">
        <h1 className="sr-only" id="hero-title">IDEA MEALKIT — 생각이 형태가 되는 곳.</h1>
        <div className="atlas-masthead" aria-label="IDEA MEALKIT"><MealkitMark word="IDEA" /><MealkitMark word="MEALKIT" /></div>
        <div className="atlas-cover-meta"><span>INDEPENDENT DIGITAL STUDIO</span><span>WEB / APP / AI</span><span>SEOUL, KR</span></div>
        <div className="kinetic-engine" aria-hidden="true">
          <div className="kit-piece kit-idea">
            <div className="kit-surface idea-surface" />
            <div className="kit-type-window"><div className="kit-type-track idea-track"><strong>IDEA</strong><strong>THINK</strong><strong>IDEA</strong></div></div>
            <span className="kit-index">01 / THE SPARK</span>
          </div>
          <div className="kit-piece kit-meal">
            <div className="kit-surface meal-surface"><span /><span /><span /><span /></div>
            <div className="kit-type-window"><div className="kit-type-track meal-track"><strong>MEAL</strong><strong>MAKE</strong><strong>MEAL</strong></div></div>
            <span className="kit-index">02 / THE PROCESS</span>
          </div>
          <div className="kit-piece kit-kit">
            <div className="kit-surface kit-slice slice-a" /><div className="kit-surface kit-slice slice-b" />
            <div className="kit-type-window"><div className="kit-type-track kit-track"><strong>KIT</strong><strong>PLAY</strong><strong>KIT</strong></div></div>
            <span className="kit-index">03 / THE POSSIBILITY</span>
          </div>
          <div className="engine-baseline"><span>RAW IDEAS.</span><span>REAL POSSIBILITIES.</span><span>ASSEMBLED BY IDEA MEALKIT</span></div>
        </div>
        <div className="atlas-cover-copy"><p>생각이<br /><i>형태가 되는 곳.</i></p><span>웹사이트부터 앱, AI 서비스까지.<br />아이디어를 실제 제품으로 만듭니다.</span></div>
        <div className="atlas-cover-foot"><span>IDEA → EXPERIENCE</span><a href="#projects">SCROLL TO TRANSFORM ↓</a><span>WEB / APP / SERVICE</span></div>
      </section>
      <section className="atlas-act atlas-index" id="projects" tabIndex={-1} aria-labelledby="atlas-index-title">
        <div className="index-heading"><span>IDEA MEALKIT / DIGITAL STUDIO</span><h2 id="atlas-index-title">상상은 자유롭게.<br /><i>구현은 제대로.</i></h2><span>DESIGN · DEVELOP · LAUNCH</span></div>
        <div className="studio-motion" aria-hidden="true">
          <div className="studio-phase studio-web"><div className="studio-web-shutters">{Array.from({length:6},(_,i)=><span key={i} />)}</div><strong className="studio-word">{'WEB'.split('').map(c=><span key={c}>{c}</span>)}</strong></div>
          <div className="studio-phase studio-app"><div className="studio-app-disc" /><strong className="studio-word">{'APP'.split('').map((c,i)=><span key={i}>{c}</span>)}</strong></div>
          <div className="studio-phase studio-service"><div className="studio-service-grid">{Array.from({length:4},(_,i)=><span key={i} />)}</div><strong className="studio-word">SERVICE</strong></div>
          <span className="studio-motion-label">IDEAS TAKE SHAPE.</span><span className="studio-motion-label label-right">DESIGNED TO WORK.</span>
        </div>
        <div className="studio-services"><div><span>WEB</span><p>브랜드를 담는 웹사이트</p></div><div><span>APP</span><p>일상에 닿는 애플리케이션</p></div><div><span>SERVICE</span><p>아이디어를 실현하는 AI·디지털 서비스</p></div></div>
        <div className="index-footer"><span>기획에서 디자인, 개발과 출시까지.</span><a href="#contact">프로젝트 함께 만들기 ↗</a></div>
      </section>
      <article className="atlas-act atlas-metalook" id="project-metalook" tabIndex={-1} aria-labelledby="atlas-metalook-title">
        <div className="fashion-aperture">
          <div className="atlas-fashion-panel fashion-image-a"><img src="/projects/editorial/fashion.jpg" alt="건축적인 실루엣의 AI 패션 콘셉트 화보" fetchPriority="high" /></div>
          <div className="atlas-fashion-panel fashion-type-panel"><span>01 / AI FASHION</span><h2 id="atlas-metalook-title">Beyond<br /><i>the frame.</i></h2><p>상상을 입히는 기술.<br />가상 모델 · AI 피팅 · 룩북</p><Action index={0} open={open} /></div>
          <div className="atlas-fashion-panel fashion-image-b"><img src="/projects/editorial/textile.jpg" alt="실크와 금속의 소재 콘셉트 화보" /><span>VIRTUAL<br />BECOMES<br />REAL.</span></div>
        </div>
        <div className="fashion-kinetic-line" aria-hidden="true"><span>METALOOK — </span><span>METALOOK — </span></div>
        <Label index={0} text="IMAGINATION, UNFOLDED." />
      </article>
      <GraphicInterlude kind="fold" />
      <article className="atlas-act atlas-semapage" id="project-semapage" tabIndex={-1} aria-labelledby="atlas-sema-title">
        <Label index={1} text="PIXELS BECOME POSSIBILITIES" />
        <div className="pixel-assembly" aria-hidden="true">{Array.from({length:6},(_,i)=><span key={i} style={{backgroundPosition:`${i%3*50}% ${Math.floor(i/3)*100}%`}} />)}</div>
        <div className="html-ribbons">
          <div className="html-ribbon ribbon-input"><span>INPUT / 01</span><strong>&lt;image&gt;</strong><span>ORIGINAL DESIGN</span></div>
          <div className="html-ribbon ribbon-message"><span>TRANSFORM / 02</span><h2 id="atlas-sema-title">이미지에서,<br /><i>웹으로.</i></h2><p>보이는 디자인을<br />검색과 AI가 읽는 정보로.</p></div>
          <div className="html-ribbon ribbon-output"><span>OUTPUT / 03</span><strong>&lt;html&gt;</strong><Action index={1} open={open} /></div>
        </div>
      </article>
      <GraphicInterlude kind="flow" />
      <article className="atlas-act atlas-hangulwave" id="project-hangulwave" tabIndex={-1} aria-labelledby="atlas-hangul-title">
        <Label index={2} text="A LANGUAGE OPENS A WORLD" />
        <div className="hangul-kinetic-type" aria-hidden="true"><span>안</span><span>녕</span></div>
        <div className="language-frames"><figure className="language-frame language-frame-a"><img src="/projects/hangul-home.webp" alt="한글웨이브 홈과 학습 기능 전체 화면" /><figcaption>01 / YOUR DAILY RHYTHM</figcaption></figure><figure className="language-frame language-frame-b"><img src="/projects/hangul-choice.webp" alt="한글웨이브 이야기 선택 전체 화면" /><figcaption>02 / CHOOSE YOUR STORY</figcaption></figure></div>
        <div className="atlas-language-copy"><span>HANGULWAVE</span><h2 id="atlas-hangul-title">한 마디가,<br />새로운 세계로.</h2><p>선택하고, 듣고, 이야기하며<br />배우는 한국어.</p><Action index={2} open={open} /></div>
      </article>
      <GraphicInterlude kind="play" />
      <article className="atlas-act atlas-cosmicspell" id="project-cosmicspell" tabIndex={-1} aria-labelledby="atlas-cosmic-title">
        <div className="cosmic-flight" aria-hidden="true">{Array.from({length:5},(_,i)=><span key={i} />)}</div>
        <Label index={3} text="ONE MORE RUN. ONE MORE WORLD." />
        <div className="cosmic-kinetic-title" aria-hidden="true"><span>PLAY</span><span><i>BEYOND.</i></span></div>
        <img className="atlas-game-shot game-a" src="/projects/cosmic-missiles.webp" alt="코스믹 스펠 서바이버 무기 전투 전체 화면" />
        <img className="atlas-game-shot game-b" src="/projects/cosmic-boss.webp" alt="코스믹 스펠 서바이버 보스 전투 전체 화면" />
        <div className="atlas-game-copy"><h2 id="atlas-cosmic-title">COSMIC SPELL<br />SURVIVORS</h2><p>기체와 무기를 조합해,<br />우주 끝까지 살아남기.</p><Action index={3} open={open} /></div>
      </article>
      <GraphicInterlude kind="connect" />
      <article className="atlas-act atlas-brandeye" id="project-brandeye" tabIndex={-1} aria-labelledby="atlas-brand-title">
        <div className="brand-paper" aria-hidden="true" />
        <Label index={4} text="MAKE YOUR BRAND VISIBLE" />
        <div className="brand-target"><div className="brand-target-media"><img src="/projects/editorial/sculpture.jpg" alt="여러 시점에서 다른 형태를 드러내는 금속 조형물" /></div><div className="brand-target-reticle" aria-hidden="true"><span>BRAND IN FOCUS</span><span>AI SEARCH / 05</span></div><div className="brand-scanner" aria-hidden="true" /></div>
        <div className="brand-kinetic-type" aria-hidden="true"><span>BE</span><span>SEEN.</span></div>
        <div className="atlas-brand-copy"><h2 id="atlas-brand-title">Be seen.<br /><i>Be understood.</i></h2><p>AI의 답변 속에서<br />브랜드의 다음 가능성을 찾습니다.</p><Action index={4} open={open} /></div>
      </article>
      <section className="atlas-act atlas-finale" aria-labelledby="atlas-finale-title"><span>WHAT’S IN YOUR KIT?</span><h2 id="atlas-finale-title" aria-label="생각을, 현실로."><span aria-hidden="true">생각을,</span><span aria-hidden="true">현실로.</span></h2><a href="#contact">다음 아이디어 함께 만들기 ↗</a></section>
      <nav className="atlas-chapters" aria-label="프로젝트 장면 선택">{projects.map((p,i)=><a key={p.id} href={`#project-${p.id}`}><span>0{i+1}</span><span>{p.id==='cosmicspell'?'Cosmic':p.name}</span></a>)}</nav>
      <div className="atlas-progress" aria-hidden="true"><span /></div>
    </div>
  </section>;
}
