import React from 'react'
import { View, Text, Image ,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Users from '../../data/user'

const Stories = () => {
    return (
        <View style = {{}}>
            <ScrollView horizontal 
            showsHorizontalScrollIndicator={false}
            >
                {
                    Users.map((story,index)=>(
                        <View key = {index} style={{alignItems:'center'}}>
                        <Image 
                        source = {{uri:story.imageUrl}} 
                        style = {styles.story}
                        />
                        <Text style={{color:'white'}}>{
                        story.username.length>9
                        ? story.username.slice(0,9)+'...'
                        : story.username
                        }</Text>
                        </View>
                    ))
                }
                </ScrollView>
            <Text ></Text>
        </View>
    )
}

const styles = StyleSheet.create({
story:{
    width:70,
    height:70,
    borderRadius:50,
    marginLeft:6,
    borderWidth:2,
    borderColor:'#ff8501'

}
})

export default Stories
