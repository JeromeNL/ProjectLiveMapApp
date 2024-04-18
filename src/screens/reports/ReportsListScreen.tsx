import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { PhoenixAPI } from '../../network/PhoenixAPI';
import Collapsible from 'react-native-collapsible';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { IconHelpCircleFilled } from '@tabler/icons-react-native';
import { Colors } from '../../configuration/styles/Colors';

const ReportsListScreen = () => {
    const [serviceReports, setServiceReports] = useState<any[]>([]);
    const [facilityReports, setFacilityReports] = useState<any[]>([]);
    const [expandedServiceReports, setExpandedServiceReports] = useState<number[]>([]);
    const [expandedFacilityReports, setExpandedFacilityReports] = useState<number[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(0); // 0 for service, 1 for facility
    const userId = useSelector((state: RootState) => state.auth.id);

    useEffect(() => {
        if (userId) {
            PhoenixAPI.getInstance().AuthAPI.getServiceReports(userId)
                .then((response) => {
                    const sortedServiceReports = response.data.sort((a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                    setServiceReports(sortedServiceReports);
                })
                .catch((error) => {
                    console.error('Error fetching service reports:', error);
                });

            PhoenixAPI.getInstance().AuthAPI.getFacilityReports(userId)
                .then((response) => {
                    const sortedFacilityReports = response.data.sort((a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                    setFacilityReports(sortedFacilityReports);
                })
                .catch((error) => {
                    console.error('Error fetching facility reports:', error);
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

    const getStatusIcon = (status: number | undefined) => {
        switch (status) {
            case 0:
                return <IconHelpCircleFilled color= {Colors.warning} />;
            case 1:
                return <IconHelpCircleFilled color= {Colors.success} />;
            case undefined:
                return <IconHelpCircleFilled color= {Colors.error} />;
            default:
                return <IconHelpCircleFilled color= {Colors.error} />;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.segmentedControlContainer}>
                <SegmentedControl
                    values={['Service', 'Faciliteit']}
                    selectedIndex={selectedIndex}
                    onChange={(event) => {
                        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                    }}
                    style={{ width: windowWidth * 0.4 }}
                />
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                    {serviceReports.length === 0 && facilityReports.length === 0 && (
                        <Text>Geen meldingen beschikbaar</Text>
                    )}
                    {selectedIndex === 0 ? (
                        <View>
                            {serviceReports.map((report, index) => (
                                <TouchableOpacity key={index} onPress={() => toggleServiceReport(index)}>
                                    <View style={styles.reportContainer}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.reportTitle}>{report.title}</Text>
                                            {getStatusIcon(report.status)}
                                        </View>
                                        <Collapsible collapsed={!expandedServiceReports.includes(index)}>
                                            <Text>
                                                <Text style={styles.boldText}>Beschrijving:</Text> {report.description}
                                            </Text>
                                            <Text>
                                                <Text style={styles.boldText}>Ingediend op:</Text> {formatDate(report.createdAt)}
                                            </Text>
                                        </Collapsible>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ) : (
                        <View>
                            {facilityReports.map((report, index) => (
                                <TouchableOpacity key={index} onPress={() => toggleFacilityReport(index)}>
                                    <View style={styles.reportContainer}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.reportTitle}>{report.proposedFacility.name}</Text>
                                            {getStatusIcon(report.status)}
                                        </View>
                                        <Collapsible collapsed={!expandedFacilityReports.includes(index)}>
                                            <Text>
                                                <Text style={styles.boldText}>Beschrijving:</Text> {report.description}
                                            </Text>
                                            <Text>
                                                <Text style={styles.boldText}>Ingediend op:</Text> {formatDate(report.createdAt)}
                                            </Text>
                                        </Collapsible>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const formatDate = (dateString: string) => {
    const optionsDate: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };
    const optionsTime: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('nl-NL', optionsDate);
    const formattedTime = date.toLocaleTimeString('nl-NL', optionsTime);
    return `${formattedDate} ${formattedTime}`;
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    segmentedControlContainer: {
        position: 'absolute',
        top: 10,
        left: (windowWidth - windowWidth * 0.4) / 2,
        zIndex: 1,
        elevation: 5
    },
    reportContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 5,
        width: windowWidth * 0.9,
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

export default ReportsListScreen;
