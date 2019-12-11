import React, { Component } from "react";
import { View } from "react-native";

import Slideshow from "react-native-image-slider-show";

class Slider extends Component {
  render() {
    const images = [
      "http://placeimg.com/640/480/any",
      "https://randomuser.me/api/portraits/men/41.jpg",
      "http://placeimg.com/640/480/any"
    ];

    const { arrayOfImages } = this.props;

    return (
      <View>
        <Slideshow
          dataSource={arrayOfImages.map((e, i) => {
            return {
              url: e
            };
          })}
          height={320}
          scrollEnabled={true}
        />
      </View>
    );
  }
}

export default Slider;
