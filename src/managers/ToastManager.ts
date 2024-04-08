import Toast, { ToastShowParams } from 'react-native-toast-message'

const visibleTime = 4000

const genericToast: Partial<ToastShowParams> = {
    visibilityTime: visibleTime,
    bottomOffset: 100,
    position: 'bottom',
    onPress: () => Toast.hide()
}

export const ToastManager = {
    showSuccess: (text1: string, text2: string) => {
        Toast.show({
            ...genericToast,
            type: 'success',
            text1: text1,
            text2: text2
        })
    },

    showError: (text1: string, text2: string) => {
        Toast.show({
            ...genericToast,
            type: 'error',
            text1: text1,
            text2: text2
        })
    },

    showInfo: (text1: string, text2: string) => {
        Toast.show({
            ...genericToast,
            type: 'info',
            text1: text1,
            text2: text2
        })
    }
}
