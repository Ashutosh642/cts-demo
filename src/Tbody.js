import React from 'react'
function Tbody(props) {
    const { start, index } = props;
    return (
        <tr>
            <th>{start}</th>
            <th>*</th>
            <th>{index + 1}</th>
            <th>={parseInt(start) * (index + 1)}</th>
        </tr>
    )


}
export default Tbody