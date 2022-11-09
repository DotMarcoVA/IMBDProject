import React from "react";

export default function Login() {
    return (
        <form class="box p-6 m-6">
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alex@example.com" />
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="********" />
                </div>
            </div>

            <button class="button is-black">Sign in</button>
            <button class="button is-white is-text"> Create Account </button>
        </form>
    );
}
