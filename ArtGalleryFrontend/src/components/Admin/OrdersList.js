import React, { useEffect, useState } from 'react'
import axios from 'axios'


function OrdersList() {
  const [list, setList] = useState([])


  const getdata = async () => {
    const url = "http://localhost:9099/admin/Orders";
    const response = await axios.get(url)
    const res = response.data

    setList(res)
  }
  useEffect(() => {
    getdata();
  }, [])


  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Oid</th>
            <th scope="col">Artist name</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Art</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) =>
            <tr key={index}>
              <th scope="row">{item.oid}</th>
              <td>{item.artist.firstname + " " + item.artist.lastname}</td>
              <td>{item.customer.firstname + " " + item.customer.lastname}</td>
              <td>{item.art_category}</td>
              <td>{item.quantity}</td>
              <td>{item.total_amount}</td>
              <td>{item.status}


              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersList;