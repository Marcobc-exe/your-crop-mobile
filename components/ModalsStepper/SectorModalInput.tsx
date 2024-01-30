import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ControllerTextInput } from "../TextInputs/ControllerTextInput";
import { styleInput } from "../../constants/styleInput";
import { control } from "../../types/ReactHookFormTypes";
import { FC } from "react";

type sectorModalInputProps = {
  show: boolean;
  control: control;
  reset: () => void;
  handleSubmit: (props: () => void) => void;
  handleRegisterSector: () => void;
  text?: string;
};

export const SectorModalInput: FC<sectorModalInputProps> = ({
  show,
  control,
  reset,
  handleSubmit,
  handleRegisterSector,
  text = "",
}) => {
  return (
    <Modal visible={show} animationType="slide" transparent={true}>
      <View style={styles.containerMainModal}>
        <View style={styles.containerModal}>
          <Text style={styles.title}>Enter {text}sector details</Text>

          <ControllerTextInput
            name={"inputSectorName"}
            control={control}
            rules={{
              required: "Required",
              minLength: {
                value: 4,
                message: "Should has to be a minimum 4 characters long",
              },
            }}
            styles={styleInput}
            placeholder={"Enter sector name"}
          />
          <ControllerTextInput
            name={"inputSectorId"}
            control={control}
            rules={{
              required: "Required",
              minLength: {
                value: 4,
                message: "Should has to be a minimum 4 characters long",
              },
            }}
            styles={styleInput}
            placeholder={"Enter Sector ID"}
          />
          <View style={styles.containerBtnsActions}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.btnAction, { backgroundColor: "#27ae60" }]}
              onPress={handleSubmit(handleRegisterSector)}
            >
              <Text style={styles.txtBtnAction}>{"Add sector"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.btnAction, { backgroundColor: "#e74c3c" }]}
              // onPress={() => onPress("Cancel")}
            >
              <Text style={styles.txtBtnAction}>{"Cancel"}</Text>
            </TouchableOpacity>
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
    height: 320,
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
