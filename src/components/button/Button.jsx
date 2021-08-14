import React from 'react'
import { Button } from "react-bootstrap";
import { AiTwotoneEdit } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi'
import { GoVerified } from 'react-icons/go'
import "./btn.css"
/**
* @author
* @function Button
**/

export const EditButton = (props) => {
    return (
        <div>
            <Button variant="outline-primary" className="fbtn" onClick={props.onClick}>
                <AiTwotoneEdit size="25" style={{ paddingRight: "3px" }} /> Edit
            </Button>

        </div>
    )

}


export const DownloadButton = (props) => {
    return (
        <div>
            <Button variant="danger" className="fbtn" onClick={props.onClick}>
                <BiDownload size="25" style={{ paddingRight: "3px" }} />
            </Button>

        </div>
    )

}

export const VerificationButton = (props) => {
    return (
        <div>
            <Button variant="outline-success" className="fbtn" onClick={props.onClick}>
                <GoVerified size="25" style={{ paddingRight: "3px" }} /> Verify
            </Button> </div>
    )

}

export const CustumButton = (props) => {
    return (
        <div>
            <Button variant="props.variant" className="fbtn" onClick={props.onClick}>
            {props.icon}{props.name}
            </Button>

        </div>
    )

}