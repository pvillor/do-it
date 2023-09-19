import { Center } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useHistory } from "react-router-dom";

interface GoBackButtonProps {
	top: string;
	left: string;
}

export const GoBackButton = ({ top, left }: GoBackButtonProps) => {
	const history = useHistory();

	return (
		<Center
			backgroundColor="purple.500"
			fontSize="2xl"
			borderRadius="md"
			as="button"
			position="absolute"
			top={top}
			left={left}
			w={["60px", "80px"]}
			h="60px"
			_hover={{ bg: "purple.600" }}
			onClick={() => history.push("/")}
		>
			<FaArrowLeft color={theme.colors.white} />
		</Center>
	);
};
