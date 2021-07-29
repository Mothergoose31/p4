import { Fragment } from 'react';

import {

  Stack,
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";


import Date from '../components/date/date.js'
import { CardTransition, PageSlideFade, StaggerChildren } from "../components/ui/page-transitions";
import Header from "../components/layout/header";

import Meta from '../components/layout/meta';

import styles from '../styles/blog.module.css'

import { getSortedPostsData } from '../libs/posts.js';


export function getStaticProps() {
  const postData = getSortedPostsData();
  return {
    props: {
      postData
    },
  };
}



const TURQUOISE = "#06b6d4";

const Posts = ({ postData }) => {
  console.log(postData)
  return (
    <Fragment>
      <Meta title='Blog' description='A list of all articles and posts!' />
      <PageSlideFade>

        <Header underlineColor={TURQUOISE} mt={0} mb={0}>
          Most Recent Blog Posts
        </Header>
        <br/>
        
        <StaggerChildren>
          <Stack spacing={4} mt={12}>

            <ul className={styles.ulRemove} >
              {postData.map(({ id, date, title }) => (
                <li key={id}>
                  <CardTransition>
                    <VStack
                      spacing={1}
                      p={4}
                      _hover={{ shadow: "md", textDecoration: "none" }}
                      borderWidth="1px"
                      position="relative"
                      rounded="md"
                      bg={useColorModeValue("white", "gray.800")}
                      align="left"
                    >
                      <Link href={`/posts/${id}`}>
                        <Heading fontSize="lg" align="left" mt={0}>

                          <Text>
                            {title}
                          </Text>

                        </Heading>
                      </Link>
                      <HStack spacing={2} isInline>
                        <Tooltip hasArrow label="Published" placement="top">
                          <Text fontSize="sm" fontWeight="400" >
                            <Date dateString={date} />
                          </Text>
                        </Tooltip>
                      </HStack>
                    </VStack>
                  </CardTransition>
                  
                </li>
              ))}
            </ul>

          </Stack>
        </StaggerChildren>
      </PageSlideFade>
    </Fragment>
  );
};



export default Posts;


