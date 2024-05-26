import React, {forwardRef, useRef} from 'react';
import ModalWithView from './ModalWithView';
import {hideModalViaQueue, showModalViaQueue} from "../utils/helper";

interface ModalHandlerProps {}

let modalWithViewRef = React.createRef<any>();

const ModalHandler = forwardRef((props: ModalHandlerProps, ref) => {
    modalWithViewRef = useRef<any>(null);

    return (
        <>
            <ModalWithView ref={(ref) => {
                modalWithViewRef = ref;
            }}
            />
        </>
    );
});

export default ModalHandler;

export const showModalWithView = (data: any, props?: any) => {
    showModalViaQueue({ modalRef: modalWithViewRef, data, props });
};

export const hideModalWithView = async () => {
    await hideModalViaQueue();
};

