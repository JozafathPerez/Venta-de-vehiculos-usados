import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function LoginScreen({ navigation }) {
    const tailwind = useTailwind();

    return (
        <View style={tailwind('flex-1 bg-gray-100 p-4')}>
            <Text style={tailwind('text-2xl font-bold text-gray-800 mb-6 text-center')}>Registro de Usuario</Text>
            
            <TextInput
                style={tailwind('border border-gray-300 rounded p-2 mb-4')}
                placeholder="Nombre"
            />
            <TextInput
                style={tailwind('border border-gray-300 rounded p-2 mb-4')}
                placeholder="Apellido"
            />
            <TextInput
                style={tailwind('border border-gray-300 rounded p-2 mb-4')}
                placeholder="Correo Electrónico"
                keyboardType="email-address"
            />
            <TextInput
                style={tailwind('border border-gray-300 rounded p-2 mb-4')}
                placeholder="Contraseña"
                secureTextEntry
            />

            <TouchableOpacity
                style={tailwind('bg-green-500 py-2 px-4 rounded-full mb-4')}
                onPress={() => alert('Registro completado')}
            >
                <Text style={tailwind('text-white text-lg text-center')}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={tailwind('bg-blue-500 py-2 px-4 rounded-full')}
                onPress={() => navigation.goBack()}
            >
                <Text style={tailwind('text-white text-lg text-center')}>Volver</Text>
            </TouchableOpacity>
        </View>
    );
}
