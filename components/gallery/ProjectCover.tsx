import React from 'react';
import type { Project } from './projects';

export function ProjectCover({ project, eager = false }: { project: Project; eager?: boolean }) {
  return (
    <div className={`project-cover cover-${project.id}`} style={{ backgroundColor: project.color, color: project.ink }}>
      {project.screenshots ? <div className="project-shots">{project.screenshots.map((src, index) => <img key={src} className="project-shot" src={src} alt={`${project.name} 앱 화면 ${index + 1}`} loading={eager ? 'eager' : 'lazy'} draggable={false} onError={event => { event.currentTarget.style.display = 'none'; }} />)}</div> : project.image ? <img className="project-shot" src={project.image} alt={`${project.name} 서비스 미리보기`} loading={eager ? 'eager' : 'lazy'} draggable={false} onError={e => { e.currentTarget.style.display = 'none'; }} /> : (
        <div className="project-poster" aria-label={`${project.name} 프로젝트 비주얼`}>
          <span className="poster-eyebrow">{project.category}</span>
          {project.logo && <img className="poster-logo" src={project.logo} alt="" loading={eager ? 'eager' : 'lazy'} draggable={false} />}
          <span className="poster-statement">{project.statement}</span>
          <span className="poster-name">{project.name}</span>
          <span className="poster-foot">IDEA MEALKIT — DIGITAL EXPERIENCES</span>
        </div>
      )}
    </div>
  );
}
