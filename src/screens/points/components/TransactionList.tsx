import React from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { TransactionItem } from './TransactionItem';

interface TransactionListProps {
    transactions: Array<{
        id: string;
        description: string;
        amount: number;
        date: string;
        facilityName: string;
    }>;
    toggleTransaction: (index: number) => void;
    expandedTransactions: number[];
}

export const TransactionList: React.FC<TransactionListProps> = ({
    transactions,
    toggleTransaction,
    expandedTransactions
}) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                {transactions.length === 0 && <Text>Geen transacties beschikbaar</Text>}
                {transactions.map((transaction, index) => (
                    <TouchableOpacity key={transaction.id} onPress={() => toggleTransaction(index)}>
                        <TransactionItem transaction={transaction} isExpanded={expandedTransactions.includes(index)} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};
