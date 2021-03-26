import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "./HomePage.css";
import EasySteps from "../Images/EasySteps.jpg";

const HomePage = () => {
    const history = useHistory();

    function openSubmitPage() {
        history.push("/submit")
    }

    return (
        <div className="HomePage">
            <div className="HomePage-house">
                <Navbar />
                <div className="HomePage-getOffer col-sm-5">
                    <button className="HomePage-getOffer-btn btn btn-block" onClick={openSubmitPage}>GET AN OFFER!</button>
                </div>
            </div>
            <div className="HomePage-infobar">
                <span className="HomePage-infobar-text">
                    We buy homes in all conditions quickly without
                    <br />
                    all of the hassels of putting it on the market
                </span>
            </div>
            <div className="HomePage-steps">
                <img className="center" alt="Three easy steps: 1. Free Consultation 2. Firm Cash Offer 3. Fast Closing" src={EasySteps} />
            </div>
            <div className="HomePage-FAQ">
                <h1 className="HomePage-FAQ-title p-5">FAQ</h1>
                <div className="HomePage-FAQ-facts p-5 m-5">
                    <span className="HomePage-fact mx-3">
                        What class of home are you willing to buy?
                    </span>
                    <span className="HomePage-fact-answer">
                        We buy all property types: single family, multi-family, condos, commercial, and more.
                    </span>

                    <span className="HomePage-fact mx-3">
                        Do I need to do any improvements before I sell?
                    </span>
                    <span className="HomePage-fact-answer">
                        No need for all of that hassel.  We’ll take it off of your hands and do any necessary work.
                    </span>

                    <span className="HomePage-fact mx-3">
                        How fast can you purchase my home?
                    </span>
                    <span className="HomePage-fact-answer">
                        We can purchase your home in as little as 3 days and also offer creative financing strategies.
                    </span>

                    <span className="HomePage-fact mx-3">
                        What fees am I obligated to pay?
                    </span>
                    <span className="HomePage-fact-answer">
                        No fees for you!  Our partners and team will pay all of the fees required in the sale.
                    </span>

                    <span className="HomePage-fact mx-3">
                        How does the process of selling to you work?
                    </span>
                    <span className="HomePage-fact-answer">
                        We do an initial consultation that will require either a home visit or exchange of a video
                        walk-around.  Shortly after, we will provide you with a firm cash offer.  If accepted, we
                        can schedule a quick closing and transfer of ownership.
                    </span>

                    <span className="HomePage-fact mx-3">
                        Do I need a real estate agent?
                    </span>
                    <span className="HomePage-fact-answer">
                        There is no need for a real estate agent and the aquisition of RE fees.  Our title company will assist with the legal aspect of the purchase.
                    </span>

                    <span className="HomePage-fact mx-3">
                        My home is in forclosure, does that mean you can’t purchase it?
                    </span>
                    <span className="HomePage-fact-answer">
                        We purchase homes in various financial situations.  This includes forclosures.
                    </span>

                    <span className="HomePage-fact mx-3">
                        Why should I choose to sell to you?
                    </span>
                    <span className="HomePage-fact-answer">
                        Our team will work effortlessly to see if we can find a solution for you.  We have more
                        creative ways than the average investor can provide in finding a win-win situation.
                    </span>

                    <span className="HomePage-fact mx-3">
                        What areas do you service?
                    </span>
                    <span className="HomePage-fact-answer">
                        We service all areas of the United States!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HomePage;