import React from 'react';
import ReactDOM from 'react-dom/client';
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './global.css'
// import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from 'sonner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <React.StrictMode>
   <Router>
    <QueryClientProvider client={queryClient}>
    <Auth0ProviderWithNavigate>
    <AppRoutes />
    <Toaster visibleToasts={1} position="top-right" richColors/>
    </Auth0ProviderWithNavigate>
    </QueryClientProvider>
   </Router>
  </React.StrictMode>
);
