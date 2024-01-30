import { View } from "react-native";
import { MapModalInput } from "./MapModalInput";
import { useForm } from "react-hook-form";
import { FC, useState } from "react";
import { useStateProp } from "../../types/ReactHooksTypes/types";
import { CustomModalMsg } from "./CustomModalMsg";
import { RegisterMapLocation } from "./RegisterMapLocation";
import { useAppDispatch } from "../../store";
import {
  addNewMap,
  handleMapName,
  switchEditionMap,
} from "../../store/slices/mapSlice/mapSlice";
import { statusBarHeight, windowHeight } from "../../constants";
import { UnitModalInput } from "./UnitModalInput";
import { HeaderCreationMap } from "../Headers/HeaderCreationMap";
import {
  handleUnitProps,
  switchEditionUnit,
} from "../../store/slices/unitSlice/unitSlice";
import { RegisterUnitLocation } from "./RegisterUnitLocation";
import { SectorModalInput } from "./SectorModalInput";
import { handleSectorProps, switchEditionSector } from "../../store/slices/sectorSlice/sectorSlice";
import { ControllPanel } from "../MapUI/ControllPanel";

type modalsTepperProps = {
  handleMapUIHeight: (height: number) => void;
};

export const ModalsStepper: FC<modalsTepperProps> = ({ handleMapUIHeight }) => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      inputMapName: "",
      inputUnitName: "",
      inputUnitId: null,
      inputSectorName: "",
      inputSectorId: "",
    },
  });

  const [showMapModal, setShowMapModal]: useStateProp<boolean> = useState(true);
  const [showOkStep, setShowOkStep]: useStateProp<boolean> = useState(false);
  const [showOkStepUnit, setShowOkStepUnit]: useStateProp<boolean> =
    useState(false);
  const [showOkStepSector, setShowOkStepSector]: useStateProp<boolean> =
    useState(false);
  const [handleMapLocation, setHandleMapLocation]: useStateProp<boolean> =
    useState(false);
  const [showUnitModal, setShowUnitModal]: useStateProp<boolean> =
    useState(false);
  const [handleUnitLocation, setHandleUnitLocation]: useStateProp<boolean> =
    useState(false);
  const [showSectorModal, setShowSectorModal]: useStateProp<boolean> =
    useState(false);

  // * REGISTER MAP
  const handleRegisterMap = () => {
    const mapName = getValues().inputMapName;

    setShowMapModal(false);
    setShowOkStep(true);
    dispatch(handleMapName(mapName));
  };

  const handleOkStep = () => {
    handleMapUIHeight(80);
    setShowOkStep(false);
    setHandleMapLocation(true);
    dispatch(switchEditionMap());
  };

  const handleRegisterMapLocation = () => {
    handleMapUIHeight(windowHeight - statusBarHeight);
    setHandleMapLocation(false);
    setShowUnitModal(true);
    dispatch(switchEditionMap());
    dispatch(addNewMap());
  };

  // * REGISTER UNIT
  const handleRegisterUnit = () => {
    const unitID = getValues().inputUnitId;
    const unitName = getValues().inputUnitName;

    dispatch(handleUnitProps({ unitID, unitName }));
    setShowUnitModal(false);
    setShowOkStepUnit(true);
  };

  const handleOkStepUnit = () => {
    setShowOkStepUnit(false);
    setHandleUnitLocation(true);
    dispatch(switchEditionUnit());
  };

  const handleRegisterUniLocation = () => {
    setHandleUnitLocation(false);
    setShowSectorModal(true);
    dispatch(switchEditionUnit());
  };

  // * REGISTER SECTOR
  const handleRegisterSector = () => {
    const sectorID = getValues().inputSectorId;
    const sectorName = getValues().inputSectorName;

    dispatch(handleSectorProps({ sectorID, sectorName }));
    setShowSectorModal(false);
    setShowOkStepSector(true);
  };

  const handleOkStepSector = () => {
    setShowOkStepSector(false);
    dispatch(switchEditionSector());
  };

  return (
    <>
      <HeaderCreationMap show={handleMapLocation} />
      <MapModalInput
        show={showMapModal}
        control={control}
        reset={reset}
        handleSubmit={handleSubmit}
        handleRegisterMap={handleRegisterMap}
      />

      <CustomModalMsg
        show={showOkStep}
        text={"Touch on map where will be your map."}
        handleOkStep={handleOkStep}
      />

      {handleMapLocation && (
        <RegisterMapLocation registerMap={handleRegisterMapLocation} />
      )}

      <UnitModalInput
        show={showUnitModal}
        control={control}
        reset={reset}
        handleSubmit={handleSubmit}
        handleRegisterUnit={handleRegisterUnit}
      />

      <CustomModalMsg
        show={showOkStepUnit}
        text={"Touch on map where will be your unit."}
        handleOkStep={handleOkStepUnit}
      />

      {handleUnitLocation && (
        <RegisterUnitLocation registerUnit={handleRegisterUniLocation} />
      )}

      <SectorModalInput
        show={showSectorModal}
        control={control}
        reset={reset}
        handleSubmit={handleSubmit}
        handleRegisterSector={handleRegisterSector}
      />

      <CustomModalMsg
        show={showOkStepSector}
        text={"Start to draw the first polygon on map."}
        handleOkStep={handleOkStepSector}
      />

      <ControllPanel />
    </>
  );
};
