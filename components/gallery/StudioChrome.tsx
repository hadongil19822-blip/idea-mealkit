import React from 'react';

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

export function ContactSection() {
  return <section className="contact-section" id="contact" tabIndex={-1} aria-labelledby="contact-title">
    <div className="contact-intro"><span className="contact-eyebrow">IDEA MEALKIT / CONTACT</span><h2 id="contact-title">다음 아이디어를<br />함께 만들어볼까요?</h2><p>웹사이트, 앱, AI 서비스.<br />떠오른 생각부터 출시할 프로젝트까지 편하게 이야기해 주세요.</p></div>
    <div className="contact-methods">
      <a className="contact-method contact-kakao" href="https://pf.kakao.com/_mxbzgn/chat" target="_blank" rel="noopener noreferrer"><span className="contact-method-label">01 / KAKAOTALK</span><strong>카카오톡으로 문의하기 <span aria-hidden="true">↗</span></strong><span className="contact-method-detail">아이디어 밀키트 카카오톡 채널</span></a>
      <a className="contact-method contact-email" href="mailto:hadongil19822@gmail.com"><span className="contact-method-label">02 / EMAIL</span><strong>이메일 보내기 <span aria-hidden="true">↗</span></strong><span className="contact-method-detail">hadongil19822@gmail.com</span></a>
    </div>
  </section>;
}
