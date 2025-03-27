// Chakra imports
import {
  Portal,
  useDisclosure,
  Stack,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import Configurator from "components/Configurator/Configurator";
import Footer from "components/Footer/Footer.js";
import {
  ArgonLogoDark,
  ChakraLogoDark,
  ChakraLogoLight,
  QuantivexLogo,
} from "components/Icons/Icons";
// Layout components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import React, { useState } from "react";
import routes from "routes.js";
// Custom Chakra theme
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
// Custom components
import PanelContent from "../components/Layout/PanelContent";
import PanelContainer from "../components/Layout/PanelContainer";
import MainPanel from "../components/Layout/MainPanel";
import bgAdmin from "assets/img/admin-background.png";
import Landing from "views/Pages/Landing.js";

export default function Dashboard(props) {
  const { ...rest } = props;
  const [fixed, setFixed] = useState(false);
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";

  return (
    <Box>
      <Box
        minH="40vh"
        w="100%"
        position="absolute"
        bgImage={colorMode === "light" ? bgAdmin : "none"}
        bg={colorMode === "light" ? bgAdmin : "navy.900"}
        bgSize="cover"
        top="0"
      />
      <Sidebar
        routes={routes}
        logo={
          <Stack direction="row" spacing="12px" align="center" justify="center">
            {colorMode === "dark" ? (
              <QuantivexLogo w="74px" h="27px" />
            ) : (
              <ArgonLogoDark w="74px" h="27px" />
            )}
            <Box
              w="1px"
              h="20px"
              bg={colorMode === "dark" ? "white" : "gray.700"}
            />
            {colorMode === "dark" ? (
              <ChakraLogoLight w="82px" h="21px" />
            ) : (
              <ChakraLogoDark w="82px" h="21px" />
            )}
          </Stack>
        }
        display="none"
        {...rest}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            brandText='Landing'
            fixed={fixed}
            {...rest}
          />
        </Portal>
        <PanelContent>
          <PanelContainer>
            <Landing />
          </PanelContainer>
        </PanelContent>
        <Footer />
        <Portal>
          <FixedPlugin
            fixed={fixed}
            onOpen={onOpen}
          />
        </Portal>
        <Configurator
          isOpen={isOpen}
          onClose={onClose}
          isChecked={fixed}
          onSwitch={(value) => {
            setFixed(value);
          }}
        />
      </MainPanel>
    </Box>
  );
}
