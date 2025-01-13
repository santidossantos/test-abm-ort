import { UISchemaElement } from "@jsonforms/core";

// Generic schema and UI schema definition
export type ABMConfig = {
  entity: string; // Entity name (e.g., 'students', 'teachers')
  schema: object; // JSON schema for form validation
  uiSchema: UISchemaElement; // JSONForms UI schema for form layout
  endpoint: string; // API endpoint for the entity
  initialData?: object; // Optional initial data for form prefill
};
