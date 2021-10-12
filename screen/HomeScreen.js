import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { Posts } from ".././data/posts";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {Posts.map((post, index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "center",
  },
});

export default HomeScreen;
