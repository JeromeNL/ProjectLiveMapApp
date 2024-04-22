import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ReportItem } from './ReportItem';
import { Report } from '../../../model/Report';

interface ReportListProps {
    reports: Report[];
    toggleReport: (index: number) => void;
    expandedReports: number[];
}

export const ReportList: React.FC<ReportListProps> = ({
    reports,
    toggleReport,
    expandedReports
}) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                {reports.length === 0 && <Text>Geen meldingen beschikbaar</Text>}
                {reports.map((report, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleReport(index)}>
                        <ReportItem report={report} isExpanded={expandedReports.includes(index)} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default ReportList;
