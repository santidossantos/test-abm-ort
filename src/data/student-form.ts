import { ABMConfig } from "../types/abm-config";
import { HorizontalLayout } from "@jsonforms/core";

// Example configuration for ABMs
export const studentConfig: ABMConfig = {
  entity: "students",
  endpoint: "/api/generic/crud",
  schema: {
    type: "object",
    properties: {
      name: { type: "string", minLength: 2 },
      grade: { type: "string" },
      parentContact: { type: "string" },
    },
    required: ["name", "grade"],
  },
  uiSchema: {
    type: "HorizontalLayout",
    elements: [
      { type: "Control", scope: "#/properties/name" },
      { type: "Control", scope: "#/properties/grade" },
      { type: "Control", scope: "#/properties/parentContact" },
    ],
  } as unknown as HorizontalLayout,
  initialData: {}, // El back podria mandar un objeto con los datos iniciales
};
