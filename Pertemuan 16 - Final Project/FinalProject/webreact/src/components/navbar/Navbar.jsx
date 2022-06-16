import {
    Box,
    Flex,
    Button,
    Text,
    IconButton,
    Avatar,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    HStack,
    Icon,
    Badge
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    SunIcon,
    MoonIcon
} from '@chakra-ui/icons';

import {
    FiShoppingCart
} from 'react-icons/fi'

import {
    useDispatch,
    useSelector
} from 'react-redux';

import { actFetchCartNumber } from '../../actions/products';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchCartNumber())
    }, [])

    const numberCart = useSelector((state) => state._todoProduct.numberCart)

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'sans-serif'}
                        color={useColorModeValue('gray.900', 'white')}>
                        <Link to='/'> Rifkie Shop </Link>
                    </Text>
                </Flex>

                <HStack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    alignItems={'center'}
                    spacing={2}>
                    <Link to='/cart'>
                        <Button variant={'ghost'}>
                            <Icon
                                as={FiShoppingCart}
                                w={5}
                                h={5}
                                color={useColorModeValue('gray.800', 'white')}
                                mt={3} />
                            <Badge
                                colorScheme={'blue'}
                                ml={-1}
                                fontSize={'md'}>
                                {numberCart}
                            </Badge>
                        </Button>
                    </Link>
                    <Button variant={'ghost'} onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Avatar
                        size={'sm'}
                        src={
                            'https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        }
                    />
                </HStack>
            </Flex>
        </Box>
    );
}

export default Navbar;