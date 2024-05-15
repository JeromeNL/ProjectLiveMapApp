import type React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { TransactionItem } from './TransactionItem'

interface TransactionListProps {
    transactions: Array<{
        id: string
        description: string
        amount: number
        date: string
        facilityName: string
    }>
    index: number
}

export const TransactionList: React.FC<TransactionListProps> = ({
    transactions,
    index
}) => {
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

