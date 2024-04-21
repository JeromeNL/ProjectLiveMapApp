import { Button, StyleSheet, Text, View } from 'react-native'
import { ServiceReport } from '../model/ServiceReport'
import moment from 'moment'
import React from 'react'

interface ServiceReportListProps {
    serviceReports: ServiceReport[]
}

const ServiceReportList = ({ serviceReports }: ServiceReportListProps) => {

    const defaultShowCount = 5

    const [showAll, setShowAll] = React.useState(false)

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
                [...serviceReports]
                    .sort((a, b) => moment(b.createdAt).diff(moment(a.createdAt)))
                    .slice(0, showAll ? serviceReports.length : defaultShowCount)
                    .map(report =>
                        <Text key={report.id}>
                            {report.title}
                        </Text>
                    )}

            {}
            <Text style={styles.showMoreText} onPress={() => setShowAll(!showAll)}>
                {showAll ? 'Toon minder' : 'Toon meer'}
            </Text>

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
    },
    showMoreText: {
        textDecorationLine: 'underline',
        marginTop: 5,
        marginBottom: 20
    }
})

export default ServiceReportList

