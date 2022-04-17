import React, { Component } from 'react';

export default class Button extends Component {
   
    render() {
        const { onClick } = this.props;
        return (
          <>
        <button type='button' onClick={onClick}>
                Load more...
        </button>
        </>  

        )
        
    }



}