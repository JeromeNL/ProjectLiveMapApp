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
    const [selectedIndex, setSelectedIndex] = useState(0);
    const userId = useSelector((state: RootState) => state.auth.id);

    useEffect(() => {
        if (userId) {
            PhoenixAPI.getInstance().ReportAPI.getServiceReports(userId)
                .then(response => {
                    setServiceReports(response.data);
                })
                .catch(error => {
                    ToastManager.showError("Fout bij ophalen", "Kan servicemeldingen niet laden");
                });

            PhoenixAPI.getInstance().ReportAPI.getFacilityReports(userId)
                .then(response => {
                    setFacilityReports(response.data);
                })
                .catch(error => {
                    ToastManager.showError("Fout bij ophalen", "Kan facilitaire meldingen niet laden");
                });
        }
    }, [userId]);

    const toggleServiceReport = (index: number) => {
        const isExpanded = expandedServiceReports.includes(index);
        if (isExpanded) {
            setExpandedServiceReports(expandedServiceReports.filter(i => i !== index));
        } else {
            setExpandedServiceReports([...expandedServiceReports, index]);
        }
    };

    const toggleFacilityReport = (index: number) => {
        const isExpanded = expandedFacilityReports.includes(index);
        if (isExpanded) {
            setExpandedFacilityReports(expandedFacilityReports.filter(i => i !== index));
        } else {
            setExpandedFacilityReports([...expandedFacilityReports, index]);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <SegmentedControlComponent
                values={['Service', 'Faciliteit']}
                selectedIndex={selectedIndex}
                onChange={(event) => setSelectedIndex(event.nativeEvent.selectedSegmentIndex)}
                widthPercent={0.4}
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
