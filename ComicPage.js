import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  image: {
    width: 200,
    height: 200,
  },
});

const ComicPage = ({ comic }) => {
  if (comic === null) {
    return <View style={styles.background}></View>;
  }

  return (
    <View style={styles.background}>
      <Text style={styles.title}>{comic["safe_title"]}</Text>
      <Image style={styles.image} source={{ uri: comic["img"] }} />
      <Text>{comic["alt"]}</Text>
    </View>
  );
};

export default ComicPage;
