import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style ={{
          marginHorizontal:15,
          marginTop:10
      }}>
      <PostFooter />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: post.profile_pic,
          }}
          style={styles.story}
        />
        <Text
          style={{
            color: "white",
            marginLeft: 5,
            fontWeight: "900",
          }}
        >
          {post.user}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontWeight: "900",
          }}
        >
          ...
        </Text>
      </View>
    </View>
  );
};

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const postFooterIcons = [
  "https://www.edigitalagency.com.au/wp-content/uploads/instagram-font-logo-white-png.png",
  "data:image/png;base64,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",
  "data:image/png;base64,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",
];

const PostFooter = () => (
    <View style = {{flexDirection:'row'}}>
        <View style = {styles.leftFootContainer}>
  <Icon 
  imageStyle={styles.footIcon} 
  imageUrl={postFooterIcons[2]} />
   <Icon 
  imageStyle={styles.footIcon} 
  imageUrl={postFooterIcons[1]} />
   <Icon 
  imageStyle={[styles.footIcon,styles.shareIcon]} 
  imageUrl={postFooterIcons[2]} />
  </View>
  <View style = {{
      flex:1,
      alignItems:'flex-end'
  }}>
   <Icon 
  imageStyle={styles.footIcon} 
  imageUrl={postFooterIcons[2]} />
  </View>
  </View>
);

const Icon = ({ imageStyle, imageUrl }) => (
  <TouchableOpacity>
    <Image style={imageStyle} source={{ uri: imageUrl }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footIcon: {
      width:33,
      height:33
  },
  leftFootContainer:{
      flexDirection:'row'
  },
  shareIcon:{
transform:[{rotate:'-320deg'}],
marginTop:-3
  }
});
export default Post;
