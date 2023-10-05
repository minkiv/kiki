import { useEffect, useState } from "react"
import { getAllCategory } from "./service/category.service"
import TemplateTable from '../common/template-table/template-table.component';


const CategoryManagement = () => {
    const [dataCategory, setDataCategory] = useState([])
    useEffect(()=> {
        getAllCategory().then((res) =>{
            setDataCategory(res.data)
        })
    },[])
    return (
        <div>
            <TemplateTable dataTable={dataCategory}/>
        </div>
    )
}


export default CategoryManagement