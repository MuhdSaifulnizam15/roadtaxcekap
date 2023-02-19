import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  Button,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  LinkOverlay,
  Flex,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/join-us"}>Join Us</Link>
            <Link href={"/contact-us"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"/faqs"}>FAQs</Link>
            <Link href={"/roadtax"}>Roadtax</Link>
            <Link href={"/tnc"}>Terms & Conditions</Link>
            <Link href={"/renewal-guide"}>Renewal Guide</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Talk to us</ListHeader>
            <Button
              px={6}
              color={"white"}
              bg={"green"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              <Flex direction={"row"} align={"center"} justify={"center"}>
                <FaWhatsapp size={"1.5em"} />
                <LinkOverlay
                  ml={"1"}
                  target="_blank"
                  href={
                    "https://api.whatsapp.com/send?phone=601154188237&text=Quotation%20Takaful%2C%20RoadTax%20%26%20Urusan%20JPJ.%20%20F%26A%20MOTORS.%F0%9F%8F%8D%EF%B8%8F%F0%9F%9A%97"
                  }
                >
                  Whatsapp
                </LinkOverlay>
              </Flex>
            </Button>

            <Button
              px={6}
              color={"white"}
              bg={"blue"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              <Flex direction={"row"} align={"center"} justify={"center"}>
                <FaFacebookMessenger size={"1.2em"} />
                <LinkOverlay
                  target="_blank"
                  href={"https://m.me/famotorsmy"}
                  ml={"1"}
                >
                  Messenger
                </LinkOverlay>
              </Flex>
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>
            © {new Date().getFullYear()} Roadtax Cekap & F&A Motors. All rights
            reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Facebook"}
              href={"https://www.facebook.com/famotorsmy"}
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/famotorsmy/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
