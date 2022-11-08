import { useTable } from 'react-table';
import React from 'react';
 
 function OrderPageTable() {
   const data = React.useMemo(
     () => [
       {
        id: '1',
        invoice_id: '1',
        customer_name: 'kurt cristobal',
        date_ordered: '00/00/0000',
        actions: '',
       },
       {
        id: '1',
        invoice_id: '1',
        customer_name: 'kurt adrian wynfred dl cristobal',
        date_ordered: '00/00/0000',
        actions: '',  
       }
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
       },
       {
        Header: 'Invoice ID',
        accessor: 'invoice_id',
       },
       {
        Header: 'Customer Name',
        accessor: 'customer_name',
        
       },
       {
        Header: 'Date Ordered',
        accessor: 'date_ordered',
       },
       {
        Header: 'Action',
        accessor: 'action',
       }
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '70vw', marginTop: '25px' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   border: 'solid 1px black',
                   color: 'black',
                   fontWeight: 'bold',
                   padding: '10px 15px',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '8px 25px',
                       border: 'solid 1px gray',
                       textAlign: 'center',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }

 export default OrderPageTable;