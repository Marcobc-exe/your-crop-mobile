import { FC } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type customModalInputsProps = {
  modalHeight: number;
  inputs: number;
  title: string;
  placeholder: [string] | [string, string];
  btnActions: number;
  bgColor: [string] | [string, string] | [string, string, string];
  btnText: [string] | [string, string] | [string, string, string];
  onPress: (prop: string | undefined) => void;
};

export const CustomModalInputs: FC<customModalInputsProps> = ({
  modalHeight,
  inputs,
  title,
  placeholder,
  btnActions,
  bgColor,
  btnText,
  onPress,
}) => {
  return (
    <Modal visible={true} animationType="slide" transparent={true}>
      <View style={styles.containerMainModal}>
        <View style={[styles.containerModal, { height: modalHeight }]}>
          <Text style={styles.title}>{title}</Text>

          {inputs === 1 && (
            <TextInput
              placeholder={placeholder[0]}
              placeholderTextColor={"#000"}
              style={styles.txtInput}
            />
          )}

          {inputs === 2 && (
            <>
              <TextInput
                placeholder={placeholder[0]}
                placeholderTextColor={"#000"}
                style={styles.txtInput}
              />
              <TextInput
                placeholder={placeholder[1]}
                placeholderTextColor={"#000"}
                style={styles.txtInput}
              />
            </>
          )}

          <View style={styles.containerBtnsActions}>
            {btnActions === 1 && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.btnAction, { backgroundColor: bgColor[0] }]}
                onPress={() => onPress(btnText[0])}
              >
                <Text style={styles.txtBtnAction}>{btnText[0]}</Text>
              </TouchableOpacity>
            )}

            {btnActions === 2 && (
              <>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.btnAction, { backgroundColor: bgColor[0] }]}
                  onPress={() => onPress(btnText[0])}
                >
                  <Text style={styles.txtBtnAction}>{btnText[0]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.btnAction, { backgroundColor: bgColor[1] }]}
                  onPress={() => onPress(btnText[1])}
                >
                  <Text style={styles.txtBtnAction}>{btnText[1]}</Text>
                </TouchableOpacity>
              </>
            )}

            {btnActions === 3 && (
              <>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.btnAction, { backgroundColor: bgColor[0] }]}
                  onPress={() => onPress(btnText[0])}
                >
                  <Text style={styles.txtBtnAction}>{btnText[0]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.btnAction, { backgroundColor: bgColor[1] }]}
                  onPress={() => onPress(btnText[1])}
                >
                  <Text style={styles.txtBtnAction}>{btnText[1]}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.btnAction, { backgroundColor: bgColor[2] }]}
                  onPress={() => onPress(btnText[2])}
                >
                  <Text style={styles.txtBtnAction}>{btnText[2]}</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerMainModal: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  containerModal: {
    backgroundColor: "#154163",
    width: 300,
    borderRadius: 30,
    borderColor: "#fff",
    borderWidth: 2,
    position: "absolute",
    padding: 20,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  txtInput: {
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 12,
    paddingHorizontal: 14,
    borderColor: "#000",
    borderWidth: 2,
    height: 40,
  },
  containerBtnsActions: {
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    width: "100%",
    gap: 10,
  },
  btnAction: {
    borderColor: "#fff",
    borderWidth: 2,
    width: "65%",
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
  },
  txtBtnAction: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});
