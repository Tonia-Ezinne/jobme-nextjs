import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AppProvider } from "../../context/AppContext";

export default function App({ Component, pageProps, router }) {
if( router.pathname === '/404'  || router.pathname === '/signup' || router.pathname === '/login'){
 
 return(
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
 )
}
 
 
 
  return (
    <AppProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );


  return(
    <Layout>
      <Component {...pageProps} />;
    </Layout>

  );

}



// import Layout from "@/components/Layout";
// import "@/styles/globals.css";
// // import MapComponent from "@/components/MapComponent"; // Adjust the path as necessary
// import { useRouter } from "next/router"; // Only if you are using Next.js

// export default function App({ Component, pageProps }) {
//   const router = useRouter(); // Only if using Next.js

//   // Render specific pages without Layout
//   if (
//     router.pathname === "/404" ||
//     router.pathname === "/signup" ||
//     router.pathname === "/login"
//   ) {
//     return <Component {...pageProps} />;
//   }

//   // Render MapComponent on a specific path, e.g., '/map'
//   if (router.pathname === "/map") {
//     return (
//       <div className="App">
//         {/* <MapComponent /> */}
//       </div>
//     );
//   }

//   // Render layout with Layout component for all other routes
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }
