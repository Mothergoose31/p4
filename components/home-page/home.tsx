import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,

}from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "../ui/motion";
import Header from "../layout/header";
import Projects from "./projects";
import NextLink from 'next/link'


const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

interface HomeProps {
  projects: project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {

  return (
    
    
    <Flex direction="column" align="center">


      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size={"2xl"}
            // src={UserIcon}
            src={'https://avatars.githubusercontent.com/u/44758505?s=400&u=8860621a6d168666d84ffdcc0653d1e843d61e0d&v=4'}
          />
        </MotionBox>

        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0}>
            Hello!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{" "}
            <Box as="strong" fontWeight="600">
              Joseph
            </Box>{" "}
            I&apos;m a{" "}
            <Box as="span" whiteSpace="nowrap">
                Software Engineer 
            </Box>{" "}
          
            from{" "}
            <Box as="span" whiteSpace="nowrap">
              Seattle, Washington
            </Box>

          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
              I hold a fascination for exploring technological, socioeconomic, and environmental  trends.
              To explorer and predict possibilities about the future. And how stratification of
              those trends will affect human well being.
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            On this site you will find  projects I have created in the past ,notes on bugs Ive encounted, and my socials. 
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#53c8c4" fontWeight="bold">
              Highlights
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
              <ListItem>
                <NextLink href={'/github-repos'} passHref>
                  <Link>
                    Live/Local Github Repos
                  <Badge ml="1" colorScheme="green">
                      New
                  </Badge>
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href={'/tech-stack'} passHref>
                  <Link>
                    Tech Stack
                </Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Projects projects={projects} />
        </Box>
      </MotionBox>
    </Flex>
    
  );
};

export default Home;
