import type React from 'react'
import { ScrollView, Text, View } from 'react-native'
import type { PointsTransaction } from '../../../model/PointsTransaction'
import { TransactionItem } from './TransactionItem'

interface TransactionListProps {
    transactions: PointsTransaction[]
    index: number
}

export const TransactionList: React.FC<TransactionListProps> = ({
    transactions,
    index
}) => {
    transactions = transactions.filter((transaction) => {
        if (index === 1) {
            return transaction.amount > 0
        }
        if (index === 2) {
            return transaction.amount < 0
        }
        return true
    })

    return (
        <ScrollView style={{ flex: 1 }}>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 50
                }}
            >
                {transactions.length === 0 && (
                    <Text>Geen transacties beschikbaar</Text>
                )}
                {transactions.map((transaction) => (
                    <TransactionItem
                        key={transaction.id + index}
                        transaction={transaction}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

