import { useState, useRef } from "react";
import { View, Modal, Alert } from "react-native";
import { CameraView, CameraType, FlashMode } from "expo-camera";
import { CameraProps } from "@/types/type";
import CameraButton from "./cameraButton";
import ToggleCameraFacingButton from "./toggleCameraFacingButton";
import CloseButton from "./closeButton";
import ToggleFlashButton from "./toggleFlashButton";
import LaunchGalleryButton from "./launchGalleryButton";

const CameraComponent = ({
  setImage,
  cameraVisible,
  setCameraVisible,
}: CameraProps) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [flash, setFlash] = useState<FlashMode>("off");
  const cameraRef = useRef<CameraView | null>(null);

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const toggleFlash = () => {
    setFlash((current) => (current === "off" ? "on" : "off"));
  };

  const closeCamera = () => {
    setCameraVisible(false);
  };

  const launchGallery = () => {
    console.log("Gallery");
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1, // Adjust quality (0 to 1)
          base64: false,
          skipProcessing: true,
        });
        if (photo?.uri) setImage(photo.uri);
        console.log(photo?.uri);
        closeCamera(); // Close the camera after capturing
      } catch (error) {
        Alert.alert("Camera Error", "Please try again later");
      }
    } else {
      Alert.alert("Camera Error", "Camera not is not ready yet");
    }
  };

  return (
    <Modal
      className="flex-1"
      visible={cameraVisible}
      transparent={false}
      animationType="slide"
    >
      <CameraView
        facing={facing}
        flash={flash}
        style={{ flex: 1 }}
        ref={cameraRef}
      >
        <View className="flex-row items-center justify-between absolute top-[5vh] w-full px-[8vw]">
          <CloseButton onPress={() => closeCamera()} />
          <ToggleFlashButton flashMode={flash} onPress={() => toggleFlash()} />
        </View>
        <View className="flex-row items-center justify-between absolute bottom-[5vh] w-full px-[10vw]">
          <ToggleCameraFacingButton onPress={() => toggleCameraFacing()} />
          <CameraButton onPress={() => takePicture()} />
          <LaunchGalleryButton onPress={() => launchGallery()} />
        </View>
      </CameraView>
    </Modal>
  );
};

export default CameraComponent;
