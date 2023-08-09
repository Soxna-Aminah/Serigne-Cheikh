import { View,Text ,TextInput,TouchableOpacity,Image} from "react-native";

import { COLORS ,icons,SIZES} from "../../../constants";
import styles from "./search.style";


const Search=()=>{

    return(
       <View style={styles.container}>
        {/* <View style={styles.searchContainer}>
          <Text style={styles.welcomeMessage}>
            Rechercher
          </Text>
        </View> */}
         <View style={styles.searchBar}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={()=>{}}
              placeholder="Rechercher"
              />
          </View>
          <TouchableOpacity style={styles.searchBtn}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={styles.searchBtnImage}>

              </Image>
          </TouchableOpacity>

        </View>
       </View>

    )
}
export default Search;