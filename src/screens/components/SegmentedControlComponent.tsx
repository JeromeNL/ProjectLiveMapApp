import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

interface SegmentedControlComponentProps {
    values: string[];
    selectedIndex: number;
    onChange: (event: any) => void;
    widthPercent?: number; // Optioneel, standaard 0.4
}

const windowWidth = Dimensions.get('window').width;

export const SegmentedControlComponent: React.FC<SegmentedControlComponentProps> = ({
    values,
    selectedIndex,
    onChange,
    widthPercent = 0.4
}) => {
    const width = windowWidth * widthPercent;
    return (
        <View style={[styles.segmentedControlContainer, { left: (windowWidth - width) / 2, width }]}>
            <SegmentedControl
                values={values}
                selectedIndex={selectedIndex}
                onChange={onChange}
                style={{ width }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    segmentedControlContainer: {
        position: 'absolute',
        top: 10,
        zIndex: 1,
        elevation: 5
    },
});
