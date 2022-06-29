import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import {FileUploadPage} from "./FileUploadPage";
import {ACCESS_KEY, REGION, S3_BUCKET, SECRET_ACCESS_KEY} from "../Config";
import {uploadFile} from "react-s3";
import {
    GiConfirmed,
    GiFallingBomb,
    GiGrenade,
    GiLandMine,
    GiMissileLauncher,
    GiMortar,
    GiSoccerBall
} from "react-icons/gi";
import {FaBomb, FaTruckMonster} from "react-icons/fa";
import {IoIosBaseball} from "react-icons/io";
import {CgAirplane} from "react-icons/cg";
import {AiFillCreditCard} from "react-icons/ai";
import {useDataSource} from "./useDataSource";
import {BsFillTrashFill} from "react-icons/bs";

window.Buffer = window.Buffer || require("buffer").Buffer;

// AWS configuration
const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const localStorageResource = key => () => {
    return localStorage.getItem(key)
}

export const SelectDropdownMenu = () => {

    const lat = useDataSource(localStorageResource('lat'));
    const lon = useDataSource(localStorageResource('lon'));
    const categories = [
        {
            value: "Aerial Bombs",
            label: "Aerial Bombs",
            icon: <GiFallingBomb/>
        },
        {
            value: "Landmines",
            label: "Landmines",
            icon: <GiLandMine/>
        },
        {
            value: "Grenades",
            label: "Grenades",
            icon: <GiGrenade/>
        },
        {
            value: "Missiles/Rockets",
            label: "Missiles/Rockets",
            icon: <GiMissileLauncher/>
        },
        {
            value: "Projectiles/Mortars",
            label: "Projectiles/Mortars",
            icon: <GiMortar/>
        },
        {
            value: "Miscellaneous",
            label: "Miscellaneous",
            icon: <FaBomb/>
        }
    ];

    const sizes = [
        {
            value: "Small",
            label: "Small",
            icon: <IoIosBaseball/>
        },
        {
            value: "Medum",
            label: "Medium",
            icon: <GiSoccerBall/>
        },
        {
            value: "Large",
            label: "Large",
            icon: <FaTruckMonster/>
        },
        {
            value: "X-Large",
            label: "Extra Large/rockets",
            icon: <CgAirplane/>
        }
    ];

    const colors = [
        {
            value: "Green",
            label: "Green",
            icon: <AiFillCreditCard style={{color: "green", background: "green"}}/>
        },
        {
            value: "Tan",
            label: "Tan",
            icon: <AiFillCreditCard style={{color: "#DBAE86", background: "#DBAE86"}}/>
        },
        {
            value: "Gray",
            label: "Gray",
            icon: <AiFillCreditCard style={{color: "gray", background: "gray"}}/>
        },
        {
            value: "Brown",
            label: "Brown",
            icon: <AiFillCreditCard style={{color: "#8B572A", background: "#8B572A"}}/>
        },
        {
            value: "Black",
            label: "Black",
            icon: <AiFillCreditCard style={{color: "black", background: "black"}}/>
        },
        {
            value: "White",
            label: "White",
            icon: <AiFillCreditCard style={{color: "white", background: "white"}}/>
        },
        {
            value: "Yellow",
            label: "Yellow",
            icon: <AiFillCreditCard style={{color: "yellow", background: "yellow"}}/>
        },
        {
            value: "Other",
            label: "Other"
        }
    ];

    const secondaryColor = [
        {
            value: "Green",
            label: "Green",
            icon: <AiFillCreditCard style={{color: "green", background: "green"}}/>
        },
        {
            value: "Tan",
            label: "Tan",
            icon: <AiFillCreditCard style={{color: "#DBAE86", background: "#DBAE86"}}/>
        },
        {
            value: "Gray",
            label: "Gray",
            icon: <AiFillCreditCard style={{color: "gray", background: "gray"}}/>
        },
        {
            value: "Brown",
            label: "Brown",
            icon: <AiFillCreditCard style={{color: "#8B572A", background: "#8B572A"}}/>
        },
        {
            value: "Black",
            label: "Black",
            icon: <AiFillCreditCard style={{color: "black", background: "black"}}/>
        },
        {
            value: "White",
            label: "White",
            icon: <AiFillCreditCard style={{color: "white", background: "white"}}/>
        },
        {
            value: "Yellow",
            label: "Yellow",
            icon: <AiFillCreditCard style={{color: "yellow", background: "yellow"}}/>
        },
        {
            value: "Other",
            label: "Other"
        }
    ];

    const quantity = [
        {
            value: "1 - 5",
            label: "1 - 5"
        },
        {
            value: "6 - 10",
            label: "6 - 10"
        },
        {
            value: "10+",
            label: "10+",
        }
    ];

    const [selectedOptionCategory, setSelectedOptionCategory] = useState(null);

    const [selectedSize, setSelectedSize] = useState(null);

    const [selectedColor, setSelectedColor] = useState(null);

    const [selectedSecondaryColor, setSelectedSecondaryColor] = useState(null);

    const [selectedQuantity, setSelectedQuantity] = useState(null);

    //  set photo input values to null
    const [selectedFile, setSelectedFile] = useState(null)

    // set AWS photo key to null
    const [responseAwsKey, setResponseAwsKey] = useState(null);

    // set AWS photo location to null
    const [responseAwsLocation, setResponseAwsLocation] = useState(null);


    // set AWS photo location to null
    const [show2ndPartForm, setShow2ndPartForm] = useState(false);


    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOptionCategory(e);
    }
    const handleChangeSize = e => {

        setSelectedSize(e);
    }
    const handleChangeColors = e => {

        setSelectedColor(e);
    }
    const handleChangeQuantity = e => {

        setSelectedQuantity(e);
    }

    const handleChangeSecondaryColors = e => {

        setSelectedSecondaryColor(e);
    }

    //get photo values from input field and passed on to hook selectedFile (line 35)
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        setLoading(true)
        uploadFile(file, config)
            .then(data => {
                setResponseAwsKey(data.key)
                setResponseAwsLocation(data.location)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }
    const confirmPhoto = () => {
        setShow2ndPartForm(true)
    }

    const cancelConfirmPhoto = () => {
        setShow2ndPartForm(false);
        setResponseAwsLocation("");
        setResponseAwsKey("");
    }
    const [loading, setLoading] = useState(false)


    // <button className="wave" disabled={false}
    //         onClick={() => setShouldShowModal(!shouldShowModal)}>
    //     <span className="btnText">ADD MORE DETAILS</span>
    // </button>
    return (
        <div className="dropdowns-container upload flex justify-between mt-4">
            <div className="mb-5">

                <div className="container">
                    <div className="button-wrap">
                        <label className="button" htmlFor="upload">{selectedFile ? selectedFile.name : "Choose File"}</label>
                        <input id="upload" type="file"
                               onChange={handleFileInput} crossOrigin="anonymous" required/>
                        <button
                            className="text-white shadow-btn"
                            onClick={() => handleUpload(selectedFile)}>Submit photo
                        </button>
                        {loading ? <div className="ml-2">Loading</div> : ""}
                    </div>
                </div>

                {responseAwsLocation ? <div className="relative mt-2 h-[250px]"><img className="fill-window"
                                                                                     src={responseAwsLocation}
                                                                                     alt="responseAWS"
                                                                                     style={{height: 250, width: 200}}
                    />
                    </div>
                    : ""}

            </div>

            {responseAwsLocation ? <div className="flex justify-evenly mx-auto mb-4 cursor-pointer ">
                    <span onClick={confirmPhoto}>Confirm Photo
                        <GiConfirmed className="ml-2 cursor-pointer" style={{color: "green"}}/></span>
                    <span className="ml-4" onClick={cancelConfirmPhoto}>Remove Photo
                        <BsFillTrashFill className="ml-2" style={{color: "red"}}/></span>

                </div>
                : ""}
            {show2ndPartForm === true ?

                <Select
                    placeholder="Select Category"
                    value={selectedOptionCategory} // set selected value
                    options={categories} // set list of the data
                    onChange={handleChange} // assign onChange function
                    getOptionLabel={e => (
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {e.icon}
                            <span style={{marginLeft: 5}}>{e.label}</span>
                        </div>
                    )}
                /> : ""}

            {show2ndPartForm === true ? <Select
                placeholder="Select Size"
                value={selectedSize} // set selected value
                options={sizes} // set list of the data
                onChange={handleChangeSize} // assign onChange function
                getOptionLabel={e => (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {e.icon}
                        <span style={{marginLeft: 5}}>{e.label}</span>
                    </div>
                )}
            /> : ""}

            {show2ndPartForm === true ?
                <Select
                    placeholder="Select Color"
                    value={selectedColor} // set selected value
                    options={colors} // set list of the data
                    onChange={handleChangeColors} // assign onChange function
                    getOptionLabel={e => (
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {e.icon}
                            <span style={{marginLeft: 5}}>{e.label}</span>
                        </div>
                    )}
                /> : ""}


            {show2ndPartForm === true ?
                <Select
                    placeholder="Select Secondary Color"
                    value={selectedSecondaryColor} // set selected value
                    options={secondaryColor} // set list of the data
                    onChange={handleChangeSecondaryColors} // assign onChange function
                    getOptionLabel={e => (
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {e.icon}
                            <span style={{marginLeft: 5}}>{e.label}</span>
                        </div>
                    )}
                /> : ""}


            {show2ndPartForm === true ?
                <Select
                    placeholder="Select Quantity"
                    value={selectedQuantity} // set selected value
                    options={quantity} // set list of the data
                    onChange={handleChangeQuantity} // assign onChange function
                    getOptionLabel={e => (
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            {e.icon}
                            <span style={{marginLeft: 5}}>{e.label}</span>
                        </div>
                    )}
                /> : ""}

            <FileUploadPage
                lat={lat}
                lon={lon}
                category={selectedOptionCategory ? selectedOptionCategory.value : 'N/A'}
                size={selectedSize ? selectedSize.value : 'NA'}
                color={selectedColor ? selectedColor.value : 'N/A'}
                secColor={selectedSecondaryColor ? selectedSecondaryColor.value : 'N/A'}
                quantity={selectedQuantity ? selectedQuantity.value : null}
                responseAwsLocation={responseAwsLocation ? responseAwsLocation : null}
            />
        </div>
    );
}