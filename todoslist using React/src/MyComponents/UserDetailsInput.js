import React from "react";

import PropTypes from 'prop-types'

export default function UserDetailsInput(){
    return(
        <>
        <div class="container">
        <label for="name_input" class="form-label">Enter Name</label>
        <input id="name_input" type="text" class="form-input">

        <label for="mobile_input" class="form-label">Enter Mobile No</label>
        <input id="mobile_input" type="number" class="form-input">

        <label for="username_input" class="form-label">Enter Username</label>
        <input id="username_input" type="text" class="form-input">

        <label for="password_input" class="form-label">Enter Password</label>
        <input id="password_input" type="password" class="form-input">

        <label for="password_input" class="form-label">Station Working</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>Station 1</option>
           
            <option value="2">Station 2</option>
            <option value="3">Station 3</option>
            <option value="4">Station 4</option>
            <option value="5">Station 5</option>
            <option value="6">Station 6</option>
            <option value="7">Station 7</option>
            <option value="8">Station 8</option>

        </select>



        <button type="button" class="btn btn-primary">Add User</button>
    </div>
        </>
    
    );
}

// UserDetailsInput.defaultProps = {
//   name: 'Your Title',
//   searchBar : true 
// }
Header.propTypes = {
  title: PropTypes.string,
//   searchBar: PropTypes.bool.isRequired,
  name:PropTypes.string,
  username:PropTypes.string
}