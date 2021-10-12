import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
// import {Divider} from 'react-native-elememts'

const Post = ({post}) => {
    return (
        <View style={{marginBottom:30}}>
            {/* <Divider width={1} orientation="vertical" /> */}
            <PostHeader post={post}/>
        </View>
    )
}

const PostHeader = ({post})=>{

    return (
        <View 
        style ={{
            flexDirection:'row',
            justifyContent:'space-between',
            margin:5,
            alignItems:"center"
        }}>
            <View>
                <Image 
                source = {{
                    uri:post.profile_pic
                }}
                style={styles.story}
                />
                <Text></Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:'#ff8501'
    
    }
    })
export default Post
