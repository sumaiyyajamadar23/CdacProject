import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CustomerProduct() {
  const username = sessionStorage.getItem("authenticatedUser")
  const [list, setList] = useState([]);
  const history = useHistory();

  var [searchitem, setSearchitem] = useState({ art: '' });

  // var [hasLoginFailed, sethasLoginFailed] = useState(false);
  var handleChange = (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setSearchitem({ ...searchitem, [name]: value, });
  };


  useEffect(() => {
    axios
      .post("http://localhost:9099/customer/allsearch", {})
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  function handleSearchAll() {

    axios
      .post("http://localhost:9099/customer/allsearch", {})
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(list)
  }

  function handleSearch(e) {
    e.preventDefault();
    axios
      .post("http://localhost:9099/customer/search", {
        art: searchitem.art,
      })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }





  var [selectedquantity, setSelectedQuantity] = useState({ quantity: '' });


  var handleChange = (e) => {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    setSelectedQuantity({ ...selectedquantity, [name]: value, });
    console.log(selectedquantity.quantity)
  };



  function addProduct(product) {
    console.log(product);
    console.log(product.art);
    console.log();

    if (selectedquantity.quantity > product.quantity || selectedquantity.quantity < 0) {
      alert("selected quantity not available")
    }
    else {
      axios
        .post("http://localhost:9099/customer-cart/add", {
          customerusername: username,
          art: product.art,
          quantity: selectedquantity.quantity,
          expectedprice: ((product.expected_Price / product.quantity) * selectedquantity.quantity).toFixed(2),
          artistname: product.artist.firstname
        })
        .then((response) => {
          if (response.data === "added_successfully") {

            alert("Product Added to the cart")
            //setSelectedQuantity({ ...selectedquantity, [product.quantity]: '', });
          }
          console.log(response.data);

        })
        .catch((error) => {
          console.log(error.response);
        });
    }

  }

  return (
    <div>
      <div class="d-flex justify-content-between">
        <div >
          <button type="button" className="btn btn-danger mt-3" onClick={handleSearchAll}>All</button>
        </div>

        <div class="container">
          <div className="row">
            <div className="col-4">
              <form class="d-flex">
                {/* <input class="form-control me-2" type="search" placeholder="Search For Product" aria-label="Search" name="art"
                          value={searchitem.art}
                          onChange={handleChange} />
                        <button class="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button> */}
              </form>
            </div>
          </div>
        </div>

        <div >
          <button type="button" className="btn btn-danger mt-3" onClick={history.goBack}>Back</button>
        </div>
      </div>





      <div className="container d-flex justify-content-center">
        <div className="row col-8">

          <table className="table table-dark table-hover  ">
            <thead><tr><td>Art Category</td><td>Quantity</td><td>Price</td><td>Artist</td><td></td></tr></thead>
            <tbody>

              {list.map((item) => {
                return (
                  <tr key={item.pid}>
                    <td>{item.art}</td>
                    <td>{item.quantity}</td>
                    <td>₹{(item.expected_Price).toFixed(2)}</td>
                    <td>{item.artist.firstname}</td>
                    <td><input type="number" name="quantity" className="form-control" min="1" max={item.quantity} placeholder="Quantity" style={{ width: "100px" }}
                      onChange={handleChange} /></td>
                    <td ><button type="button" class="btn btn-success" onClick={() => addProduct(item)}>Add To Cart</button></td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>

        </div>
      </div>

    </div>
  )
}

export default CustomerProduct;