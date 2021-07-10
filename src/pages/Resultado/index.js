import React, { Component } from 'react';
import firebase from './../../Firebase';

class Resultado extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista: []
        };

        firebase.database().ref('projects').child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
            let state = this.state;
            state.lista = [];
            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    position: childItem.val().position,
                })
            });
            this.setState(state);
        });
    }

    render() {
        return (
            <div>
                {this.state.lista.map((item) => {
                    return (
                        <div key={item.key}>
                            <h1>Projeto: {item.key}</h1>
                            <h3>position: {item.position} </h3>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Resultado;