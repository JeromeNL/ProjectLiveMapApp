import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FormattedDate } from '../../../utils/FormattedDate';
import { StatusIcon } from './StatusIcon';
import { Colors } from '../../../configuration/styles/Colors';
import Collapsible from 'react-native-collapsible';
import { Report } from '../../../model/Report';

interface ReportItemProps {
    report: Report;
    isExpanded: boolean;
}

export const ReportItem: React.FC<ReportItemProps> = ({ report, isExpanded }) => {
    const title = report.proposedFacility ? report.proposedFacility.name : report.title;

    return (
        <View style={styles.reportContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.reportTitle}>{title}</Text>
                <StatusIcon status={report.status} />
            </View>
            <Collapsible collapsed={!isExpanded}>
                <Text>
                    {report.description}
                </Text>
                <Text></Text>
                <Text>
                    {FormattedDate(report.createdAt)}
                </Text>
            </Collapsible>
        </View>
    );
};

const styles = StyleSheet.create({
    reportContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.gray,
        padding: 10,
        marginVertical: 5,
        width: Dimensions.get('window').width * 0.9,
    },
    boldText: {
        fontWeight: 'bold',
    },
    reportTitle: {
        fontSize: 18,
        marginBottom: 10,
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default ReportItem;
