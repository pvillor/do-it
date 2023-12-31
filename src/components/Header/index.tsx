import {
	Center,
	Flex,
	Heading,
	Image,
	theme,
	useDisclosure,
} from "@chakra-ui/react";
import Logo from "../../assets/logo-min.svg";
import { Menu } from "./Menu";
import { FaTh } from "react-icons/fa";

export const Header = () => {
	const { onClose, isOpen, onToggle } = useDisclosure();
	return (
		<Flex
			borderBottom="1px"
			borderBottomColor="#f5f5f5"
			paddingX="8"
			paddingY="2"
		>
			<Flex align="center">
				<Image src={Logo} />
				<Heading ml="4" size="lg">
					Dashboard
				</Heading>
			</Flex>
			<Center ml="auto" onClick={onToggle} as="button" fontSize="3rem">
				<FaTh color={theme.colors.gray[300]} />
			</Center>
			<Menu onClose={onClose} isOpen={isOpen} />
		</Flex>
	);
};
