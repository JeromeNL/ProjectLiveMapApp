import * as Location from 'expo-location'

export const LocationManager = {
    getCurrentLocation: async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status === 'granted') {
            return Location.getCurrentPositionAsync({})
        }
        return null
    }
}
