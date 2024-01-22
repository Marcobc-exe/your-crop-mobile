import { Text, TouchableOpacity, View } from "react-native";
import { MapModalInput } from "./MapModalInput";
import { useForm } from "react-hook-form";
import { FC, useState } from "react";
import { useStateProp } from "../../types/ReactHooksTypes/types";
import { CustomModalMsg } from "./CustomModalMsg";
import { RegisterMapLocation } from "./RegisterMapLocation";
import { useAppDispatch } from "../../store";
import { switchEditionMap } from "../../store/slices/mapSlice/mapSlice";
import { windowHeight } from "../../constants";

type modalsTepperProps = {
  handleMapUIHeight: (height: number) => void;
};

export const ModalsStepper: FC<modalsTepperProps> = ({ handleMapUIHeight }) => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: { inputMapName: "" },
  });

  const [showMapModal, setShowMapModal]: useStateProp<boolean> = useState(true);
  const [showOkStep, setShowOkStep]: useStateProp<boolean> = useState(false);
  const [handleMapLocation, setHandleMapLocation]: useStateProp<boolean> =
    useState(false);

  const handleRegisterMap = () => {
    const value = getValues().inputMapName;
    setShowMapModal(false);
    setShowOkStep(true);
    console.log(value);
  };

  const handleOkStep = () => {
    console.log("Ok!");
    handleMapUIHeight(80);
    setShowOkStep(false);
    setHandleMapLocation(true);
    // enable get location on map
    dispatch(switchEditionMap());
  };

  const handleRegisterMapLocation = () => {
    console.log("handleRegisterMap");
    handleMapUIHeight(windowHeight);
    setHandleMapLocation(false)
  };

  return (
    <View>
      <MapModalInput
        show={showMapModal}
        control={control}
        reset={reset}
        handleSubmit={handleSubmit}
        handleRegisterMap={handleRegisterMap}
      />

      <CustomModalMsg show={showOkStep} handleOkStep={handleOkStep} />

      {handleMapLocation && (
        <RegisterMapLocation
          handleRegisterMapLocation={handleRegisterMapLocation}
        />
      )}
    </View>
  );
};
