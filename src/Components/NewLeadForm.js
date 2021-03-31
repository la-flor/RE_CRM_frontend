import React, { useState } from "react";
import "./NewLeadForm.css";
import Alert from "../Helpers/Alert";

const NewLeadForm = ({ submitOfferToAPI }) => {

    const INITIAL_DATA = {
        first: "",
        last: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
    }

    const [formData, setFormData] = useState(INITIAL_DATA)
    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await submitOfferToAPI(formData);
        } catch (errors) {
            setFormErrors(errors);
            return;
        }

        setFormErrors([]);
        setSaveConfirmed(true);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
        setFormErrors([]);
    }

    return (
        <div className="NewLeadForm container p-xl-5">

            {formErrors.length
                ? <Alert type="danger" messages={formErrors} testId="errorsAlert" />
                : null}

            {saveConfirmed
                ?
                <Alert type="success" messages={["Updated successfully."]} testId="successAlert" />
                : null}
            <form className="form-group">
                <div className="NewLeadForm-row row">
                    <div className="col-lg px-lg-5 pb-5 pb-lg-0">
                        <h3 className="pb-lg-4 pb-3">Contact Information</h3>
                        <label htmlFor="first">First: </label>
                        <input
                            name="first"
                            type="text"
                            value={formData.first}
                            onChange={handleChange}
                            className="form-control"
                            data-testid="first"
                        />
                        <br />

                        <label htmlFor="last">Last: </label>
                        <input
                            name="last"
                            type="text"
                            value={formData.last}
                            onChange={handleChange}
                            className="form-control"
                            data-testid="last"
                        />
                        <br />

                        <label htmlFor="email">Email: </label>
                        <input
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            data-testid="email"
                        />
                        <br />

                        <label htmlFor="phone">Phone: </label>
                        <input
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                            data-testid="phone"
                        />
                        <br />
                    </div>


                    <div className="col-lg px-lg-5 pb-3 pb-lg-0">
                        <h3 className="pb-lg-4 pb-3">Property Address</h3>
                        <label htmlFor="address">Address: </label>
                        <input
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control"
                            data-testid="address"
                        />
                        <br />

                        <label htmlFor="city">City: </label>
                        <input
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            className="form-control"
                            data-testid="city"
                        />
                        <br />

                        <label htmlFor="state">State: </label>
                        <input
                            name="state"
                            type="text"
                            value={formData.state}
                            onChange={handleChange}
                            className="form-control"
                            data-testid="state"
                        />
                        <br />

                        <label htmlFor="zipcode">Zip Code: </label>
                        <input
                            name="zipcode"
                            type="text"
                            value={formData.zipcode}
                            onChange={handleChange}
                            className="form-control"
                            data-testid="zipcode"
                        />
                    </div>
                </div>

                <div className="NewLeadForm-row row">
                    <div className="NewLeadForm-submit-container col-md px-lg-5 pt-3">
                        <button type="submit" data-testid="NewLeadForm-submit-btn" onClick={handleSubmit} className="NewLeadForm-submit-btn btn">Submit</button>
                        <p className="pt-3">
                            By submitting this form you are agreeing to allow our team to review your property information and contact you.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewLeadForm;