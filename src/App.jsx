import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import OneCloudProvider from './store/context';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import SignupRedirect from './pages/SignupRedirect';
import EnquirySubmitThankYouPage from './pages/EnquirySubmitThankYouPage';
import EnquiryForm from './pages/EnquiryForm';

function App() {
  return (
    <BrowserRouter>
      <OneCloudProvider>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<SignupRedirect />} />
              <Route path="enquiry" element={<EnquiryForm />} />
              <Route path="thank-you" element={<EnquirySubmitThankYouPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} /> {/* 404 fallback route */}
            </Route>
          </Routes>
        </ErrorBoundary>
      </OneCloudProvider>
    </BrowserRouter>
  );
}

export default App;