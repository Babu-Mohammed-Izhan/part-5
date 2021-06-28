import PropTypes from 'prop-types'
import React from 'react'

const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    return (
        <div>
            <h2>Log in to application</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    username
          <input
                        type="text"
                        value={username}
                        name="Username"
                        id='username'
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    password
          <input
                        type="password"
                        value={password}
                        name="Password"
                        id='password'
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit" id="login-button">Login</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginForm