import { useEffect, useState } from "react"
import TemplateTable from "../common/template-table/template-table.component"
import { getAllUser } from "./service/user.service"


const UserManagemnet = () => {
  const [dataUser, setDataUser] = useState([])
  useEffect(() => {
    getAllUser().then((res) =>{
      setDataUser(res.data)
    })
  }, [])
  return (
    <div>
      <TemplateTable dataTable={dataUser} />
    </div>
  )
}

export default UserManagemnet