import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://kidprenuer.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "kYCIe75Qee8T",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "a9TClsynC2qE",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "Mv81dbFUQmNQ",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "B2D8gCj_M3lD",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "PDjmU1X-TcBU",
    },
    firstName: { type: "string", storageKey: "o3mpu9X22ZRJ" },
    googleImageUrl: { type: "url", storageKey: "_9VM0ZHJIJlp" },
    googleProfileId: { type: "string", storageKey: "XZkF5n7beHZH" },
    lastName: { type: "string", storageKey: "VrMomwz9mhVs" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "SMibgfsrOEck",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "-K3ZNqk7saQ6",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "9qTue1oameOV",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "OYMjcAQ2t692",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "Dno50j_3FoQv",
    },
  },
};
