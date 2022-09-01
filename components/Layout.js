import Head from "next/head";

export default function Layout ({children, title, description = ''}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={'description'} content={description || 'Простой блог на NEXT'}/>
                <meta property={'og:description'} content={description || 'Простой блог на NEXT'}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="container">
                {children}
            </div>
            <footer>2022 Next.js Блог</footer>
        </>
    )
}