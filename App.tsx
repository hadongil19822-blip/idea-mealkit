import React, { lazy, Suspense } from 'react';
import Showroom from './components/gallery/Showroom';

const ProposalPage = lazy(() => import('./components/ProposalPage').then(module => ({ default: module.ProposalPage })));
const FlutterLogDetail = lazy(() => import('./components/FlutterLogDetail').then(module => ({ default: module.FlutterLogDetail })));

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return <Suspense fallback={<div className="route-loading" role="status">IDEA MEALKIT / LOADING</div>}>
    {path === '/proposal' ? <ProposalPage /> : path === '/projects/flutterlog' ? <FlutterLogDetail onBack={() => { window.location.href = '/'; }} /> : <Showroom />}
  </Suspense>;
}
