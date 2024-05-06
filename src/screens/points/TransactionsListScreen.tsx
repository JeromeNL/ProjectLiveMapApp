import React, { useState } from 'react';
import { View } from 'react-native';
import { TransactionList } from './components/TransactionList';
import { SegmentedControlComponent } from '../components/SegmentedControlComponent';

const dummyTransactions = [
    { id: '1', description: 'Faciliteitmelding', amount: 100, date: '2023-05-01', facilityName: 'Faciliteit A' },
    { id: '2', description: 'Storingmelding', amount: -50, date: '2023-05-02', facilityName: 'Faciliteit B' },
    { id: '3', description: 'Bonuspunten', amount: 200, date: '2023-05-03', facilityName: 'Faciliteit C' },
    { id: '4', description: 'Penalty Kosten', amount: -150, date: '2023-05-04', facilityName: 'Faciliteit D' },
    { id: '5', description: 'Faciliteitverbetering', amount: 50, date: '2023-05-05', facilityName: 'Faciliteit E' },
    { id: '6', description: 'Schoonmaakkosten', amount: -30, date: '2023-05-06', facilityName: 'Faciliteit F' },
    { id: '7', description: 'Faciliteitupgrade', amount: 120, date: '2023-05-07', facilityName: 'Faciliteit G' },
    { id: '8', description: 'Storingsoplossing', amount: -70, date: '2023-05-08', facilityName: 'Faciliteit H' },
    { id: '9', description: 'Retro Bonus', amount: 180, date: '2023-05-09', facilityName: 'Faciliteit I' },
    { id: '10', description: 'Onkostenvergoeding', amount: -45, date: '2023-05-10', facilityName: 'Faciliteit J' }
];

const TransactionsListScreen = () => {
    const [expandedTransactions, setExpandedTransactions] = useState<number[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleTransaction = (index: number) => {
        const isExpanded = expandedTransactions.includes(index);
        if (isExpanded) {
            setExpandedTransactions(expandedTransactions.filter(i => i !== index));
        } else {
            setExpandedTransactions([...expandedTransactions, index]);
        }
    };

    const filteredTransactions = dummyTransactions.filter(transaction => {
        if (selectedIndex === 1) {
            return transaction.amount > 0;
        } else if (selectedIndex === 2) {
            return transaction.amount < 0;
        }
        return true;
    });

    return (
        <View style={{ flex: 1 }}>
            <SegmentedControlComponent
                values={['Alles', 'Ontvangen', 'Uitgegeven']}
                selectedIndex={selectedIndex}
                onChange={(event) => setSelectedIndex(event.nativeEvent.selectedSegmentIndex)}
                widthPercent={0.7}
            />
            <TransactionList
                transactions={filteredTransactions}
                toggleTransaction={toggleTransaction}
                expandedTransactions={expandedTransactions}
            />
        </View>
    );
};

export default TransactionsListScreen;
