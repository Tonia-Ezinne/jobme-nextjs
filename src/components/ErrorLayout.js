import Head from 'next/head';
import Footer from './Footer';

const ErrorLayout = ({children}) => {
    return ( 
    <div className='error-layout w-11/12 mx-auto container'>
    <Head>
        <title>Error Page</title>
        <meta name="description" content="Error occured" />
    </Head>
    <main className='containe mx-auto p-4'>
        {children}
        </main>

        <Footer/>

    </div>
     );
}
 
export default ErrorLayout;