import { v3 } from "./babylonjs/utils";
import { CameraConfig, Model, ModelConfig } from "./types";

export const MAX_WORD_SUGGESTION = 60;

export const OPENAI_TIMEOUT_MILLISECONDS = 5_000;
export const CHAT_MESSAGES_URL = "/api/chat";
export const MAX_CHARS = 300;
export const CORNER_ICON_SIZE = 24;

export const MAIN_CAMERA_NAME = "MainCamera";

export const DEFAULT_INITIAL_MESSAGE = "Hi How can I help you press the microphone button to speak";
export const DEFAULT_PROMPT = `Prompt - You are a librarian from NIE Library Singapore at NTU named LIBRIS,
 if other libraries are mentioned, answer in relation to the NIE Library,
 do not provide links and pictures also recommend books and 
 resources when asked and give accurate answers `;

export const DEFAULT_VOICE = "en-US-Neural2-H";
// export const DEFAULT_VOICE = "nova";

export const DEFAULT_MODEL: Model = "vest_dude";

export const defaultCameraConfig: CameraConfig = {
  alpha: Math.PI / 2,
  beta: Math.PI / 2.5,
  radius: 2.5,
  target: v3(0, 0.7, 0),
};

const defaultConfig: ModelConfig = {
  cameraConfig: defaultCameraConfig,
  voice: "en-US-Neural2-H",
  initialAnimation: "idle3_hand_hips",
  faceMeshName: "Face",
  morphTargets: {
    mouthMovement: "Face.M_F00_000_00_Fcl_MTH_A",
    leftEyeClose: "Face.M_F00_000_00_Fcl_EYE_Close_L",
    rightEyeClose: "Face.M_F00_000_00_Fcl_EYE_Close_R",
  },
  idleAnimations: ["idle1", "idle2", "idle3_hand_hips"],
  talkingBodyAnimations: ["talking1", "talking2_head_shake", "talking3"],
  positionOffset: v3(0, 0.015, 0),
};

export const models = {
  vroid_girl1: defaultConfig,
  vest_dude: {
    ...defaultConfig,
    morphTargets: {
      mouthMovement: "mouth_open",
    },
    faceMeshName: "rp_eric_rigged_001_geo",
    cameraConfig: {
      alpha: Math.PI / 2,
      beta: Math.PI / 2.5,
      radius: 3,
      target: v3(0, 0.9, 0),
    },
    positionOffset: v3(0, 0.03, 0),
  },
} as const;
