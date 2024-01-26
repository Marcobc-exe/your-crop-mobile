import { FC } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type customModalMsg = {
  show: boolean;
  text: string;
  handleOkStep: () => void;
}

export const CustomModalMsg: FC<customModalMsg> = ({
  show,
  text,
  handleOkStep
}) => {
  return (
    <Modal visible={show} animationType="slide" transparent={true}>
      <View style={styles.containerMainModal}>
        <View style={styles.containerModal}>
          <Text style={styles.title}>{text}</Text>
          <View style={styles.containerBtnsActions}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnAction}
              onPress={handleOkStep}
            >
              <Text style={styles.txtBtnAction}>{"Ok!"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

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
    height: 180,
  },
  title: {
    color: "#fff",
    // textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
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
    borderColor: "#000",
    borderWidth: 2,
    width: "65%",
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  txtBtnAction: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
  },
})