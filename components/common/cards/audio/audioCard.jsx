import { View, Text,TouchableOpacity,Image } from 'react-native'

import styles from './audiocard.style'
import { images,COLORS } from '../../../../constants'
import { Link } from 'expo-router'

const AudioCard = ({item,handlenavigate}) => {

  return (

    <TouchableOpacity
        style={styles.container}
        >
      <Link href="/read-audio/read"> </Link> 
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={images.SCheikh1}
            resizeMode='contain'
            style={styles.logImage}
            /> 
          
        </TouchableOpacity>
          <View style={styles.textContainer}>
                <Text style={styles.jobName} numberOfLines={1}>
                 Serigne Cheikh
                </Text>
                <Text style={styles.jobType}>
                    Gamou Tivaoune 2023
                </Text>
            </View>  
      
    </TouchableOpacity>
  )
}

export default AudioCard