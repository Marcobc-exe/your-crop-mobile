import { FC } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ControllerTextInput } from "../TextInputs/ControllerTextInput";
import { control } from "../../types/ReactHookFormTypes";
import { useForm } from "react-hook-form";
import { styleInput } from "../../constants/styleInput";

type unitModalInputProps = {
  show: boolean;
  control: control;
  reset: () => void;
  handleSubmit: (props: () => void) => void;
  handleRegisterMap: () => void;
}

export const MapModalInput: FC<unitModalInputProps> = ({
  show,
  control,
  reset,
  handleSubmit,
  handleRegisterMap
}) => {
  return (
    <Modal visible={show} animationType="slide" transparent={true}>
      <View style={styles.containerMainModal}>
        <View style={styles.containerModal}>
          <Text style={styles.title}>Enter map details</Text>

          <ControllerTextInput
            name={"inputMapName"}
            control={control}
            rules={{
              required: "Required",
              minLength: {
                value: 4,
                message: "Debe tener mínimo 4 caracteres de largo",
              },
            }}
            styles={styleInput}
            placeholder={"Enter map name"}
          />
          <View style={styles.containerBtnsActions}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.btnAction, { backgroundColor: "#27ae60" }]}
              onPress={handleSubmit(handleRegisterMap)}
            >
              <Text style={styles.txtBtnAction}>{"Accept"}</Text>
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
    height: 270,
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
