import propTypes from "prop-types";
import Moment from "react-moment";

const TableRow = (props) => {
    const {
        id,
        date,
        distance,
        onDeleteClick: handleDeleteClick,
        onEditClick: handleEditClick,
    } = props;

    return (
        <tr id={id}>
            <td><Moment format='DD.MM.yyyy'>{date}</Moment></td>
            <td>{distance}</td>
            <td>
                <button onClick={handleEditClick}>✎</button>
                <button onClick={handleDeleteClick}>✘</button>
            </td>
        </tr>
    );
}

TableRow.propTypes = {
    id: propTypes.number.isRequired,
    date: propTypes.string.isRequired,
    distance: propTypes.string.isRequired,
    onDeleteClick: propTypes.func.isRequired,
    onEditClick: propTypes.func.isRequired,
};
export {TableRow};