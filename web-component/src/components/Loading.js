import React, { Component } from 'react';

import './Loading.css';

class Loading extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: null
        }

    }

    render() {
        return (
            <div className="loading-component">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}


export default Loading;