import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import OneCloudProvider from './store/context';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import SubmitEnquiry from './pages/SubmitEnquiry';

function App() {
  return (
    <BrowserRouter>
      <OneCloudProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/enquiry" element={<SubmitEnquiry />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </OneCloudProvider>
    </BrowserRouter>
  );
}

export default App;
