import React from "react";
import NewLeadForm from "./NewLeadForm";
import "./NewLeadPage.css";
import HomeSketch from "../Images/Home_sketch.png";
import submitOfferToAPI from "../API/api";

const NewLeadPage = () => {
    return (
        <div className="NewLeadPage">
            <div className="NewLeadPage-banner m-5 px-5">
                <span className="NewLeadPage-title">Ready to sell?</span>
                <span className="NewLeadPage-linkhome">
                    <a href="/">Home</a>
                </span>
            </div>
            <div className="NewLeadPage-form m-5 p-5 container-flex">
                <NewLeadForm submitOfferToAPI={submitOfferToAPI} />
                <img className="NewLeadPage-sketch" alt="" src={HomeSketch} />
            </div>
        </div>
    )
}

export default NewLeadPage;