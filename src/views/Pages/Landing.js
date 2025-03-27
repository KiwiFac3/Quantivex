// Chakra imports
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import PieChart from "components/Charts/PieChart";
import CoffeeShopMap from "components/Charts/MapChart";

import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
// Variables
import {
  revenueChartData,
  revenueChartOptions,
  ROIChartData,
  ROIChartOptions,
  AOVChartData,
  SPSFChartData,
  coffeeChartData,
  coffeeChartOptions,
  coffeeShopsData
} from "variables/charts";
import { SPSFChartOptions } from "variables/charts";

export default function Dashboard() {
  // Chakra Color Mode
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px" mb="20px">
        <Card minH="125px">
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Today's Money
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    $53,897
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                +3.48%{" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>
        <Card minH="125px">
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Today's Users
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    $3,200
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                +5.2%{" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>
        <Card minH="125px">
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  New Clients
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    +2,503
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="red.500" fontWeight="bold">
                -2.82%{" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>
        <Card minH="125px">
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Total Sales
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    $173,000
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                +8.12%{" "}
              </Text>
              Since last month
            </Text>
          </Flex>
        </Card>
      </SimpleGrid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap="20px"
      >
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color={textColor} fontSize="lg" fontWeight="bold" mb="6px">
              Monthly Revenue Trend (in $K)
            </Text>
            <Text color={textColor} fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                (+2) more{" "}
              </Text>
              in May
            </Text>
          </Flex>
          <Box minH="300px">
            <LineChart
              chartData={revenueChartData}
              chartOptions={revenueChartOptions}
            />
          </Box>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color={textColor} fontSize="lg" fontWeight="bold">
              Marketing ROI (in $K)
            </Text>
          </Flex>
          <Box minH="300px">
            <BarChart chartData={ROIChartData} chartOptions={ROIChartOptions} />
          </Box>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color={textColor} fontSize="lg" fontWeight="bold" mb="6px">
              Average Order Value (AOV) Trend
            </Text>
            <Text color={textColor} fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                (+0.5) more{" "}
              </Text>
              in May
            </Text>
          </Flex>
          <Box minH="300px">
            <LineChart
              chartData={AOVChartData}
              chartOptions={revenueChartOptions}
            />
          </Box>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color={textColor} fontSize="lg" fontWeight="bold">
              Sales Per Square Foot
            </Text>
          </Flex>
          <Box minH="300px">
            <BarChart
              chartData={SPSFChartData}
              chartOptions={SPSFChartOptions}
            />
          </Box>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color={textColor} fontSize="lg" fontWeight="bold">
              Best-Selling Coffee Types
            </Text>
          </Flex>
          <Box minH="300px">
            <PieChart
              chartData={coffeeChartData}
              chartOptions={coffeeChartOptions}
            />
          </Box>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color={textColor} fontSize="lg" fontWeight="bold">
              Best-Selling Coffee Types
            </Text>
          </Flex>
          <Box minH="300px">
            <CoffeeShopMap 
            coffeeShopsData={coffeeShopsData}
            center={[39.0997, -94.5786]}/>
            
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}
