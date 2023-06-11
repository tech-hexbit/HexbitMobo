import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// components
import Header from "./../Components/Header";
import Sales from "./../Components/Order/Sales";
import Inventory from "./../Components/Order/Inventory";

// theme
import { COLORS } from "../constants/theme";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={sty.mDiv}>
        <Text>Home</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in
          soluta facere sint aperiam expedita similique pariatur recusandae
          assumenda voluptate, quae dolorem natus rerum vel magnam id
          laudantium! Distinctio aperiam temporibus porro obcaecati ipsum
          voluptas natus labore excepturi, minus tempore quod itaque explicabo
          eaque magnam iste architecto id minima. Praesentium officiis pariatur
          eum dignissimos magni placeat ducimus nam, nemo tempora cum, fugit
          architecto iste vero eveniet at cupiditate maiores beatae dicta in.
          Corporis, ab officia, eaque excepturi ullam deserunt corrupti
          molestiae soluta similique iste fugit, quaerat accusantium natus ad ex
          eveniet officiis! Veritatis, maiores amet laudantium quod eaque vero
          at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in
          soluta facere sint aperiam expedita similique pariatur recusandae
          assumenda voluptate, quae dolorem natus rerum vel magnam id
          laudantium! Distinctio aperiam temporibus porro obcaecati ipsum
          voluptas natus labore excepturi, minus tempore quod itaque explicabo
          eaque magnam iste architecto id minima. Praesentium officiis pariatur
          eum dignissimos magni placeat ducimus nam, nemo tempora cum, fugit
          architecto iste vero eveniet at cupiditate maiores beatae dicta in.
          Corporis, ab officia, eaque excepturi ullam deserunt corrupti
          molestiae soluta similique iste fugit, quaerat accusantium natus ad ex
          eveniet officiis! Veritatis, maiores amet laudantium quod eaque vero
          at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in
          soluta facere sint aperiam expedita similique pariatur recusandae
          assumenda voluptate, quae dolorem natus rerum vel magnam id
          laudantium! Distinctio aperiam temporibus porro obcaecati ipsum
          voluptas natus labore excepturi, minus tempore quod itaque explicabo
          eaque magnam iste architecto id minima. Praesentium officiis pariatur
          eum dignissimos magni placeat ducimus nam, nemo tempora cum, fugit
          architecto iste vero eveniet at cupiditate maiores beatae dicta in.
          Corporis, ab officia, eaque excepturi ullam deserunt corrupti
          molestiae soluta similique iste fugit, quaerat accusantium natus ad ex
          eveniet officiis! Veritatis, maiores amet laudantium quod eaque vero
          at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in
          soluta facere sint aperiam expedita similique pariatur recusandae
          assumenda voluptate, quae dolorem natus rerum vel magnam id
          laudantium! Distinctio aperiam temporibus porro obcaecati ipsum
          voluptas natus labore excepturi, minus tempore quod itaque explicabo
          eaque magnam iste architecto id minima. Praesentium officiis pariatur
          eum dignissimos magni placeat ducimus nam, nemo tempora cum, fugit
          architecto iste vero eveniet at cupiditate maiores beatae dicta in.
          Corporis, ab officia, eaque excepturi ullam deserunt corrupti
          molestiae soluta similique iste fugit, quaerat accusantium natus ad ex
          eveniet officiis! Veritatis, maiores amet laudantium quod eaque vero
          at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in
          soluta facere sint aperiam expedita similique pariatur recusandae
          assumenda voluptate, quae dolorem natus rerum vel magnam id
          laudantium! Distinctio aperiam temporibus porro obcaecati ipsum
          voluptas natus labore excepturi, minus tempore quod itaque explicabo
          eaque magnam iste architecto id minima. Praesentium officiis pariatur
          eum dignissimos magni placeat ducimus nam, nemo tempora cum, fugit
          architecto iste vero eveniet at cupiditate maiores beatae dicta in.
          Corporis, ab officia, eaque excepturi ullam deserunt corrupti
          molestiae soluta similique iste fugit, quaerat accusantium natus ad ex
          eveniet officiis! Veritatis, maiores amet laudantium quod eaque vero
          at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in
          soluta facere sint aperiam expedita similique pariatur recusandae
          assumenda voluptate, quae dolorem natus rerum vel magnam id
          laudantium! Distinctio aperiam temporibus porro obcaecati ipsum
          voluptas natus labore excepturi, minus tempore quod itaque explicabo
          eaque magnam iste architecto id minima. Praesentium officiis pariatur
          eum dignissimos magni placeat ducimus nam, nemo tempora cum, fugit
          architecto iste vero eveniet at cupiditate maiores beatae dicta in.
          Corporis, ab officia, eaque excepturi ullam deserunt corrupti
          molestiae soluta similique iste fugit, quaerat accusantium natus ad ex
          eveniet officiis! Veritatis, maiores amet laudantium quod eaque vero
          at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in
          soluta facere sint aperiam expedita similique pariatur recusandae
          assumenda voluptate, quae dolorem natus rerum vel magnam id
          laudantium! Distinctio aperiam temporibus porro obcaecati ipsum
          voluptas natus labore excepturi, minus tempore quod itaque explicabo
          eaque magnam iste architecto id minima. Praesentium officiis pariatur
          eum dignissimos magni placeat ducimus nam, nemo tempora cum, fugit
          architecto iste vero eveniet at cupiditate maiores beatae dicta in.
          Corporis, ab officia, eaque excepturi ullam deserunt corrupti
          molestiae soluta similique iste fugit, quaerat accusantium natus ad ex
          eveniet officiis! Veritatis, maiores amet laudantium quod eaque vero
          at!
        </Text>
      </View>
    </ScrollView>
  );
};

const sty = StyleSheet.create({
  mDiv: {
    padding: 20,
    backgroundColor: COLORS.bgScreen,
  },
});

export default Home;
