import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";




export function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            correo: '',
            contrasena: ''
        }
      });
    return(
  
      <View>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
           label="Email"
           mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="correo"
      />

<Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
           label="Contraseña"
           mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="contrasena"
      />
      </View>
    );
}