import {
    Text,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
} from '@chakra-ui/react';
import { Control, Controller, FieldError, Path } from 'react-hook-form';
import Select from 'react-select';
interface select {
    options: [];
    customKeys: { key: string | number | boolean; label: string };
    onChange: (value: any) => void;
    placeholder?: string;
    disabled?: boolean;
    searchable?: boolean;
    onRenderSelection?: any;
    onRenderOption?: any;
}
import dynamic from 'next/dynamic';
import { UserView } from 'src/services';
import { useState } from 'react';
import { IsRequiredSign } from './IsRequiredSign';
const Selectrix = dynamic<select>(() => import('react-selectrix'), {
    ssr: false,
});

interface FormInputProps<TFormValues extends Record<string, unknown>> {
    name: Path<TFormValues>;
    placeholder?: string;
    error: FieldError | undefined;
    label?: string;
    fontSize?: string;
    options: any;
    keys: any;
    keyLabel: any;
    control: Control<TFormValues>;
    disabled?: boolean;
    renderSelection?: any;
    customOnchange?: any;
    searchable?: boolean;
    renderOption?: any;
    withIcon?: any;
    isRequired?: boolean;
}
export const SelectrixBox = <TFormValues extends Record<string, any>>({
    name,
    placeholder,
    error,
    label = '',
    fontSize = '.8rem',
    options,
    keys,
    keyLabel,
    control,
    disabled,
    renderSelection,
    customOnchange,
    searchable = false,
    renderOption,
    withIcon = false,
    isRequired,
}: FormInputProps<TFormValues>) => {
    // console.log({ customOnchange });
    return (
        <FormControl isInvalid={error?.type === 'required'} minW="0">
            {label && (
                <Flex justify="space-between">
                    <FormLabel
                        htmlFor={label}
                        textTransform="capitalize"
                        width="fit-content"
                        fontSize={fontSize}
                    >
                        {label}
                    </FormLabel>
                    {isRequired && <IsRequiredSign />}
                </Flex>
            )}

            <Controller
                render={({ field: { onChange } }) => (
                    <Selectrix
                        options={options}
                        placeholder={placeholder}
                        disabled={disabled}
                        customKeys={{
                            key: keys,
                            label: keyLabel,
                        }}
                        onChange={
                            customOnchange
                                ? customOnchange
                                : (value) => onChange(value.key)
                        }
                        searchable={searchable}
                        onRenderSelection={
                            renderSelection ? renderSelection : false
                        }
                        onRenderOption={renderOption}
                    />
                )}
                name={name}
                control={control}
                // rules={{ required: true }}
            />
            {/* <Controller
                control={control}
                defaultValue={options.map((c) => c.value)}
                name={name}
                render={({ field: { onChange, value, ref } }) => (
                    <Select
                        ref={ref}
                        onChange={(val) => onChange(val)}
                        options={options}
                        getOptionLabel={keyLabel}
                        getOptionValue={keys}
                    />
                )}
            /> */}
            <FormErrorMessage fontSize=".7rem">
                {(error?.type === 'required' && `${label} is required`) ||
                    error?.message}
            </FormErrorMessage>
        </FormControl>
    );
};
