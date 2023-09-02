import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { Alert, AlertTitle } from "@mui/material";

function CustomerReg() {

    const myStyle = {
        backgroundImage:
            "url('https://media-cdn.tripadvisor.com/media/photo-s/13/e4/97/a0/wego-art-gallery-art.jpg')",
        height: '10vh',
        marginTop: '0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const myStyle1 = {
        backgroundImage:
            "url('https://rukminim1.flixcart.com/image/850/850/kzsqykw0/painting/j/a/l/12-3-indr4069fl-indianara-original-imagbq4tgubz9hna.jpeg?q=90')",

        height: '130vh',
        marginTop: '0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: "25px"
    };



    const [registration, setRegistration] = useState({
        cid: null,
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        user_name: "",
        address: "",
        password: "",

    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegistration({ ...registration, [name]: value });
    };

    //let [searchparams] = useSearchParams()
    //let editid = searchparams.get("id");
    let { cid } = useParams();

    alert(cid)

    const getuserByid = async () => {
        const url = `http://localhost:9099/admin/single/${cid}`
        const singleobj = await axios.get(url)
        console.log(singleobj.data);
        setRegistration(singleobj.data)
    }
    useEffect(() => { getuserByid() }, [])

    const [isvalid, setIsvalid] = useState(false);
    let [status, setStatus] = useState(false);

    console.log(registration);
    console.log(isvalid);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked")
        if (isvalid) {
            const url = `http://localhost:9099/admin/edit/${cid}`
            await axios
                .put(url, {
                    cid: cid,
                    email: registration.email,
                    firstname: registration.firstname,
                    lastname: registration.lastname,
                    password: registration.password,
                    contact: registration.contact,
                    user_name: registration.user_name,
                    address: registration.address

                })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error.response);
                });

            setRegistration({
                firstname: "",
                lastname: "",
                email: "",
                contact: "",
                user_name: "",
                address: "",
                password: "",
            });

            //alert("Registration successful")
            setStatus(true)
            setTimeout(() => setStatus(false), 2500);
        }
        else {
            alert("Registration Unsuccessful")
        }

    }



    const [fnameErr, setFnameErr] = useState("")
    function firstNameValidation() {
        if (registration.firstname === "") {
            setFnameErr("* Invalid Firstname");
            setIsvalid(false);
        }
        else {
            setFnameErr("");
            setIsvalid(true);
        }
    }

    const [lnameErr, setLnameErr] = useState("")
    function lastNameValidation() {
        if (registration.lastname === "") {
            setLnameErr("* Invalid Last Name");
            setIsvalid(false);
        }
        else {
            setLnameErr("");
            setIsvalid(true);
        }
    }

    const [emailErr, setEmailErr] = useState("")
    function emailValidation() {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ;
        if (regex.test(registration.email)) {
            setEmailErr("");
            setIsvalid(true)
        }
        else {
            setEmailErr("* Invalid Email");
            setIsvalid(false);
        }
    }

    const [contactNoErr, setContactNoErr] = useState("")
    function contactNoValidation() {
        if (registration.contact.length != 10) {
            setContactNoErr("* Invalid Contact No");
            setIsvalid(false);
        }
        else {
            setContactNoErr("");
            setIsvalid(true);
        }
    }

    const [userNameErr, setUserNameErr] = useState("")
    function userNameValidation() {
        if (registration.user_name === "") {
            setUserNameErr("* Invalid User Name");
            setIsvalid(false);
        }
        else {
            setUserNameErr("");
            setIsvalid(true);
        }
    }

    const [passwordErr, setPasswordErr] = useState("")
    function passwordValidation() {
        if (registration.password === "") {
            setPasswordErr("* Invalid Password")
            setIsvalid(false);
        }
        else {
            setPasswordErr("");
            setIsvalid(true);
        }
    }

    const [addressErr, setAddressErr] = useState("")
    function addressValidation() {
        if (registration.address === "") {
            setAddressErr("* Invalid Address");
            setIsvalid(false);
        }
        else {
            setAddressErr("");
            setIsvalid(true);
        }
    }


    return (

        <>
            {/* <section className="vh-100" > */}

            <div className="container-fluid h-100" style={myStyle}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-9" >
                        <div className="card text-black" style={myStyle1} >
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            Customer-Registration
                                        </p>

                                        <form className="mx-1 mx-md-4" method="Post">
                                            <div className="d-flex flex-column  mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        name="firstname"
                                                        className="form-control"
                                                        placeholder="First Name"
                                                        value={registration.firstname}
                                                        onChange={handleChange}
                                                        onBlur={firstNameValidation}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-danger">{fnameErr}</span>
                                                </div>

                                            </div>

                                            <div className="d-flex flex-column  mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        name="lastname"
                                                        className="form-control"
                                                        placeholder="Last Name"
                                                        value={registration.lastname}
                                                        onChange={handleChange}
                                                        onBlur={lastNameValidation}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-danger">{lnameErr}</span>
                                                </div>

                                            </div>

                                            <div className="d-flex flex-column  mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        value={registration.email}
                                                        onChange={handleChange}
                                                        onBlur={emailValidation}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-danger">{emailErr}</span>
                                                </div>

                                            </div>

                                            <div className="d-flex flex-column  mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="contactNo"
                                                        name="contact"
                                                        className="form-control"
                                                        placeholder="Contact No"
                                                        value={registration.contact}
                                                        onChange={handleChange}
                                                        onBlur={contactNoValidation}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-danger">{contactNoErr}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column  mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="address"
                                                        name="address"
                                                        className="form-control"
                                                        placeholder="Address"
                                                        value={registration.address}
                                                        onChange={handleChange}
                                                        onBlur={addressValidation}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-danger">{addressErr}</span>
                                                </div>

                                            </div>



                                            <div className="d-flex flex-column  mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="userName"
                                                        name="user_name"
                                                        className="form-control"
                                                        placeholder="user Name"
                                                        value={registration.user_name}
                                                        onChange={handleChange}
                                                        onBlur={userNameValidation}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-danger">{userNameErr}</span>
                                                </div>

                                            </div>

                                            <div className="d-flex flex-column  mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="password"
                                                        name="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        value={registration.password}
                                                        onChange={handleChange}
                                                        onBlur={passwordValidation}
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-danger">{passwordErr}</span>
                                                </div>
                                                {status && <Alert severity="success">
                                                    <AlertTitle>Success</AlertTitle>
                                                    Updated succefully — <strong>check it out!</strong>
                                                </Alert>}

                                            </div>

                                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}

        </>

    );
};

export default CustomerReg;