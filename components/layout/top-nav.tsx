import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { ColorModeSwitcher } from "../ui/ColorModeSwitcher";
// import UserIcon from "assets/images/user_icon.png";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import NextLink from "next/link";


// in the future if there is anything that needs to be displayed in the nav bar 
// then its easier to  just add them in here and map 
const webLinks = [

  { name: "Blog", path: "/blog" }
];

const mobileLinks = [
  
  { name: "Github-Repos", path: "/github-repos" },
  { name: "Blog", path: "/blog" },
  { name: "Tech Stack", path: "/tech-stack" },
  
  // { name: "Developer Story", path: "/developer-story" }
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const link = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200")
  }
  return (
    <NextLink href={props.path} passHref >
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: link.bg
        }}
        _activeLink={{
          color: link.color
        }}
        onClick={() => props.onClose()}
        // to={props.path}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.900"),
    color: useColorModeValue("blue.500", "blue.200")
  };

  return (
    <>
    {/*  values used in Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"} */}

      <Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>

        {/* values used in flex lex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx="auto" */}

        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NextLink href={"/"} passHref>
                <Avatar
                  as={Link}
                  size={"sm"}
                  // src={UserIcon}
                  src={"https://avatars.githubusercontent.com/u/44758505?s=400&u=8860621a6d168666d84ffdcc0653d1e843d61e0d&v=4"}
                />
              </NextLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
              <Menu isLazy>
                {({ isOpen, onClose }) => (
                  <>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      size="sm"
                      px={2}
                      py={1.5}
                      fontSize={"1em"}
                      rounded={"md"}
                      height={"auto "}
                      _hover={menuProps}
                      _expanded={menuProps}
                      _focus={{ boxShadow: "outline" }}
                      rightIcon={<BiChevronDown size={18} />}
                    >
                      Links
                    </MenuButton>
                    <MenuList zIndex={5}>
                      <NextLink href={"/tech-stack"} passHref>
                        <Link onClick={onClose}>
                        <MenuItem>
                          <HStack>
                            <Icon
                              as={AiTwotoneThunderbolt}
                              size={18}
                              color={menuProps.color}
                            />
                            <Text>Tech Stack</Text>
                          </HStack>
                        </MenuItem>
                        </Link>
                      </NextLink>
                      <NextLink href={"/github-repos"} passHref>
                        <Link onClick={onClose}>
                          <MenuItem>
                            <HStack>
                              <Icon
                                as={BsBook}
                                size={18}
                                color={menuProps.color}
                              />
                              <Text>Github-Repos</Text>
                            </HStack>
                          </MenuItem>
                        </Link>
                      </NextLink>
                    </MenuList>
                  </>
                )}
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <IconButton
              as={Link}
              href={"https://github.com/Mothergoose31"}
              size={"md"}
              icon={<FaGithub />}
              aria-label={"Github account"}
              bg={useColorModeValue("white", "gray.700")}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.900")
              }}
            />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {mobileLinks.map((link, index) => (
                <NavLink
                  key={index}
                  index={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
