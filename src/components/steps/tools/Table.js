import {TableRow} from "./TableRow";
import propTypes from "prop-types";

const Table = (props) => {

    const {
        workouts,
        onDeleteClick: handleDeleteClick,
        onEditClick: handleEditClick,
    } = props;

    return (
        <table className="steps-table table">

            <thead>
            <tr>
                <th scope="col">Дата дд.мм.гг</th>
                <th scope="col">Пройдено км</th>
                <th scope="col">Действия</th>
            </tr>
            </thead>

            <tbody>
            {workouts.map((workout) => {
                return (
                    <TableRow
                        key={workout.id}
                        id={workout.id}
                        date={workout.date}
                        distance={workout.distance}
                        onDeleteClick={handleDeleteClick}
                        onEditClick={handleEditClick}
                    />
                );
            })}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    workouts: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            date: propTypes.string.isRequired,
            distance: propTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onDeleteClick: propTypes.func.isRequired,
    onEditClick: propTypes.func.isRequired,
};

export {Table};