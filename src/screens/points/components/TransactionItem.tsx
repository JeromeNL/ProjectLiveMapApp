import moment from 'moment'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../../../configuration/styles/Colors'
import type { PointsTransaction } from '../../../model/PointsTransaction'

interface TransactionItemProps {
    transaction: PointsTransaction
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
    transaction
}) => {
    const getAmountColor = (amount: number) => {
        return amount > 0 ? Colors.success : Colors.error
    }

    const [isExpanded, setIsExpanded] = React.useState(false)

    const title = transaction.facilityReport
        ? 'Nieuw Faciliteit'
        : transaction.serviceReport?.title

    const description = transaction.facilityReport
        ? transaction.facilityReport.description
        : transaction.serviceReport?.description

    const date = transaction.facilityReport
        ? transaction.facilityReport.createdAt
        : transaction.serviceReport?.createdAt

    return (
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <View style={styles.transactionContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.transactionTitle}>{title}</Text>
                    <Text style={{ color: getAmountColor(transaction.amount) }}>
                        {transaction.amount > 0
                            ? `+${transaction.amount}`
                            : transaction.amount}
                    </Text>
                </View>
                <Collapsible collapsed={!isExpanded}>
                    <Text>
                        <Text style={styles.boldText}>Datum:</Text>{' '}
                        {moment(date).format('DD-MM-YYYY HH:mm')}
                    </Text>
                    <Text>
                        <Text style={styles.boldText}>Omschrijving:</Text>{' '}
                        {description}
                    </Text>
                </Collapsible>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    transactionContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.gray,
        padding: 10,
        marginVertical: 5,
        width: Dimensions.get('window').width * 0.9
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    transactionTitle: {
        fontSize: 18,
        flex: 1
    },
    boldText: {
        fontWeight: 'bold'
    }
})

