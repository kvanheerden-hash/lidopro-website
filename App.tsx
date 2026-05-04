import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPages';
import { FAQPage, TreatsPage, ProviderPage, SafetyPage, PrivacyPolicyPage, TermsOfUsePage, DistributionPage } from './pages/InfoPages';
import { ROUTES, SEO_DATA } from './constants';

const BASE_URL = 'https://www.lidopro.com';
const DEFAULT_OG_IMAGE = 'https://res.cloudinary.com/dwt8avwjv/image/upload/v1765922380/Lidopro_Logo_2_ce8lhq.png';

// Helper: upsert a <meta> tag by attribute selector
const setMetaTag = (attr: string, key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

// SEO Updater — runs on every route change
const SEOUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const route = location.pathname;
    const seo = SEO_DATA[route] || SEO_DATA[ROUTES.HOME];
    const canonicalUrl = `${BASE_URL}${route}`;

    // Page title
    document.title = seo.title;

    // Standard meta
    setMetaTag('name', 'description', seo.description);

    // Open Graph
    setMetaTag('property', 'og:title',       seo.title);
    setMetaTag('property', 'og:description',  seo.description);
    setMetaTag('property', 'og:url',          canonicalUrl);
    setMetaTag('property', 'og:type',         'website');
    setMetaTag('property', 'og:image',        seo.ogImage ?? DEFAULT_OG_IMAGE);

    // Twitter Card
    setMetaTag('name', 'twitter:card',        'summary_large_image');
    setMetaTag('name', 'twitter:title',       seo.title);
    setMetaTag('name', 'twitter:description', seo.description);
    setMetaTag('name', 'twitter:image',       seo.ogImage ?? DEFAULT_OG_IMAGE);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

  }, [location]);

  return null;
};

// 404 Page
const NotFoundPage: React.FC = () => (
  <div className="py-32 container mx-auto px-4 max-w-3xl text-center">
    <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-4">404 — Page Not Found</p>
    <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">We couldn't find that page.</h1>
    <p className="text-slate-600 text-lg mb-10 leading-relaxed">
      The page you're looking for doesn't exist or may have moved.
    </p>
    <a
      href="/"
      className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium text-white transition-all"
      style={{ backgroundColor: '#006481' }}
    >
      Back to Home
    </a>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <SEOUpdater />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME}         element={<Home />} />
          <Route path={ROUTES.OINTMENT}     element={<ProductPage type="ointment" />} />
          <Route path={ROUTES.PATCH}        element={<ProductPage type="patch" />} />
          <Route path={ROUTES.TREATS}       element={<TreatsPage />} />
          <Route path={ROUTES.FAQ}          element={<FAQPage />} />
          <Route path={ROUTES.PROVIDER}     element={<ProviderPage />} />
          <Route path={ROUTES.SAFETY}       element={<SafetyPage />} />
          <Route path={ROUTES.PRIVACY}      element={<PrivacyPolicyPage />} />
          <Route path={ROUTES.TERMS}        element={<TermsOfUsePage />} />
          <Route path={ROUTES.DISTRIBUTION} element={<DistributionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
