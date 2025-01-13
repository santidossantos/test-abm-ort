import { useState, useEffect } from "react"
import { JsonForms } from "@jsonforms/react"
import { materialRenderers, materialCells } from "@jsonforms/material-renderers"
import { ABMConfig } from "../types/abm-config"
import { teacherConfig } from "../data/teacher-form"
import { studentConfig } from "../data/student-form"
import { ABMEntity } from "../types/abm-entity"

// Podrian venir del back
const entitiesConfigs: Record<ABMEntity, ABMConfig> = {
  teacher: teacherConfig,
  student: studentConfig,
}

// Vendrian de back
const entityOptions: ABMEntity[] = ["teacher", "student"]

export default function GenericABMForm() {
  const [selectedEntity, setSelectedEntity] = useState<ABMEntity>("teacher")
  const [formData, setFormData] = useState<object>({})
  const [config, setConfig] = useState<ABMConfig>(entitiesConfigs[selectedEntity])

  useEffect(() => {
    setConfig(entitiesConfigs[selectedEntity])
    setFormData(config.initialData || {})
  }, [selectedEntity, config.initialData])

  const handleSubmit = async () => {
    console.log("Submitting data:", formData)
  }

  const handleDelete = () => {
    console.log(`Deleting ${selectedEntity}`, formData)
  }

  return (
    <div>
      <h2>{`Manage ${selectedEntity}`}</h2>
      <label>Select Entity: </label>
      <select value={selectedEntity} onChange={(e) => setSelectedEntity(e.target.value as ABMEntity)}>
        {entityOptions.map((entity) => (
          <option key={entity} value={entity}>
            {entity.charAt(0).toUpperCase() + entity.slice(1)}
          </option>
        ))}
      </select>

      <br />
      <br />

      {config && (
        <JsonForms
          schema={config.schema}
          uischema={config.uiSchema}
          data={formData}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data }) => setFormData(data)}
        />
      )}
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleDelete} style={{ margin: "10px", backgroundColor: "red", color: "white" }}>
        Delete
      </button>
    </div>
  )
}
