import React from 'react';
import { IconCheck, IconCircle, IconCircleFilled, IconHelpCircle } from '@tabler/icons-react-native';
import { Colors } from '../../../configuration/styles/Colors';
import { ToastManager } from '../../../managers/ToastManager';

interface StatusIconProps {
    status: number | undefined;
}

export const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
    const showStatusToast = (message: string) => {
        ToastManager.showInfo('Status', message);
    };

    switch (status) {
        case 0:
            return <IconCircle color={Colors.warning} onPress={() => showStatusToast('Jouw melding is in behandeling')} />;
        case 2:
            return <IconCheck color={Colors.success} onPress={() => showStatusToast('Jouw melding is geaccepteerd. Het probleem is opgelost of de faciliteit is aangemaakt')} />;
        case 3:
            return <IconCircle color={Colors.error} onPress={() => showStatusToast('Jouw melding is afgekeurd')} />;
        case undefined:
            return <IconHelpCircle color={Colors.gray} onPress={() => showStatusToast('Er is geen status beschikbaar voor deze melding')} />;
        default:
            return <IconHelpCircle color={Colors.gray} onPress={() => showStatusToast('Er is geen status beschikbaar voor deze melding')} />;
    }
};
