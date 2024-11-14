import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import VehiclePrototype from '../models/vehiclePrototype';

export default function RegistroScreen({ navigation }) {
  const tailwind = useTailwind();
  const [vehicle, setVehicle] = useState(new VehiclePrototype({
    tipo: '',
    marca: '',
    modelo: '',
    año: '',
    placa: '',
    precio: '',
    negociable: false,
    recibeOtrosVehiculos: false,
    fotos: [],
    transmision: '',
    puertas: '',
    dimensiones: { largo: '', ancho: '', alto: '' },
    materialAsientos: '',
    motor: '',
    vidriosElectricos: false,
    espejosElectricos: false,
    sensoresProximidadTraseros: false,
    sensoresProximidadDelanteros: false,
    camaraRetroceso: false,
    camara360: false,
    sensoresProximidadLateral: false,
    tableroMando: '',
    tipoTransmision: '',
    tapizado: '',
    sistemaSonido: '',
    estado: '',
    leasing: false,
  }));

  const handleRegister = () => {
    const newVehicle = vehicle.clone();
    // Aquí puedes guardar el nuevo vehículo en la base de datos o realizar otras acciones necesarias
    alert('Vehículo registrado');
  };

  return (
    <View style={tailwind('flex-1 bg-gray-100 p-4')}>
      <Text style={tailwind('text-2xl font-bold text-gray-800 mb-6 text-center')}>Registro de Vehículo</Text>
      {/* Aquí puedes agregar los TextInput para capturar los datos del vehículo */}
      <TouchableOpacity
        style={tailwind('bg-green-500 py-2 px-4 rounded-full mb-4')}
        onPress={handleRegister}
      >
        <Text style={tailwind('text-white text-lg text-center')}>Registrar Vehículo</Text>
      </TouchableOpacity>
    </View>
  );
}