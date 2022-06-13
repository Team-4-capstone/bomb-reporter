import {ControlledModal} from "./ControlledModal";
import {useState} from "react";
import './App.css';
import UploadImageToS3WithReactS3 from "../UploadImageToS3WithReactS3";
import React from "react";

export const Report = () => {

    const [shouldShowModal, setShouldShowModal] = useState(false);
    return (
        <section className="index">
            <h1 className="index--h1">Do you want to make a rapid report?</h1>

            <UploadImageToS3WithReactS3/>
                <ControlledModal
                    shouldShow={shouldShowModal}
                    onClose={() => setShouldShowModal(false)}
                />
            <div className="container">
                <button className="yes animate__animated animate__slideInLeft"
                        onClick={() => setShouldShowModal(!shouldShowModal)}>
                    <span className="btnText">Yes</span>
                </button>

                <button className="no animate__animated animate__slideInRight"
                        onClick={() => console.log("no")}>No
                </button>
            </div>

        </section>
    )
}