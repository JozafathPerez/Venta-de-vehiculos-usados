import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function BuscarVehiculosScreen({ navigation }) {
    const tailwind = useTailwind();

    return (
        <View style={tailwind('flex-1 items-center justify-center bg-gray-100')}>
            <Text style={tailwind('text-2xl font-bold text-gray-800 mb-6')}>Buscar Vehículos</Text>
            <Text style={tailwind('text-base text-gray-700 mb-4')}>Utilice los filtros para buscar su vehículo ideal.</Text>

            <TouchableOpacity
                style={tailwind('bg-blue-500 py-2 px-4 rounded-full')}
                onPress={() => navigation.goBack()}
            >
                <Text style={tailwind('text-white text-lg')}>Volver</Text>
            </TouchableOpacity>
        </View>
    );
}
