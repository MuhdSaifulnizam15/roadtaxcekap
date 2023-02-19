import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: '""',
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

// const TestimonialHeading = ({ children }: { children: ReactNode }) => {
//   return (
//     <Heading as={'h3'} fontSize={'xl'}>
//       {children}
//     </Heading>
//   );
// };

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} justify={'center'} mt={8} direction={'row'}>
      <Avatar src={src} alt={name} mr={'2'} size='xl' />
      <Flex align={'center'} justify={'center'} direction={'column'}>
        <Stack spacing={-1} justify={'center'} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text
            fontSize={'sm'}
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {title}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} pb={16} pt={6} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients across Malaysia</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              {/* <TestimonialHeading>Efficient Collaborating</TestimonialHeading> */}
              <TestimonialText>
                Cepat, Pantas, dan semudah ABC. By WhatsApp je
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Azmeer'}
              title={'Kuala Lumpur'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              {/* <TestimonialHeading>Intuitive Design</TestimonialHeading> */}
              <TestimonialText>
                Urusan Puspakom, Tukar nama dan roadtax insurans lancar. Sehari
                je siap sekali geran baru
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Khairul'}
              title={'Damansara'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              {/* <TestimonialHeading>Mindblowing Service</TestimonialHeading> */}
              <TestimonialText>
                Servis terbaik & tiptop. Recommended. Setiap tahun akan remind
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Abu Bakar'}
              title={'Penang'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              {/* <TestimonialHeading>Mindblowing Service</TestimonialHeading> */}
              <TestimonialText>
                Laju & amanah. Satu pejabat saya renew dengan Roadtax Cekap
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Abdul Rahim'}
              title={'Shah Alam'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
