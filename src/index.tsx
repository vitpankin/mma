import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import App from './app';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import reportWebVitals from './reportWebVitals';
import { FirestoreProvider } from './cloud/firebase';
import { SDKProvider } from '@tma.js/sdk-react';
import { ThemeProvider } from './contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SDKProvider acceptCustomStyles debug>
      {/* <QueryClientProvider client={queryClient}> */}
        {/* <FirestoreProvider> */}
          <App />
        {/* </FirestoreProvider> */}
      {/* </QueryClientProvider> */}
      </SDKProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
