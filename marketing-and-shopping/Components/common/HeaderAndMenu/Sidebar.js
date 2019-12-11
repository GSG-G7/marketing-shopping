import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialIcons";

import generalStyle from "../CommonStyle";
import { sidebar } from "./style";

const Sidebar = ({ closedMenu }) => (
  <View style={[sidebar.overlay]}>
    <View style={[generalStyle.mainBgColor, sidebar.parent]}>
      <View style={[generalStyle.firstBgColor, sidebar.logo]}>
        <Text style={[generalStyle.mainColor, sidebar.logoText]}>
          M&#x214B;S
        </Text>

        <TouchableOpacity style={[sidebar.cancel]} onPress={closedMenu}>
          <Icon
            style={[generalStyle.mainColor, sidebar.cancelText]}
            name="cancel"
          />
        </TouchableOpacity>
      </View>

      <View style={[sidebar.containerImg]}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/22.jpg" }}
          style={[sidebar.img]}
        />
      </View>

      <View style={sidebar.containerLinks}>
        <TouchableOpacity>
          <Text style={[generalStyle.firsColor, sidebar.containerLinksText]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[generalStyle.firsColor, sidebar.containerLinksText]}>
            About
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[generalStyle.firsColor, sidebar.containerLinksText]}>
            Products
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[generalStyle.firsColor, sidebar.containerLinksText]}>
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[generalStyle.firsColor, sidebar.containerLinksText]}>
            LogOut
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Sidebar;
