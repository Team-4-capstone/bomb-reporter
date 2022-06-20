import React, {useState} from 'react';
import Select from 'react-select';
import {FileUploadPage} from "./FileUploadPage";
import {ACCESS_KEY, REGION, S3_BUCKET, SECRET_ACCESS_KEY} from "../Config";
import {uploadFile} from "react-s3";
import {GiFallingBomb, GiGrenade, GiLandMine, GiMissileLauncher, GiMortar, GiSoccerBall} from "react-icons/gi";
import {FaBomb, FaTruckMonster} from "react-icons/fa";
import {IoIosBaseball} from "react-icons/io";
import {CgAirplane} from "react-icons/cg";
import {AiFillCreditCard} from "react-icons/ai";
import {useDataSource} from "../useDataSource";
import styled from "styled-components";

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
            value: "aerial_bombs",
            label: "aerial bombs",
            icon: <GiFallingBomb/>
        },
        {
            value: "landmines",
            label: "landmines",
            icon: <GiLandMine/>
        },
        {
            value: "grenades",
            label: "grenades",
            icon: <GiGrenade/>
        },
        {
            value: "missiles_rockets",
            label: "missiles/rockets",
            icon: <GiMissileLauncher/>
        },
        {
            value: "projectiles_mortars",
            label: "projectiles/mortars",
            icon: <GiMortar/>
        },
        {
            value: "miscellaneous",
            label: "miscellaneous",
            icon: <FaBomb/>
        }
    ];

    const sizes = [
        {
            value: "S",
            label: "Small",
            icon: <IoIosBaseball/>
        },
        {
            value: "M",
            label: "Medium",
            icon: <GiSoccerBall/>
        },
        {
            value: "L",
            label: "Large",
            icon: <FaTruckMonster/>
        },
        {
            value: "XL",
            label: "Extra Large/rockets",
            icon: <CgAirplane/>
        }
    ];

    const colors = [
        {
            value: "green",
            label: "Green",
            icon: <AiFillCreditCard style={{color: "green", background: "green"}}/>
        },
        {
            value: "tan",
            label: "Tan",
            icon: <AiFillCreditCard style={{color: "#DBAE86", background: "#DBAE86"}}/>
        },
        {
            value: "gray",
            label: "Gray",
            icon: <AiFillCreditCard style={{color: "gray", background: "gray"}}/>
        },
        {
            value: "brown",
            label: "Brown",
            icon: <AiFillCreditCard style={{color: "#8B572A", background: "#8B572A"}}/>
        },
        {
            value: "black",
            label: "Black",
            icon: <AiFillCreditCard style={{color: "black", background: "black"}}/>
        },
        {
            value: "white",
            label: "White",
            icon: <AiFillCreditCard style={{color: "white", background: "white"}}/>
        },
        {
            value: "yellow",
            label: "Yellow",
            icon: <AiFillCreditCard style={{color: "yellow", background: "yellow"}}/>
        },
        {
            value: "other",
            label: "Other"
        }
    ];

    const secondaryColor = [
        {
            value: "green",
            label: "Green",
            icon: <AiFillCreditCard style={{color: "green", background: "green"}}/>
        },
        {
            value: "tan",
            label: "Tan",
            icon: <AiFillCreditCard style={{color: "#DBAE86", background: "#DBAE86"}}/>
        },
        {
            value: "gray",
            label: "Gray",
            icon: <AiFillCreditCard style={{color: "gray", background: "gray"}}/>
        },
        {
            value: "brown",
            label: "Brown",
            icon: <AiFillCreditCard style={{color: "#8B572A", background: "#8B572A"}}/>
        },
        {
            value: "black",
            label: "Black",
            icon: <AiFillCreditCard style={{color: "black", background: "black"}}/>
        },
        {
            value: "white",
            label: "White",
            icon: <AiFillCreditCard style={{color: "white", background: "white"}}/>
        },
        {
            value: "yellow",
            label: "Yellow",
            icon: <AiFillCreditCard style={{color: "yellow", background: "yellow"}}/>
        },
        {
            value: "other",
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
        uploadFile(file, config)
            .then(data => {
                alert("thanks for your report!")
                setResponseAwsKey(data.key)
                setResponseAwsLocation(data.location)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="dropdowns-container upload flex justify-between mt-4">
            <div className="mb-5">
                <input type="file"
                       onChange={handleFileInput} crossOrigin="anonymous" required/>
                <button onClick={() => handleUpload(selectedFile)}> upload photo</button>

            </div>
            {responseAwsLocation ?

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

            {selectedOptionCategory ? <Select
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

            {responseAwsLocation ?
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


            {responseAwsLocation ?
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


            {responseAwsLocation ?
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