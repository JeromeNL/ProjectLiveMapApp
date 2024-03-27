export const MapConfiguration = {
    region: {
        initial: {
            latitude: 51.65097008987363,
            longitude: 5.049623717711164,
            latitudeDelta: 0.011296856635078093,
            longitudeDelta: 0.018044660523925
        },
        bounds: {
            northeast: {
                latitude: 51.65409301291617,
                longitude: 5.055245412377415
            },
            southwest: {
                latitude: 51.64662722820029,
                longitude: 5.044088892700313
            }
        }
    },
    tile: {
        urlTemplate: `https://api.mapbox.com/styles/v1/thieme/clu785gfh00y201qshhlscngq/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.EXPO_PUBLIC_TILE_TOKEN}`
    }
}

