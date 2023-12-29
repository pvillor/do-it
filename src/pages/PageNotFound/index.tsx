import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import NotFoundImg from "../../assets/notfound.png";
import { useHistory } from "react-router-dom";

export const PageNotFound = () => {
	const history = useHistory();
	return (
		<Flex
			padding={["10px 15px", "10px 15px", "0", "0"]}
			alignItems="center"
			justifyContent="space-evenly"
			height={["auto", "auto", "100vh", "100vh"]}
			flexDir={["column-reverse", "column-reverse", "row", "row"]}
		>
			<Box>
				<Heading mt="4">Oooops!</Heading>
				<Text mt="4">
					Não encontramos a página que você procurou, <br />
					<b>vamos tentar novamente.</b>
				</Text>
				<Button
					mt="4"
					bg="red.600"
					h="60px"
					color="white"
					w="100%"
					_hover={{ bg: "red.700" }}
					onClick={() => history.push("/")}
				>
					Ir para as minhas tarefas
				</Button>
			</Box>
			<Image src={NotFoundImg} />
		</Flex>
	);
};
