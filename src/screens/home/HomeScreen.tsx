import React, { useState } from 'react'
import { Button, Image, View } from 'react-native'
import { PhoenixAPI } from '../../network/PhoenixAPI'

const HomeScreen = () => {
    const [imageUrl, setImageUrl] = useState('')

    const updateImage = async () => {
        const randomImage = await PhoenixAPI.getInstance().MapAPI.getMapMarkers()
        setImageUrl(randomImage.data.message)
    }

	return (
		<View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
			<Image source={{uri: imageUrl}} width={250} height={200} style={{ resizeMode: 'contain'}}/>
            <Button onPress={updateImage} title='Update image'/>
		</View>
	)
}

export default HomeScreen
