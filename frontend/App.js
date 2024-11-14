import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Importa las pantallas
import BuscarVehiculosScreen from './screens/BuscarVehiculosScreen';
import RegistroScreen from './screens/RegistroScreen';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json'; // Tailwind configurado

const Stack = createStackNavigator();

export default function App() {
    return (
        <TailwindProvider utilities={utilities}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{ title: 'Inicio' }} 
                    />
                    <Stack.Screen 
                        name="BuscarVehiculos" 
                        component={BuscarVehiculosScreen} 
                        options={{ title: 'Buscar Vehículos' }} 
                    />
                    <Stack.Screen 
                        name="Registro" 
                        component={RegistroScreen} 
                        options={{ title: 'Registro de Usuario' }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </TailwindProvider>
    );
}
