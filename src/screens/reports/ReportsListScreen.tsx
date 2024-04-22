import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { PhoenixAPI } from '../../network/PhoenixAPI';
import { SegmentedControlComponent } from '../components/SegmentedControlComponent';
import { ReportList } from './components/ReportList';
import { ToastManager } from '../../managers/ToastManager';
import { Report } from '../../model/Report';

const ReportsListScreen = () => {
    const [serviceReports, setServiceReports] = useState<Report[]>([]);
    const [facilityReports, setFacilityReports] = useState<Report[]>([]);
    const [expandedServiceReports, setExpandedServiceReports] = useState<number[]>([]);
    const [expandedFacilityReports, setExpandedFacilityReports] = useState<number[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(0); // 0 for service, 1 for facility
    const userId = useSelector((state: RootState) => state.auth.id);

    useEffect(() => {
        if (userId) {
            PhoenixAPI.getInstance().ReportAPI.getServiceReports(userId)
                .then((response) => {
                    const sortedServiceReports = response.data.sort((a: Report, b: Report) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                    setServiceReports(sortedServiceReports);
                })
                .catch((error) => {
                    console.error('Error fetching service reports:', error);
                    ToastManager.showError("Fout bij ophalen", "Kan servicemeldingen niet laden");
                });

            PhoenixAPI.getInstance().ReportAPI.getFacilityReports(userId)
                .then((response) => {
                    const sortedFacilityReports = response.data.sort((a: Report, b: Report) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                    setFacilityReports(sortedFacilityReports);
                })
                .catch((error) => {
                    console.error('Error fetching facility reports:', error);
                    ToastManager.showError("Fout bij ophalen", "Kan facilitaire meldingen niet laden");
                });
        }
    }, [userId]);

    const toggleServiceReport = (index: number) => {
        const isExpanded = expandedServiceReports.includes(index);
        if (isExpanded) {
            setExpandedServiceReports(expandedServiceReports.filter((i) => i !== index));
        } else {
            setExpandedServiceReports([...expandedServiceReports, index]);
        }
    };

    const toggleFacilityReport = (index: number) => {
        const isExpanded = expandedFacilityReports.includes(index);
        if (isExpanded) {
            setExpandedFacilityReports(expandedFacilityReports.filter((i) => i !== index));
        } else {
            setExpandedFacilityReports([...expandedFacilityReports, index]);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <SegmentedControlComponent
                selectedIndex={selectedIndex}
                onChange={(event) => setSelectedIndex(event.nativeEvent.selectedSegmentIndex)}
            />
            <ReportList
                reports={selectedIndex === 0 ? serviceReports : facilityReports}
                toggleReport={selectedIndex === 0 ? toggleServiceReport : toggleFacilityReport}
                expandedReports={selectedIndex === 0 ? expandedServiceReports : expandedFacilityReports}
            />
        </View>
    );
};

export default ReportsListScreen;
