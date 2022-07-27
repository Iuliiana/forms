import React, {useEffect, useState} from 'react';
import hexToRgba from 'hex-to-rgba';


const Hex2Rgb = () => {
    const [form, setDataForm] = useState({hex: '', rgb: ''});

    useEffect(() => {
        document.querySelector('.body-bg').style.backgroundColor = form.rgb;
    }, [form.rgb]);

    const isValidColor = (color) => {
        return (/^#[0-9A-Za-z]{6}$/.test(color));
    }


    const handleChange = (e) => {
        const inputColorValue = e.target.value;
        setDataForm({hex: inputColorValue});

        if (isValidColor(inputColorValue)) {
            setDataForm({rgb: hexToRgba(inputColorValue)});
        } else {
            if (inputColorValue.length === 7) {
                setDataForm({rgb: 'Ошибка!'});
            } else {
                setDataForm({rgb: ''});
            }
        }
    }

    return (
        <div className="body-bg">
            <form className='form-convert-color' onInput={handleChange}>
                <input className='form-convert-color__input form-convert-color__item' type="text" maxLength="7" defaultValue={form.hex}/>
                <p className="form-convert-color__result form-convert-color__item">{form.rgb}</p>
            </form>
        </div>
    );

}

export {Hex2Rgb};