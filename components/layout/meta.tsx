import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            {/* <link rel='icon' href='/favicon.ico' /> */}
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Joseph Alvarenga Beech - Software Engineer',
    keywords: 'web development, programming, web design , software development, software engineering',
    description: 'Software Engineer. ',
}

export default Meta
