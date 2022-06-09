import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import App2 from "./index/App2";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
// );

const root2 = ReactDOM.createRoot(document.getElementById('index'));
root2.render(
    <App2/>
);

