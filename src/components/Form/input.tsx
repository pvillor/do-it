import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
	InputLeftElement,
	InputGroup,
} from "@chakra-ui/react";

import {
	useState,
	useEffect,
	useCallback,
	ForwardRefRenderFunction,
	forwardRef,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	error?: FieldError | null;
	icon?: IconType;
}

type inputVariationOptions = {
	[key: string]: string;
};

const inputVariation: inputVariationOptions = {
	error: "red.500",
	default: "gray.200",
	focus: "purple.800",
	filled: "green.500",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, error = null, icon: Icon, ...rest },
	ref
) => {
	const [value, setValue] = useState("");
	const [variation, setVariation] = useState("default");

	useEffect(() => {
		if (error) {
			return setVariation("error");
		}
	}, [error]);

	const handleInputFocus = useCallback(() => {
		if (!error) {
			setVariation("focus");
		}
	}, [error]);

	const handleInputBlur = useCallback(() => {
		if (value.length > 1 && !error) {
			return setVariation("filled");
		}
	}, [error, value]);

	return (
		<FormControl isInvalid={!!error}>
			{!!label && <FormLabel color="gray.400">{label}</FormLabel>}

			<InputGroup flexDirection="column">
				{Icon && (
					<InputLeftElement color={inputVariation[variation]} mt="2.5">
						<Icon />
					</InputLeftElement>
				)}

				<ChakraInput
					id={name}
					name={name}
					bg="gray.50"
					onChangeCapture={(e) => setValue(e.currentTarget.value)}
					color={inputVariation[variation]}
					borderColor={inputVariation[variation]}
					onFocus={handleInputFocus}
					onBlurCapture={handleInputBlur}
					variant="outline"
					_hover={{ bgColor: "gray.100" }}
					_placeholder={{ color: "gray.300" }}
					size="lg"
					h="60px"
					ref={ref}
					{...rest}
				/>

				{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
			</InputGroup>
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
