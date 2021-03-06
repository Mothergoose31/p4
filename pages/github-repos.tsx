import React,{useState} from "react";
import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  IconButton,
  Tooltip
} from "@chakra-ui/react";

import { PageSlideFade } from "../components/ui/page-transitions";
import Header from "../components/layout/header";
import { RiSignalTowerLine, RiWifiOffLine } from "react-icons/ri";
import OfflineData from "../components/open-source/offline-data";
import LiveData from "../components/open-source/live-data";
import { repositories } from "../data/repositories";
import useSound from "use-sound";
import Meta from '../components/layout/meta';

const TURQUOISE = "#06b6d4";

const iconProps = {
  variant: "ghost",
  size: "md",
  isRound: true
};

const RepositoriesList = ({ repositories }) => {
  
  const [activeTab, setActiveTab] = useState("live");

  const [play] = useSound('/assets/audios/lightswitch.mp3', {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  });

  const handleClick = (type) => {
    activeTab === "live" ? play({ id: "on" }) : play({ id: "off" });
    setActiveTab(type)
  }

  return (
    <React.Fragment>
      <Meta title='Github-repos' keywords="A list of some Github projects" />
      <PageSlideFade>
        <VStack align="start" spacing={3}>
          <HStack justifyContent={"space-between"} width={"100%"}>
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Github-Repos
          </Header>
            <HStack>
              <Tooltip hasArrow label="Live github repos" placement="top">
                <IconButton
                  aria-label={"live"}
                  size="md"
                  colorScheme={"linkedin"}
                  icon={<RiSignalTowerLine />}
                  isActive={activeTab === "live"}
                  onClick={() => handleClick('live')}
                  {...iconProps}
                />
              </Tooltip>
              <Tooltip hasArrow label="Local github repos" placement="top">
                <IconButton
                  aria-label={"live"}
                  size="md"
                  colorScheme={"linkedin"}
                  icon={<RiWifiOffLine />}
                  isActive={activeTab === "offline"}
                  onClick={() => handleClick('offline')}
                  {...iconProps}
                />
              </Tooltip>
            </HStack>
          </HStack>
          <Text
            color={useColorModeValue("gray.500", "gray.200")}
            textAlign="left"
          >
            This page lists some of my github repositories I have published
            or contributed to.
        </Text>
        </VStack>
        {activeTab === "live" ? <LiveData /> : <OfflineData repositories={repositories} />}
      </PageSlideFade>
    </React.Fragment>
  );
};

export function getStaticProps() {
  return {
    props: {
      repositories
    },
  };
}

export default RepositoriesList;
