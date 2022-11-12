import React from "react";

export default function Login() {
    return (
        <form className="box p-6 m-6">
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="e.g. alex@example.com" />
                </div>
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="********" />
                </div>
            </div>

            <button className="button is-black">Sign in</button>
            <button className="button is-white is-text"> Create Account </button>
        </form>
    );
}
