import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../../../configuration/styles/Colors'

interface TransactionItemProps {
    transaction: {
        id: string
        description: string
        amount: number
        date: string
        facilityName: string
    }
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
    transaction
}) => {
    const getAmountColor = (amount: number) => {
        return amount > 0 ? Colors.success : Colors.error
    }

    const [isExpanded, setIsExpanded] = React.useState(false)

    return (
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <View style={styles.transactionContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.transactionTitle}>
                        {transaction.description}
                    </Text>
                    <Text style={{ color: getAmountColor(transaction.amount) }}>
                        {transaction.amount > 0
                            ? `+${transaction.amount}`
                            : transaction.amount}
                    </Text>
                </View>
                <Collapsible collapsed={!isExpanded}>
                    <Text>
                        <Text style={styles.boldText}>Datum:</Text>{' '}
                        {transaction.date}
                    </Text>
                    <Text>
                        <Text style={styles.boldText}>Faciliteit:</Text>{' '}
                        {transaction.facilityName}
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

