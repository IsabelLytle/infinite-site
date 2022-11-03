import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
    let params = useParams();

    return (
        <div>
            Team Member: { params.person } <br />
            Phone Number: 555.499.5956

        </div>
    );
};

export default Contact;