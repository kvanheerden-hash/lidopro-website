import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPages';
import { FAQPage, TreatsPage, ProviderPage, SafetyPage } from './pages/InfoPages';
import { ROUTES, SEO_DATA } from './constants';

// SEO Updater Component
const SEOUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = SEO_DATA[location.pathname] || SEO_DATA[ROUTES.HOME];
    document.title = meta.title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);
    
    // Update canonical placeholder
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://www.lidopro.com${location.pathname}`);

  }, [location]);

  return null;
};

// Generic Page Wrapper
const PageWrapper: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div className="py-24 container mx-auto px-4 max-w-3xl text-center">
    <h1 className="text-4xl font-bold text-slate-900 mb-6">{title}</h1>
    <p className="text-slate-600">{content}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <SEOUpdater />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.OINTMENT} element={<ProductPage type="ointment" />} />
          <Route path={ROUTES.PATCH} element={<ProductPage type="patch" />} />
          <Route path={ROUTES.TREATS} element={<TreatsPage />} />
          <Route path={ROUTES.FAQ} element={<FAQPage />} />
          <Route path={ROUTES.PROVIDER} element={<ProviderPage />} />
          <Route path={ROUTES.SAFETY} element={<SafetyPage />} />
          
          {/* Utility Pages */}
          <Route path={ROUTES.PRIVACY} element={<PageWrapper title="Privacy Policy" content="Privacy Policy content placeholder..." />} />
          <Route path={ROUTES.TERMS} element={<PageWrapper title="Terms of Use" content="Terms of Use content placeholder..." />} />
          <Route path={ROUTES.RETURNS} element={<PageWrapper title="Refunds & Returns" content="Refunds & Returns content placeholder..." />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
