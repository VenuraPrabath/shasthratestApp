import React from 'react';
import { Button, Dialog, DialogProps, Portal, Text } from 'react-native-paper';
import color from 'constants/color';

interface SuccessDialogProps extends DialogProps {
    action: () => void;
    setVisible: () => void;
    title?: string;
    description?: string;
    isCancel?: boolean;
}

export const SuccessDialogBox: React.FC<SuccessDialogProps> = ({
    action, setVisible, title = 'Success', description = 'No Content', isCancel = false, ...dialogProps }) => {
    return (
        <Portal>
            <Dialog {...dialogProps} style={{ backgroundColor: color.SUCCESS_LIGHT }}>
                <Dialog.Title><Text variant='titleMedium'>{title}</Text></Dialog.Title>
                <Dialog.Content><Text variant='bodySmall'>{description}</Text></Dialog.Content>
                <Dialog.Actions>
                    {isCancel && <Button labelStyle={{ color: color.ACCENT }} onPress={setVisible}>Cancel</Button>}
                    <Button labelStyle={{ color: color.ACCENT }}
                        onPress={() => {
                            action();
                            setVisible();
                        }}>
                        Yes
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};
