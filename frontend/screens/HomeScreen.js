import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function HomeScreen({ navigation }) {
    const tailwind = useTailwind();

    return (
        <View style={tailwind('flex-1 items-center justify-center bg-gray-100')}>
            <Text style={tailwind('text-2xl font-bold text-gray-800 mb-6')}>Bienvenido a Venta de Vehículos</Text>
            
            <TouchableOpacity
                style={tailwind('bg-blue-500 py-2 px-4 rounded-full mb-4')}
                onPress={() => navigation.navigate('BuscarVehiculos')}
            >
                <Text style={tailwind('text-white text-lg')}>Buscar Vehículos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={tailwind('bg-green-500 py-2 px-4 rounded-full')}
                onPress={() => navigation.navigate('Registro')}
            >
                <Text style={tailwind('text-white text-lg')}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}
