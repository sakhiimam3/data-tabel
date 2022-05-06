import React,{useState,useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css"
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


const TableList = () => {
  const [datalist,setDatalist]=useState([])
  const Api="https://jsonplaceholder.typicode.com/users";

  
  const columns = [{
    dataField: 'id',
    text: 'Product ID',
    
  }, {
    dataField: 'name',
    text: 'Name',
    sort:true,
    filter:textFilter()
  }, {
    dataField: 'username',
    text: 'Username',
    sort:true,
    filter:textFilter()
  },
  {
    dataField: 'email',
    text: 'Email',
    sort:true,
    filter:textFilter()
  }

];
   const paigination=paginationFactory(
     {
       page:1,
       sizePerPage:5,
       lastPageText:">>",
       firstPageText:"<<",
       nextPageText:"Next",
       prePageText:"Pre",
       showTotal:true,
       alwaysShowAllBtns:true,
       onPageChange:function(page,sizePerpage){
           console.log("page",page)
           console.log("sizeperpage",sizePerpage)
       },
       onSizePerPageChange:function(page,sizePerpage){
        console.log("page",page)
        console.log("sizeperpage",sizePerpage)
       }
           
     }
   )

  useEffect(()=>{
    fetch(Api)
    .then(response => response.json())
    .then(data =>setDatalist(data))
    .catch((err)=>{
         console.log(err)
    })
  },[])

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
          <BootstrapTable 
      response
      bootstrap4 
      keyField='id'   
      columns={columns} 
       data={datalist} 
       pagination={paigination}
       filter={filterFactory()}
       wrapperClasses="table-responsive"
       
       />
          </div>
        </div>
      </div>
      
          
    </>
  )
}

export default TableList