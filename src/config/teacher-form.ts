import { ABMConfig } from "../types/abm-config";
import { VerticalLayout } from "@jsonforms/core";

// Example configuration for ABMs
export const teacherConfig: ABMConfig = {
  entity: "teachers",
  endpoint: "/api/generic/crud",
  schema: {
    type: "object",
    properties: {
      name: { type: "string", minLength: 3 },
      subject: { type: "string" },
      yearsOfExperience: { type: "integer", minimum: 0 },
    },
    required: ["name", "subject"],
  },
  uiSchema: {
    type: "VerticalLayout",
    elements: [
      { type: "Control", scope: "#/properties/name" },
      { type: "Control", scope: "#/properties/subject" },
      { type: "Control", scope: "#/properties/yearsOfExperience" },
    ],
  } as unknown as VerticalLayout,
  initialData: {
    name: "Jane Doe",
    subject: "Math",
    yearsOfExperience: 5,
  },
};
