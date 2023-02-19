import { useState, ChangeEvent } from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Switch,
  Checkbox,
  Link,
  Select,
} from '@chakra-ui/react';
import { FaAngleLeft, FaCarAlt, FaMotorcycle } from 'react-icons/fa';

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);

  const [insuranceType, setInsuranceType] = useState('car');
  // const [registrationInfo, setRegistrationInfo] = useState('nric');

  const [coverType, setCoverType] = useState('3rd_party');
  const [isEhailing, setIsEhailing] = useState(false);
  const [roadtaxIncluded, setRoadtaxIncluded] = useState(true);

  const closeModal = () => {
    setPage(1);
    onClose();
  };

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setCoverType(event.target.value);
  };

  const Form1 = () => {
    return (
      <>
        <Heading
          w='100%'
          textAlign={'center'}
          fontWeight='normal'
          as='h4'
          size='md'
          mb='2%'
          style={{ fontWeight: 'bold' }}
        >
          Please select your insurance type
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign='center'
          justify='center'
          align='center'
          spacing={{ base: 2, lg: 5 }}
        >
          <Box
            my={2}
            p={2}
            shadow='base'
            borderWidth='1px'
            w='100%'
            bg={insuranceType === 'car' ? 'yellow.300' : null}
            onClick={() => setInsuranceType('car')}
            borderColor={useColorModeValue('yellow.200', 'yellow.500')}
            borderRadius={'xl'}
          >
            <Flex align='center' justify='center' direction='column'>
              <FaCarAlt size={70} />
              <Text as='b' fontSize={18}>
                Car Insurance
              </Text>
            </Flex>
          </Box>
          <Box
            my={2}
            p={2}
            shadow='base'
            borderWidth='1px'
            w='100%'
            bg={insuranceType === 'motor' ? 'yellow.300' : null}
            onClick={() => setInsuranceType('motor')}
            borderColor={useColorModeValue('yellow.200', 'yellow.500')}
            borderRadius={'xl'}
          >
            <Flex align='center' justify='center' direction='column'>
              <FaMotorcycle size={70} />
              <Text as='b' fontSize={18}>
                Motorcycle Insurance
              </Text>
            </Flex>
          </Box>
        </Stack>

        {/* <Heading
          w='100%'
          textAlign={'center'}
          fontWeight='normal'
          as='h4'
          size='md'
          mt='5%'
          mb='2%'
          style={{ fontWeight: 'bold' }}
        >
          Please select your registration info
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign='center'
          justify='center'
          align='center'
          spacing={{ base: 3 }}
        >
          <Box
            my={2}
            p={2}
            shadow='base'
            borderWidth='1px'
            w='100%'
            bg={registrationInfo === 'nric' ? 'yellow.300' : null}
            onClick={() => setRegistrationInfo('nric')}
            borderColor={useColorModeValue('yellow.200', 'yellow.500')}
            borderRadius={'xl'}
          >
            <Flex align='center' justify='center' direction='column'>
              <Text as='b' fontSize={18}>
                NRIC/Army/Police IC
              </Text>
            </Flex>
          </Box>

          <Box
            mb={2}
            p={2}
            shadow='base'
            borderWidth='1px'
            w='100%'
            bg={registrationInfo === 'passport' ? 'yellow.300' : null}
            onClick={() => setRegistrationInfo('passport')}
            borderColor={useColorModeValue('yellow.200', 'yellow.500')}
            borderRadius={'xl'}
          >
            <Flex align='center' justify='center' direction='column'>
              <Text as='b' fontSize={18}>
                Register with Passport
              </Text>
            </Flex>
          </Box>

          <Box
            mb={2}
            p={2}
            shadow='base'
            borderWidth='1px'
            w='100%'
            bg={registrationInfo === 'company' ? 'yellow.300' : null}
            onClick={() => setRegistrationInfo('company')}
            borderColor={useColorModeValue('yellow.200', 'yellow.500')}
            borderRadius={'xl'}
          >
            <Flex align='center' justify='center' direction='column'>
              <Text as='b' fontSize={18}>
                Insure Company Vehicle
              </Text>
            </Flex>
          </Box>
        </Stack> */}

        <Button onClick={() => setPage(page + 1)} mt='4%' w='100%'>
          Next
        </Button>
      </>
    );
  };

  const Form2 = () => {
    return (
      <>
        <Heading
          w='100%'
          textAlign={'center'}
          fontWeight='normal'
          as='h4'
          size='md'
          mb='2%'
          style={{ fontWeight: 'bold' }}
        >
          Vehicle and Owner Details
        </Heading>
        <FormControl mt='2%'>
          <FormLabel htmlFor='email' fontWeight={'normal'} mb={0}>
            What&apos;s your Vehicle Registration Number?
            <br />
            <FormHelperText as='i' style={{ fontWeight: 'bold' }}>
              Private&#45;owned vehicle only.
            </FormHelperText>
          </FormLabel>
          <Input
            id='plate_num'
            type='text'
            placeholder='RTC1234'
            style={{ textTransform: 'uppercase' }}
          />
        </FormControl>

        <FormControl mt='2%'>
          <FormLabel htmlFor='email' fontWeight={'normal'}>
            Full Name (Based on NRIC)
          </FormLabel>
          <Input
            id='full_name'
            type='text'
            placeholder='Muhd Fazli bin Aiman'
          />
        </FormControl>

        <FormControl mt='2%'>
          <FormLabel htmlFor='email' fontWeight={'normal'}>
            NRIC Number
          </FormLabel>
          <Input id='nric' type='number' placeholder='900201-13-5679' />
        </FormControl>

        <FormControl mt='2%'>
          <FormLabel htmlFor='email' fontWeight={'normal'}>
            Police IC / Army IC (if applicable)
          </FormLabel>
          <Input
            id='nric'
            type='text'
            placeholder='RF12345'
            style={{ textTransform: 'uppercase' }}
          />
        </FormControl>

        {insuranceType === 'motor' ? (
          <FormControl alignItems='center' mt='2%'>
            <FormLabel htmlFor='is_ehailing' fontWeight={'normal'}>
              Which Cover Type do you prefer?
            </FormLabel>
            <Select
              placeholder='Select option'
              value={coverType}
              onChange={handleSelect}
            >
              <option value='1st_party'>Comprehensive (1st Party)</option>
              <option value='3rd_party'>Third Party</option>
            </Select>
          </FormControl>
        ) : null}

        <FormControl display='flex' alignItems='center' mt='2%'>
          <FormLabel htmlFor='is_ehailing' fontWeight={'normal'}>
            Is your vehicle used for e-hailing services?
          </FormLabel>
          <Switch
            id='is_ehailing'
            isChecked={isEhailing}
            onChange={() => setIsEhailing(!isEhailing)}
            colorScheme='green'
          />
        </FormControl>

        <FormControl display='flex' alignItems='center'>
          <FormLabel htmlFor='roadtax_included' fontWeight={'normal'}>
            Include Roadtax?
          </FormLabel>
          <Switch
            id='roadtax_included'
            isChecked={roadtaxIncluded}
            onChange={() => setRoadtaxIncluded(!roadtaxIncluded)}
            colorScheme='green'
          />
        </FormControl>

        <Button onClick={() => setPage(page + 1)} mt='2%' w='100%'>
          Next
        </Button>
      </>
    );
  };

  const Form3 = () => {
    const [tnc, setTnc] = useState(false);
    const [sendThroughWhatsapp, setSendThroughWhatsapp] = useState(true);

    return (
      <>
        <Heading
          w='100%'
          textAlign={'center'}
          fontWeight='normal'
          as='h4'
          size='md'
          mb='2%'
          style={{ fontWeight: 'bold' }}
        >
          Receiver Information
        </Heading>

        <FormControl mt='2%'>
          <FormLabel htmlFor='email' fontWeight={'normal'}>
            Email address
          </FormLabel>
          <Input
            id='email'
            type='email'
            placeholder='fazli.aiman@roadtaxcekap.com'
          />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
        </FormControl>

        <FormControl mt='2%'>
          <FormLabel htmlFor='email' mb={0} fontWeight={'normal'}>
            Whatsapp Number
          </FormLabel>
          <FormHelperText mt={0} as='i' mb={1} color='red'>
            Please provide WhatsApp phone number to receive quote
          </FormHelperText>
          <Input id='phone_num' type='number' placeholder='019-243 7890' />
        </FormControl>

        <FormControl mt='2%'>
          <FormLabel htmlFor='email' mb={0} fontWeight={'normal'}>
            Postcode for Cover Note
          </FormLabel>
          <FormHelperText mt={0} as='i' mb={1} color='red'>
            Note: Your quotation price is based on your postcode.
          </FormHelperText>
          <Input id='postcode' type='number' placeholder='50090' />
        </FormControl>

        <FormControl display='flex' alignItems='center' mt='2%'>
          <Checkbox colorScheme='green' defaultChecked={tnc} onChange={() => setTnc(!tnc)}>
            I agree to the{' '}
            <Link target='_blank' href='/tnc' color='blue.500'>
              Terms & Conditions
            </Link>
          </Checkbox>
        </FormControl>

        <FormControl display='flex' alignItems='center' mt='2%'>
          <Checkbox colorScheme='green' defaultChecked={sendThroughWhatsapp} onChange={() => setSendThroughWhatsapp(!sendThroughWhatsapp)}>
            Yes, send my quote via Whatsapp
          </Checkbox>
        </FormControl>

        <Button onClick={closeModal} mt='2%' w='100%'>
          Submit
        </Button>
      </>
    );
  };

  return (
    <Container maxW={'7xl'}>
      <>
        <Modal
          onClose={closeModal}
          isOpen={isOpen}
          scrollBehavior='inside'
          size='full'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader align='center'>
              Quotation Insurans & Roadtax Kenderaan
            </ModalHeader>
            {/* <ModalCloseButton size='lg' /> */}
            <ModalBody
              px={10}
              w={{ base: '100%', sm: '100%', md: '80%', lg: '80%' }}
              mx='auto'
            >
              <Button
                onClick={() => {
                  page === 3
                    ? setPage(2)
                    : page === 2
                      ? setPage(1)
                      : closeModal();
                }}
                mb={4}
                colorScheme='yellow'
                variant='solid'
                leftIcon={<FaAngleLeft />}
              >
                {page === 1 ? 'Close' : 'Back'}
              </Button>
              {page === 1 ? <Form1 /> : page === 2 ? <Form2 /> : <Form3 />}
            </ModalBody>
            <ModalFooter>
              <Button onClick={closeModal}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: '""',
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  // bg: 'red.400',
                  zIndex: -1,
                }}
              >
                Perbaharui Insuran Kenderaan anda
              </Text>
              {/* <br /> */}
              <Text as={'span'} color={'red.400'}>
                {' '}
                sekarang!
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'lg', lg: '2xl' }}>
              Bandingkan Harga Insurans Dengan Klik Dibawah
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }}
                onClick={onOpen}
              >
                Get Free Quote
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
              >
                How It Works
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <IconButton
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                icon={<PlayIcon w={12} h={12} />}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
              />
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox='0 0 578 440'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z'
        fill='currentColor'
      />
    </Icon>
  );
};
