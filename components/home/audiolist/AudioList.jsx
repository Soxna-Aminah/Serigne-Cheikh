import { View,Text,FlatList, TouchableOpacity } from "react-native";
import styles from './audioList.style'
import { useRouter} from 'expo-router';


import { COLORS, images } from "../../../constants";
import AudioCard from "../../common/cards/audio/audioCard"

const AudioList=()=>{
    const router=useRouter();
    return (
        <View style={styles.cardsContainer}>
            <FlatList
                data={[1,2,3,4,5,6,7,8,9]}
                renderItem={(item)=>(
                    <AudioCard
                        item={item}
                        handlenavigate={()=>router.push('/read-audio/ReadAudio')}/>
                )}
                />
           

        </View>
    )
}
export default AudioList;