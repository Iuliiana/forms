import propTypes from "prop-types";
import moment from "moment";

const Form = (props) => {

    const {
        form,
        onChange: handleChange,
        onSubmit: handleSubmit
    } = props;

    return (
        <form className="steps-form form-inline"
              onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(form)
              }}
        >

            <label className="steps-form__input-label">
                Дата дд.мм.гг
                <input
                    type="date"
                    name="date"
                    className="steps-form__date steps-form__input"
                    required
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                    max={moment((new Date()).dateToFormat).format('yyyy-MM-DD')}
                    value={form.date}
                    onChange={handleChange}
                />
            </label>
            <label className="steps-form__input-label">
                Пройдено км
                <input
                    type="number"
                    name="distance"
                    className="steps-form__distance steps-form__input"
                    required
                    value={form.distance}
                    onChange={handleChange}
                />
            </label>
            <button className="steps-form__button">ок</button>
        </form>
    );
}

Form.propTypes = {
    form: propTypes.shape({
        date: propTypes.string.isRequired,
        distance: propTypes.string.isRequired
    }),
    onChange: propTypes.func.isRequired,
    onSubmit: propTypes.func.isRequired,
};

export {Form};