import { ABMConfig } from "../types/abm-config"
import { VerticalLayout } from "@jsonforms/core"

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
      department: { type: "string", enum: ["Science", "Mathematics", "Arts"] },
      hireDate: { type: "string", format: "date" },
    },
    required: ["name", "subject", "department", "hireDate"],
  },
  uiSchema: {
    type: "VerticalLayout",
    elements: [
      { type: "Control", scope: "#/properties/name" },
      { type: "Control", scope: "#/properties/subject" },
      { type: "Control", scope: "#/properties/yearsOfExperience" },
      { type: "Control", scope: "#/properties/department" },
      { type: "Control", scope: "#/properties/hireDate" },
    ],
  } as unknown as VerticalLayout,
  initialData: {
    name: "Jane Doe",
    subject: "Math",
    yearsOfExperience: 5,
  },
}
