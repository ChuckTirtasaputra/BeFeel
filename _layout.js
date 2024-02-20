import { Stack } from 'expo-router';

export default function Layout() {
    /* if user not logged in, ... 

     else  */

    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#000",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        }}
    >
        <Stack.Screen name="home"/>

        <Stack.Screen name="profile"/>
    </Stack>
    )
}