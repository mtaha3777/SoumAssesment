import React, {ForwardedRef, useImperativeHandle, useRef, useState} from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {hideModalWithView} from "./ModalHandler";
import {WP} from "../theme/Dimensions";

interface ModalDataProps {}
let ModalDataComponent = "";
interface ModalWithViewProps {
    // Define your props here
    // For example:
    // prop1: string;
    // prop2: number;
    // etc.
}

const ModalWithView = React.forwardRef((props: ModalWithViewProps, ref: ForwardedRef<any>) => {
    const [visible, setVisible] = useState<boolean>(false);
    const extraProps = useRef<any>({});

    useImperativeHandle(ref, () => ({
        isVisible(params: ModalDataProps, _extraProps: any) {
            console.log("DCD",params)
            extraProps.current = _extraProps;
            ModalDataComponent = params;
            setVisible(true);
        },
        isClose() {
            setVisible(false);
        },
    }));


    return (
        <Modal
            style={[{
                margin: 0,
                justifyContent: "flex-end",

            },extraProps?.current?.style]}
            isVisible={visible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            onBackdropPress={() => {
                hideModalWithView()
            }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={{
                    borderTopLeftRadius: WP(100),
                    borderTopRightRadius: WP(100),

                }}>
                    {ModalDataComponent ? <ModalDataComponent /> : <View/>}

                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
});

const styles = StyleSheet.create({});

export default ModalWithView;
