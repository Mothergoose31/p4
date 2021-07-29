

import {Text} from '@chakra-ui/react'


import { getAllPostIds, getPostData } from "../../libs/posts.js";
import Head from "next/head";
import Date from "../../components/date/date.js"
import Link from "next/link";
import styles from "../../styles/blog.module.css"

export default function Post({ postData }) {
    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <Text as='u' FontSize='4xl'>{postData.title}</Text>
                <div >
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Back to all Blog Posts</a>
          </Link>
        </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
