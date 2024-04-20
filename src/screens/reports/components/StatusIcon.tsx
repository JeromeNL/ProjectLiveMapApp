import React from 'react';
import { IconHelpCircle } from '@tabler/icons-react-native';
import { Colors } from '../../../configuration/styles/Colors';
import { ToastManager } from '../../../managers/ToastManager';

export const StatusIcon = (status: number | undefined) => {
    const showStatusToast = (message: string) => {
        ToastManager.showInfo('Status', message);
    };

    switch (status) {
        case 0:
            return <IconHelpCircle color={Colors.warning} onPress={() => showStatusToast('Jouw melding is in behandeling')} />;
        case 1:
            return <IconHelpCircle color={Colors.success} onPress={() => showStatusToast('Jouw melding is geaccepteerd. Het probleem is opgelost of de faciliteit is aangemaakt')} />;
        case undefined:
            return <IconHelpCircle color={Colors.gray} onPress={() => showStatusToast('Er is geen status beschikbaar voor deze melding')} />;
        default:
            return <IconHelpCircle color={Colors.error} onPress={() => showStatusToast('Jouw melding is afgekeurd')} />;
    }
};
