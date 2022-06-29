// import fetchData from "./fetchData.js";
// import {getHeaders} from "./auth.js";
// import {render} from "react-dom";
// import {Route} from "./index/App";
//
// /**
//  * Finds the correct route for a given view, builds a loading view, fetches data and builds the final rendered view.
//  * @param URI
//  */
// export default function createView(URI) {
//
//     // let route = Route(URI);
//     //
//     // // Store the title because the loading screen render overwrites it.
//     // let currentTitle = document.title;
//     //
//     // // if route is invalid, return a 404 page
//     // if (!route) {
//     //     render(null, router('/error'));
//     //     return;
//     // }
//     //
//     // // change view to loading screen
//     // render(null, router('/loading'));
//
//     let request = {
//         headers: getHeaders()
//     }
//     fetchData(route.state, request).then((props) => {
//
//         // Add the current page to the history stack
//         history.pushState({...props, lastUri: route.uri }, null, route.uri)
//         render(props, route);
//     });
// }
//
// // When the user hits back in the browser, get the last uri from history and render it (w/ props)
// window.addEventListener('popstate', (e) => {
//     if (e?.state?.lastUri) {
//       console.log(`Back to ${e.state.lastUri}!`)
//       const { lastUri, ...props } = e.state
//       render(props, router(lastUri))
//     }
// });
