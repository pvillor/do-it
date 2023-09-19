import { Grid, Heading, Image, Text } from "@chakra-ui/react";
import LogoPrimary from "../../assets/logo-primary.svg";

export const LoginInfo = () => (
	<Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
		<Image
			src={LogoPrimary}
			alt="doit"
			boxSize={["120px", "120px", "150px", "150px"]}
		/>
		<Heading mt="4" as="h1">
			O jeito fácil, grátis
		</Heading>
		<Text maxW="350px">
			Flexível e atrativo de gerenciar
			<p>seus projetos em uma única plataforma</p>
		</Text>
	</Grid>
);
