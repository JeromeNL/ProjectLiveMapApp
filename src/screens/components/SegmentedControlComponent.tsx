import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

interface SegmentedControlComponentProps {
    selectedIndex: number;
    onChange: (event: any) => void;
}

const windowWidth = Dimensions.get('window').width;

export const SegmentedControlComponent: React.FC<SegmentedControlComponentProps> = ({
    selectedIndex,
    onChange
}) => {
    return (
    <View style={styles.segmentedControlContainer}>
        <SegmentedControl
        values={['Service', 'Faciliteit']}
        selectedIndex={selectedIndex}
        onChange={onChange}
        style={{ width: windowWidth * 0.4 }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    segmentedControlContainer: {
    position: 'absolute',
    top: 10,
    left: (windowWidth - windowWidth * 0.4) / 2,
    zIndex: 1,
    elevation: 5
    },
});
