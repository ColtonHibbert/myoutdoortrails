import React from 'react';

export const SignUp = ({displaySignUpModalAction, submitEmailAction, submitCryptedPasswordAction, submitNameAction, sendSignUpAction }) => {
    return (
        <div>
            <div className="w-100 min-vh-100 fixed z-4 bg-gray o-70">
            </div>
            <div className="w-80 w-60-ns w-50-m w-30-l absolute z-5 bg-white"
                style={{ top:'10%', left:'50%', transform:'translate(-50%)' }}
            >
                <div className="w-100 flex flex-row justify-end">
                    <div 
                    className="w2 h2 flex justify-center items-center ma1 ba br-100 pointer bg-light-gray"
                        onClick={displaySignUpModalAction}
                    >x</div>
                </div>
                <main class="ph4 pb4 pt2 black-80">
                    <div class="measure center">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend class="f4 fw6 ph0 mh0">Sign Up</legend>
                            <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="name">Name</label>
                            <input 
                                class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" 
                                onChange={submitNameAction}
                            />
                        </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input 
                                    class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" 
                                    onChange={submitEmailAction}
                                />
                            </div>
                            <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input 
                                class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" 
                                onChange={submitCryptedPasswordAction}
                                />
                            </div>
                        </fieldset>
                        <div class="">
                            <input 
                                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" 
                                onClick={sendSignUpAction}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default SignUp;