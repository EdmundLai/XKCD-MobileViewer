import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

import ComicPage from "./ComicPage";

import { getComics } from "./GetComics";

export default function App() {
  const [comics, setComics] = useState(null);

  useEffect(() => {
    const getAllComics = async () => {
      const newComics = await getComics(10);

      //console.log(JSON.stringify(newComics));
      setComics(newComics);
    };

    getAllComics();
  }, []);

  return (
    <Swiper>
      {comics.map((comic) => {
        return <ComicPage key={comic["num"]} comic={comic} />;
      })}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
