import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateBirthday = () => {

let history = useHistory();

const [username, setUsername] = useState('');
const [cohort, setCohort] = useState('');
const [month, setMonth] = useState('');
const [date, setDate] = useState('');

const changeUsername = e => {
    setUsername(e.target.value)
}

const changeCohort = e => {
    setCohort(e.target.value)
}

const changeMonth = e => {
    setMonth(e.target.value)
}

const changeDate = e => {
    setDate(e.target.value)
}

const onSubmit = (e) => {
    e.preventDefault();
    const birthday = {
      username: username,
      cohort: cohort,
      month: month,
      date: date,
    };

    axios
      .post("http://localhost:5000/birthdays", birthday)
      .then((res) => console.log(res.data));

      history.push('/')
  };

  return (
    <div>
      <p>You are on the Create Birthday component!</p>
        <div>
        <div>
            <h3>Create New Birthday Log</h3>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Username: </label>
                <input
                type="text"
                required
                className="form-control"
                defaultValue={username}
                onChange={changeUsername}
                />
            </div>
            <div className="form-group">
                <label>Cohort Number: </label>
                <input
                type="text"
                required
                className="form-control"
                defaultValue={cohort}
                onChange={changeCohort}
                />
            </div>
            <div className="form-group">
                <label>Month: </label>
                <input
                type="text"
                className="form-control"
                defaultValue={month}
                onChange={changeMonth}
                />
            </div>
            <div className="form-group">
                <label>Date: </label>
                <input
                type="text"
                className="form-control"
                defaultValue={date}
                onChange={changeDate}
                />
            </div>

            <div className="form-group">
                <input
                type="submit"
                value="Create Birthday"
                className="btn btn-primary"
                />
            </div>
            </form>
        </div>
        </div>
    </div>
  );
};

export default CreateBirthday;