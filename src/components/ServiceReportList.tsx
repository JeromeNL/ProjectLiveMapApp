import { StyleSheet, Text, View } from 'react-native'
import { ServiceReport } from '../model/ServiceReport'
import moment from 'moment'

interface ServiceReportListProps {
    serviceReports: ServiceReport[]
}

const ServiceReportList = ({ serviceReports }: ServiceReportListProps) => {

    const dateSortedServiceReports = [...serviceReports]
        .sort((a, b) => moment(b.createdAt).diff(moment(a.createdAt)))
    

    return (
        <View>
            <Text
                style={{
                    fontWeight: 'bold',
                    marginTop: 10
                }}
            >
                Let op, bezoekers hebben de volgende storingen gemeld:
            </Text>
            {serviceReports.length > 0 &&
                dateSortedServiceReports
                    .map(report =>
                        <View>
                            <Text>
                                {report.title}
                            </Text>
                        </View>
                    )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeContainer: {
        flexDirection: 'row'
    }
})

export default ServiceReportList

