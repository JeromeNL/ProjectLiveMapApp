import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import type { PointsTransaction } from '../../model/PointsTransaction'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import type { RootState } from '../../redux/store'
import { SegmentedControlComponent } from '../components/SegmentedControlComponent'
import { TransactionList } from './components/TransactionList'

const TransactionsListScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const userId = useSelector((state: RootState) => state.auth.id)
    const resort = useSelector(
        (state: RootState) => state.selectedResort.selectedResort
    )
    const [awardedTransactions, setAwardedTransactions] =
        useState<PointsTransaction[]>()
    const [deductedTransactions, setDeductedTransactions] =
        useState<PointsTransaction[]>()

    useEffect(() => {
        if (userId === null || resort === null) return
        const resortId = resort.id

        PhoenixAPI.getInstance()
            .PointsAPI.getAwardedPoints(userId, resortId)
            .then((response) => {
                setAwardedTransactions(response.data)
            })

        PhoenixAPI.getInstance()
            .PointsAPI.getDeductedPoints(userId, resortId)
            .then((response) => {
                setDeductedTransactions(response.data)
            })
    }, [resort, userId])

    return (
        <View style={{ flex: 1 }}>
            <SegmentedControlComponent
                values={['Alles', 'Ontvangen', 'Uitgegeven']}
                selectedIndex={selectedIndex}
                onChange={(event) =>
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
                }
                widthPercent={0.7}
            />
            {awardedTransactions && deductedTransactions && (
                <TransactionList
                    index={selectedIndex}
                    transactions={[
                        ...awardedTransactions,
                        ...deductedTransactions
                    ]}
                />
            )}
        </View>
    )
}

export default TransactionsListScreen

