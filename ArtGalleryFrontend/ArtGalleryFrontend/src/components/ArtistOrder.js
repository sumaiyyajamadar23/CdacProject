import react from "react";
import {useState , useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import {useHistory} from "react-router-dom";

function Order()
{
    const history = useHistory();
    const { username } = useParams();
    
    const [list ,setList] = useState([]);
    useEffect(() => {
        axios
        .post("http://localhost:9099/artist/orders", {
          user_name: username,
        })
        .then((response) => {

          setList(response.data);   
       
        })
        .catch((error) => {
          console.log(error.response);
        });
      }, []);
console.log(list);
      function changeStatus(item,e){

        const oid = item.oid;
        const fid = item.artist.fid;
        const crop_category =item.art_category;
        const quantity = item.quantity;
        console.log(fid);
        console.log(oid);
          axios
          .post("http://localhost:9099/artist/orders/change-status", {
            oid : oid ,
            artist : {fid : fid},
            art_category : art_category,
            quantity : quantity
          })
          .then((response) => {
          
            if(response.data == "approved successfully")
            {
            alert("Order Confirmed successfully")  
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
        
      }
     
 return(

     <div>
          <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mt-3" onClick={history.goBack}>Back</button>
            </div>

        <div className="container d-flex justify-content-center">
                <div className="row col-8">
                    
            <table class="table table-success table-hover table-striped">
                <thead>
                <tr class="table-success">
                    <td class="table-danger">Art Category</td>
                    <td class="table-danger">Quantity</td>
                    <td class="table-danger">Total Amount</td>
                    <td class="table-danger">Status</td>
                    <td class="table-danger">Customer Name</td>
                    <td class="table-danger"></td>
                </tr>
                </thead>
                <tbody>
                {list.map((item)=>{
                        return(
                            <tr class="table-success" key={item.oid}>                                            
                            <td class="table-success">{item.art_category}</td>
                            <td class="table-success">{item.quantity}</td>
                                <td class="table-success">{item.total_amount}</td>
                                <td class="table-success">{item.status}</td>
                                <td class="table-success">{item.customer.firstname}</td>
                                <td class="table-success"><button type="button" class="btn btn-success"name="oid" value={item.oid}  onClick={()=>changeStatus(item)}>Confirm</button></td>                                          
                            </tr>
                    )}) 
                    }
                </tbody>
            </table>
            </div>
            </div>

     </div>
 );
}

export default Order;