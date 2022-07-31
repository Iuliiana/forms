import './Steps.css';
import {Form} from "./tools/Form";
import {Table} from "./tools/Table";
import {useState} from "react";
import workoutsData from "../../data/workouts";
import moment from "moment";


const Steps = () => {

    const dateNow = moment((new Date()).dateToFormat).format('yyyy-MM-DD');
    const [workouts, setWorkouts] = useState(workoutsData);
    const [form, setForm] = useState({date: dateNow, distance: ''});
    const [editMode, setEditMode] = useState({state: false, index: ''});


    const changeMode = (index) => {
        if (editMode.state) {
            setEditMode({state: false, index: ''});
        } else {
            setEditMode({state: true, index: index});
        }
    }

    const handleSubmit = (form) => {
        const {date, distance} = form;
        let updatedWorkouts;

        if (editMode.state) {
            const {index} = editMode;
            updatedWorkouts = [
                ...workouts.slice(0, index),
                {
                    id: workouts[index].id,
                    date: date,
                    distance: distance,
                },
                ...workouts.slice(index + 1),
            ];
            changeMode();
        } else {
            const index = workouts.findIndex(
                (workout) => workout.date <= form.date
            );

            if (index === -1) {
                updatedWorkouts = [
                    ...workouts.slice(0, workouts.length),
                    {
                        id: workouts.length + 1,
                        date: form.date,
                        distance: form.distance,
                    },
                ];
            } else if (workouts[index].date === form.date) {
                updatedWorkouts = [
                    ...workouts.slice(0, index),
                    {
                        id: workouts[index].id,
                        date: workouts[index].date,
                        distance: String(+workouts[index].distance + +form.distance),
                    },
                    ...workouts.slice(index + 1),
                ];
            } else {
                updatedWorkouts = [
                    ...workouts.slice(0, index),
                    {
                        id: workouts.length + 1,
                        date: form.date,
                        distance: form.distance,
                    },
                    ...workouts.slice(index),
                ];
            }
        }

        setWorkouts(updatedWorkouts);
        setForm({date: dateNow, distance: ''});
    }

    const handleFormChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }


    const getIdWorkout = (target) => {
        return Number(target.closest('tr').id);
    }

    const getWorkoutIndexById = (id) => {
        return workouts.findIndex(item => item.id === id);
    }

    const handleDeleteClick = ({target}) => {
        const id = getIdWorkout(target);
        const index = getWorkoutIndexById(id);

        const updatedWorkouts = [
            ...workouts.slice(0, index),
            ...workouts.slice(index + 1),
        ];

        setWorkouts(updatedWorkouts);
    }

    const handleEditClick = ({target}) => {
        const id = getIdWorkout(target);
        const index = getWorkoutIndexById(id);
        setForm({date: workouts[index].date, distance: workouts[index].distance});
        changeMode(index);
    }
    return (
        <div className="wrapper _steps-page">
            <section className="steps">
                <Form
                    onChange={handleFormChange}
                    onSubmit={handleSubmit}
                    form={form}
                />
                <Table
                    workouts={workouts}
                    onDeleteClick={handleDeleteClick}
                    onEditClick={handleEditClick}
                />
            </section>
        </div>
    );
}

export {Steps};