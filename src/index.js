import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
document.getElementById('root')
);

// const root2 = ReactDOM.createRoot(document.getElementById('index'));
// root2.render(
//     <App2/>
// );

