import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({title,keywords,description,children}) {
  const router = useRouter();
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
        </Head>
        
        
        <div className={`h-screen w-screen overflow-x-hidden`}>
            <Navbar />
        {children}
        <Footer />
        </div>
       
    </div>
  )
}

Layout.defaultProps = {
    title:'SkillSeeko',
    description:'Find the latest courses and other learning materials',
    keywords: 'skills,course'
}