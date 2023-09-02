import { useHistory } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Product() {
    const history = useHistory();
    let user = sessionStorage.getItem('authenticatedUser');
    const [product, setProduct] = useState({ artist: { user_name: user }, art: '', quantity: '', expected_Price: '' });


    var handleChange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;
        setProduct({ ...product, [name]: value, });
    };

    function addProduct(e) {
        var name = e.target.name;
        var value = e.target.value;
        setProduct({ ...product, [name]: value, })
    }

    function cancelProduct() {
        setProduct({ artist: { user_name: user }, art: '', quantity: '', expected_Price: '' });
    }

    function confirmProduct() {

        axios
            .post("http://localhost:9099/artist/add-product", {
                artist: { user_name: user },
                art: product.art,
                quantity: product.quantity,
                expected_Price: product.expected_Price
            })
            .then((response) => {
                console.log(response.data);
                alert("Product added successfully");
                setProduct({ artist: { user_name: user }, art: '', quantity: '', expected_Price: '' });
            })
            .catch((error) => {
                console.log(error.response);
            });

    }
    console.log(product);
    return (
        <div>

            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-success mt-3" ><Link className="dropdown-item" to="/artist/custom-product">Add Your Product</Link></button>
            </div>


            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger mt-3" onClick={history.goBack}>Back</button>
            </div>

            <div className=" container  d-flex flex-direction: column  justify-content-evenly ">
                <div class="row">

                    <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{ width: "18rem" }}>
                        <img src="https://media.timeout.com/images/103166739/1024/768/image.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The starry Night</h5>
                            <p className="card-text">Vincent Van Gogh’s most popular painting, The Starry Night </p>
                            <p>MSP :  20000 Rs</p>
                            <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" name="art" value="starrynight" onClick={addProduct}>Add Product</button>
                        </div>
                    </div>

                    <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{ width: "18rem" }}>
                        <img src="https://indianartideas.in/images/blog/Shakuntala%20by%20Raja%20Ravi%20Varma..jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Shakuntala by Raja Ravi Verma</h5>
                            <p className="card-text">Shankuntala-focused on the beauty of South Indian Women</p>
                            <p>MSP : 38000 Rs</p>
                            <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" name="art" value="shakuntala" onClick={addProduct}>Add Product</button>
                        </div>
                    </div>

                    <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{ width: "18rem" }}>
                        <img src="https://indianartideas.in/images/blog/Five%20Horses%20by%20M.F.Husain..jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Five Horses</h5>
                            <p className="card-text">Five horses by M.F.Hussain,one of the most famous painting by the artist</p>
                            <p>MSP :  35000</p>
                            <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" name="art" value="fivehorses" onClick={addProduct}>Add Product</button>
                        </div>
                    </div>

                    <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{ width: "18rem" }}>
                        <img src="https://en-media.thebetterindia.com/uploads/2017/01/67ba61ffa6a965769f3c2505e96f51d5.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Glow of Hope</h5>
                            <p className="card-text">Glow of hope by S L Haldankar is a painting of a young, demure girl stood still for three hours with a lamp in her hand</p>
                            <p>MSP : 18000 Rs</p>
                            <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" name="art" value="glowofhope" onClick={addProduct}>Add Product</button>
                        </div>
                    </div>

                    <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{ width: "18rem" }}>
                        <img src="https://en-media.thebetterindia.com/uploads/2017/01/bbf9027261ad5637bcfbff66a0fb3bbc-768x768.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tamil Girls with Her Parrots</h5>
                            <p className="card-text">S Elayaraja’s paintings are reknown for being hyper-real, almost photographical as he depicts ‘Dravidian girls’, in his much-acclaimed, inimitable style
                            </p>
                            <p>MSP : 32000 Rs</p>
                            <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" name="art" value="tamilgirl" onClick={addProduct}>Add Product</button>
                        </div>
                    </div>

                    <div className="col-3 card p-4 mt-4 mb-4 me-4 ms-4" style={{ width: "18rem" }}>
                        <img src="https://en-media.thebetterindia.com/uploads/2017/01/SH_Raza___Spandan_120_x_120_cm_acrylic_on_canvas_1997_sold-768x768.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bindu</h5>
                            <p className="card-text">A legendary modern artist who popularised Indian iconography globally, Syed Haider Raza never tired of the bindu‘or the shunya that became the focal point of energy in his work
                            </p>
                            <p>MSP : 25000 Rs</p>
                            <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" name="art" value="bindu" onClick={addProduct}>Add Product</button>
                        </div>
                    </div>

                </div>
            </div>



            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Required Input</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Quantity You Have:</label>
                                    <input type="number" name="quantity" class="form-control" id="recipient-name" value={product.quantity}
                                        onChange={handleChange} />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Expected Price:</label>
                                    <input type="number" name="expected_Price" class="form-control" id="recipient-name" value={product.expected_Price}
                                        onChange={handleChange} />
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={cancelProduct}>Cancel</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={confirmProduct}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;