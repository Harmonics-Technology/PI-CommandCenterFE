import {
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { FieldError, UseFormRegister, Path } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { IsRequiredSign } from './IsRequiredSign';
import { OptionSelection } from './OptionSelection';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
    name: Path<TFormValues>;
    placeholder?: string;
    fontSize?: string;
    label?: string;
    register: UseFormRegister<TFormValues>;
    error?: FieldError | undefined;
    type?: string;
    required?: boolean;
    disableLabel?: boolean;
    validate?: any;
    icon?: boolean;
    variant?: string;
    borderColor?: string;
    borderRadius?: string;
    placeholderColor?: string;
    defaultValue?: any;
    format?: string;
    value?: string | number | undefined;
    testId?: string;
    w?: string;
    padding?: string;
    onChange?: any;
    iconClass?: string | undefined;
    changePasswordType?: any;
    border?: string;
    passwordVisible?: boolean;
    changeVisibility?: any;
    h?: string;
    readonly?: boolean;
    isRequired?: boolean;
    isOptions?: boolean;
    setCurrent?: any;
    current?: any;
    options?: string[];
    color?: string;
}
export const PrimaryInput = <TFormValues extends Record<string, any>>({
    name,
    required = false,
    type = 'text',
    label = '',
    register,
    validate = {},
    error,
    disableLabel = false,
    placeholder = '',
    fontSize = '.8rem',
    passwordVisible,
    defaultValue,
    changeVisibility,
    border,
    borderColor = 'gray.300',
    icon,
    h = '2.6rem',
    readonly = false,
    isRequired,
    isOptions,
    setCurrent,
    current,
    options,
    color,
}: FormInputProps<TFormValues>) => {
    return (
        <FormControl
            isInvalid={
                error?.type === 'required' || error?.message !== undefined
            }
        >
            <Flex justify="space-between" align="center">
                <FormLabel
                    htmlFor={label}
                    textTransform="capitalize"
                    width="fit-content"
                    fontSize={fontSize}
                    mb="0"
                    color={color}
                >
                    {label}
                </FormLabel>
                {isOptions && (
                    <OptionSelection
                        name={options}
                        current={current}
                        setCurrent={setCurrent}
                    />
                )}
                {isRequired && <IsRequiredSign />}
            </Flex>

            <InputGroup>
                <Input
                    type={type}
                    placeholder={placeholder}
                    variant="outline"
                    {...register(name, { required, ...validate })}
                    defaultValue={defaultValue}
                    disabled={disableLabel}
                    border={border}
                    borderColor={borderColor}
                    borderRadius="0"
                    h={h}
                    isReadOnly={readonly}
                    bgColor="white"
                />
                {icon && (
                    <InputRightElement
                        onClick={() => changeVisibility()}
                        cursor="pointer"
                        color="brand.200"
                    >
                        {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </InputRightElement>
                )}
                {isOptions && (
                    <InputRightElement
                        color="brand.200"
                        margin="0 .3rem 0 auto"
                        fontSize=".8rem"
                        zIndex={0}
                    >
                        {current}
                    </InputRightElement>
                )}
            </InputGroup>
            <FormErrorMessage fontSize=".7rem" color="red">
                {(error?.type === 'required' && `${label} is required`) ||
                    error?.message}
            </FormErrorMessage>
        </FormControl>
    );
};
