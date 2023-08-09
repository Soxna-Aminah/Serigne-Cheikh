import { View,Text ,SafeAreaView,ScrollView} from "react-native";
import { Stack,useRouter } from "expo-router";

import {COLORS,icons,images,SIZES} from "../constants"

import {Search,AudioList} from "../components"


const Home=()=>{


    return(
        <SafeAreaView
            style={{flex:1,backgroundColor: COLORS.primary}}>

            <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:COLORS.primary},
                    headerShadowVisible:false,
                    headerTitle:""
                }}
                />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View
                    style={{
                        flex:1,
                        padding:SIZES.medium
                    }}>
                    <Search/>
                    <AudioList/>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}
export default Home;