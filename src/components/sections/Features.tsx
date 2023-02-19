import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { ReactElement } from "react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

// Replace test data with your own
const features = [
  {
    id: 1,
    title: "TRANSFER OF VEHICLE OWNERSHIP",
    text: "Avoid the hassel waiting in line at JPJ office. Do your transfer of vehicle ownership at our outlets",
  },
  {
    id: 2,
    title: "4-HOUR EXPRESS DELIVERY",
    text: "Get road tax delivered to your doorstep within 4 hours. We collaborate with reliable riders and courier service such as Lalamove, Grab and Citylink",
  },
  {
    id: 1,
    title: "TRAFFIC SUMMONS",
    text: "Oops, receive a traffic summon ? We can help you settle summons from MBPJ, JPJ, DBKL and PDRM",
  },
  {
    id: 2,
    title: "ONLINE & OFFLINE RENEWAL SERVICES",
    text: "You can renew either at our 15 MYEG outlets around Klang Valley or via our online system. Outlets can be found near JPJ, Post Office and shopping malls",
  },
  {
    id: 1,
    title: "DRIVING LICENSE",
    text: "Renew your driving license with us at your convenience",
  },
  {
    id: 2,
    title: "COMPARE & CHOOSE MADE EASY",
    text: "It’s easy to compare and choose a variety of insurance to spot the one that suits your needs",
  },
];

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Our Services</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Roadtax Cekap menyediakan servis renew roadtax insurans, tukar nama
          kenderaan, puspakom & urusan JPJ. Kami hanya menyediakan Takaful
          kerana ia patuh Syariah di sisi Islam berbanding Insurans. Kami adalah
          ejen berdaftar & sah di bawah Etiqa Takaful, Zurich Takaful, Takaful
          Ikhlas & Takaful Malaysia.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
