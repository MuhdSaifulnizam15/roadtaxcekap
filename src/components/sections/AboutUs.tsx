import {
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function AboutUs() {
  return (
    <Stack minH={'100'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: '',
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              Roadtax Cekap
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Roadtax Cekap ialah sebuah &apos;branding&apos; dari Syarikat F&#38;A Motors
            Enterprise berdaftar dengan Suruhanjaya Syarikat Malaysia (SSM)
            dengan nombor pendaftaran IP0567340-H. Roadtax Cekap menyediakan
            servis renew roadtax insurans, tukar nama kenderaan, puspakom &#38;
            urusan JPJ. Kami hanya menyediakan Takaful kerana ia patuh Syariah
            di sisi Islam berbanding Insurans. Kami adalah ejen berdaftar &#38; sah
            di bawah Etiqa Takaful, Zurich Takaful, Takaful Ikhlas &#38; Takaful
            Malaysia.
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
