import { Controller } from "react-hook-form";
import { control } from "../../types/ReactHookFormTypes";
import { StyleInput } from "../../types/InputsTypes";
import { FC, JSXElementConstructor } from "react";
import { Text, TextInput, View } from "react-native";

type InputProps = {
  name: string;
  rules: object;
  control: control;
  styles: StyleInput;
  cursorColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  marginBottom?: number;
  secureTextEntry?: boolean;
  icon?: JSX.Element;
  onPressIn?: () => void;
};

export const ControllerTextInput: FC<InputProps> = ({
  name,
  rules,
  control,
  styles,
  cursorColor,
  placeholder,
  placeholderTextColor,
  marginBottom,
  secureTextEntry,
  icon,
  onPressIn,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.inputWrapper,
              { marginBottom },
              { borderColor: error ? "#e74c3c" : styles.borderColor },
            ]}
          >
            <TextInput
              key={name}
              value={value}
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              secureTextEntry={secureTextEntry}
              onChangeText={onChange}
              onBlur={onBlur}
              onPressIn={onPressIn}
              clearButtonMode="never"
              defaultValue=""
              cursorColor={cursorColor}
              keyboardAppearance="default"
              scrollEnabled={false}
              clearTextOnFocus={false}
            />
            {icon}
          </View>
          {error && (
            <Text style={styles.error}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
  );
};
