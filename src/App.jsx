import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import OneCloudProvider from './store/context';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import SignupRedirect from './pages/SignupRedirect';

function App() {
  return (
    <BrowserRouter>
      <OneCloudProvider>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='/'  element={<Home />} />
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<SignupRedirect />} />
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



// import { Routes, Route, HashRouter } from 'react-router-dom'; // change here
// import Home from './pages/Home';
// import Layout from './layouts/Layout';
// import OneCloudProvider from './store/context';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import Signin from './pages/Signin';
// import NotFound from './pages/NotFound';
// import ErrorBoundary from './components/ErrorBoundary';
// import SignupRedirect from './pages/SignupRedirect';

// function App() {
//   return (
//     <HashRouter> {/* change here */}
//       <OneCloudProvider>
//         <ErrorBoundary>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route path="/" element={<Home />} />
//               <Route path="signin" element={<Signin />} />
//               <Route path="signup" element={<SignupRedirect />} />
//               <Route path="privacy-policy" element={<PrivacyPolicy />} />
//               <Route path="*" element={<NotFound />} />
//             </Route>
//           </Routes>
//         </ErrorBoundary>
//       </OneCloudProvider>
//     </HashRouter> 
//   );
// }

// export default App;
