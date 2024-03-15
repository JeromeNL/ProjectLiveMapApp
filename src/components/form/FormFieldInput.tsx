import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export interface FormFieldInputProps<T extends FieldValues> {
    label: string
    property: keyof T
    control: Control<T, any>
    placeholder?: string
    disabled?: boolean
    errors: any
}

const FormFieldInput = <T extends FieldValues>({
    label,
    property,
    control,
    placeholder,
    disabled,
    errors
}: FormFieldInputProps<T>) => {
    return (
        <View style={styles.inputContainer}>
            <Text>{label}</Text>
            <Controller
                control={control}
                // @ts-ignore
                name={property}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        value={value === undefined ? '' : value + ''}
                        editable={!disabled}
                    />
                )}
            />
            {errors && errors[property] && (
                <Text style={styles.validationError}>
                    {errors[property]?.message}
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 3
    },
    input: {
        borderWidth: 1,
        padding: 3
    },
    validationError: {
        color: '#F00'
    }
})

export default FormFieldInput
