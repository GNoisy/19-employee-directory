import React from "react";
import "./style.css"

function Table (props) {
    return (
        <tbody>
            <tr>
            <th scope="row"><img src={props.image}/></th>
                <td> { props.name } </td>
                <td> { props.department } </td>
                <td> { props.phoneNumber } </td>
            </tr>
        </tbody>
    );
}

export default Table;