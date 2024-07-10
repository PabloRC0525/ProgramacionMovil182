import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Modal, Dimensions, TouchableOpacity } from 'react-native';

const {width, height} = Dimensions.get("window");
export default function Prueba() {
    const [modal, setModal] = useState(false);
    return(
        <View 
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            {/* Estructura basica del modal */}
            <Modal visible={modal} animationType="fade">
                    <View style={{
                        flex:1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgba(0,0,0,1)",
                    }}>
                        <TouchableOpacity onPress={()=> setModal(false)}>
                        <FontAwesome5 name='zhihu' size={width * 0.1} color="#fff"/>
                        </TouchableOpacity>
                    </View>
            </Modal>
            <TouchableOpacity
            onPress={() => setModal(true)}
            style={{
                width: width * 0.6,
                height: height * 0.1,
                backgroundColor: "#000",
                borderRadius: width * 0.02,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize: width * 0.04,
                    fontWeight: "700",
                    color:"#fff",
                }}>
                    Abrir Modal
                </Text>

            </TouchableOpacity>

        </View>
    )
}