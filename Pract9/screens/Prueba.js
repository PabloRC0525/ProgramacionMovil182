import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import BottomSheet, {BottomSheetModal, BottomSheetModalProvider, } from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get("window");
export default function Prueba() {
    
    const [modal, setModal] = useState(false);
    const bottomSheetModalRef = useRef(null);
    const snapPoints = [width * 0.3, width * 0.5, width * 0.9];
    
    const hey = () => {
        bottomSheetModalRef?.current?.present()

    }

    return(
        <GestureHandlerRootView style={{flex:1}}>
        <BottomSheetModalProvider>
        <BottomSheetModal name='pablo'
        ref={bottomSheetModalRef}
        snapPoints={[height*0.4, height*0.6, height*0.9 ]}
        >
            <Text>gei</Text> 
        </BottomSheetModal>
        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000'
        }}>
        <TouchableOpacity onPress={()=>hey()} style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: width * 0.1,
            height: height * 0.1,
            backgroundColor: '#ffff'
        }}>
                <Text>Xd</Text>
        </TouchableOpacity>


        </View>
        </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}