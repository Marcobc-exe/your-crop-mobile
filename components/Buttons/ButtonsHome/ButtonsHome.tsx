import { FC, useState } from "react";
import { useStateProp } from "../../../types/ReactHooksTypes/types";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FadersHorizontal, Folder, Plus } from "phosphor-react-native";
import { windowWidth } from "../../../constants";
import { BtnsMenuHome } from "../BtnsMenuHome/BtnsMenuHome";

type buttonsHome = {
  handleCreator: () => void;
};

export const ButtonsHome: FC<buttonsHome> = ({ handleCreator }) => {
  const [openMenuFilters, setOpenMenuFilters]: useStateProp<boolean> =
    useState(false);

  const [openMenuCreator, setOpenMenuCreator]: useStateProp<boolean> =
    useState(false);

  const handleMenuCreator = () => {
    setOpenMenuCreator((prevValue: boolean) => !prevValue);
  };

  return (
    <View style={styles.containerButtons}>
      <View style={styles.boxButtons}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.buttons, { backgroundColor: "#154163" }]}
          onPress={() => setOpenMenuFilters((prevValue: boolean) => !prevValue)}
        >
          <FadersHorizontal size={25} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.buttons, { backgroundColor: "#cc8e35" }]}
        >
          <Folder size={25} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.buttons, { backgroundColor: "#218c74" }]}
          onPress={handleMenuCreator}
        >
          <Plus size={25} color="white" />
        </TouchableOpacity>
      </View>

      <BtnsMenuHome
        openMenuFilters={openMenuFilters}
        openMenuCreator={openMenuCreator}
        handleCreator={handleCreator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    position: "absolute",
    bottom: "8%",
    left: 15,
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    width: windowWidth - 40,
  },
  boxButtons: {
    height: 170,
    justifyContent: "space-between",
  },
  buttons: {
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
});
