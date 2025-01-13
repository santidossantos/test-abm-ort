import { useState, useEffect } from "react"
import { JsonForms } from "@jsonforms/react"
import { materialRenderers, materialCells } from "@jsonforms/material-renderers"
import { ABMConfig } from "../types/abm-config"
import { teacherConfig } from "../config/teacher-form"
import { studentConfig } from "../config/student-form"
import { ABMEntity } from "../types/abm-entity"
import { mockData } from "../data/entities-mock"

// Podrian venir del back
const entitiesConfigs: Record<ABMEntity, ABMConfig> = {
  teacher: teacherConfig,
  student: studentConfig,
}

export default function GenericABMForm() {
  const [selectedEntity, setSelectedEntity] = useState<ABMEntity>("teacher")
  const [formData, setFormData] = useState<object>({})
  const [config, setConfig] = useState<ABMConfig>(entitiesConfigs[selectedEntity])
  const [dataList, setDataList] = useState(mockData[selectedEntity])

  useEffect(() => {
    setConfig(entitiesConfigs[selectedEntity])
    setDataList(mockData[selectedEntity])
    setFormData(config.initialData || {})
  }, [selectedEntity, config.initialData])

  const handleEdit = (item: object) => {
    setFormData(item)
  }

  const handleSubmit = async () => {
    console.log("Submitting data:", formData)
    console.log("with config", config)
  }

  const handleDelete = () => {
    console.log(`Deleting ${selectedEntity}`, formData)
  }

  return (
    <div>
      <h2>{`Manage ${selectedEntity}`}</h2>
      <label>Select Entity: </label>
      <select value={selectedEntity} onChange={(e) => setSelectedEntity(e.target.value as ABMEntity)}>
        {Object.keys(entitiesConfigs).map((entity) => (
          <option key={entity} value={entity}>
            {entity.charAt(0).toUpperCase() + entity.slice(1)}
          </option>
        ))}
      </select>

      <h3>List of {selectedEntity}s</h3>
      <ul>
        {dataList.map((item) => (
          <li key={item.id}>
            {Object.values(item).join(" - ")}
            <button onClick={() => handleEdit(item)} style={{ marginLeft: "10px" }}>
              Edit
            </button>
          </li>
        ))}
      </ul>

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
