import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from './../../Firebase';
import 'firebase/storage';

class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: true,
            projeto: '',
            retornoOtimista: '',
            retornoMaisProvavel: '',
            retornoPessimista: '',
            criterio1: '',
            criterio2: '',
            criterio3: '',
            criterio4: '',

            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.sair = this.sair.bind(this);
        this.openWindow = this.openWindow.bind(this);
        this.downloadPDF = this.downloadPDF.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
            }
        })
    }

    sair() {
        firebase.auth().signOut()
            .then(() => {
                this.setState({ user: null });
            });
    }

    openWindow(name) {
        const file = firebase.storage().ref(firebase.auth().currentUser.uid).child(name);
        file.getDownloadURL().then((url) => {
            window.open(url, "_blank");
        })
    }

    downloadPDF(){
        this.openWindow("file1.pdf");
        this.openWindow("file2.pdf");
        this.openWindow("file3.pdf");
    }

    addItem(e) {
        let state = this.state;


        if (this._projetoInput.value === '' || this._retornoOtimista.value === '' || this._retornoMaisProvavel.value === '' ||  this._retornoPessimista.value === '' ||
        this._criterio1.value === '' || this._criterio2.value === '' || this._criterio3.value === '' || this._criterio4.value === '') {
            alert('Complete os campos');
        }
        else {
            if (this._projetoInput.value !== '') {
                let newItem = {
                    text: this._projetoInput.value,
                    key: Date.now()
                };
    
    
                this.setState({ items: [...state.items, newItem] });
            }
      
                
            if(this._retornoOtimista.value !== ''){
                let newItem = {
                    text: this._retornoOtimista.value,
                    key: Date.now()
                };
    
                this.setState({ items: [...state.items, newItem] });
            }
    
            if(this._retornoMaisProvavel.value !== ''){
                let newItem = {
                    text: this._retornoMaisProvavel.value,
                    key: Date.now()
                };
    
                this.setState({ items: [...state.items, newItem] });
            }
    
            if(this._retornoPessimista.value !== ''){
                let newItem = {
                    text: this._retornoPessimista.value,
                    key: Date.now()
                };
    
                this.setState({ items: [...state.items, newItem] });
            }
    
    
            if (this._criterio1.value !== '') {
                let newItem = {
                    text: this._criterio1.value,
                    key: Date.now()
                };
    
    
                this.setState({ items: [...state.items, newItem] });
            }
    
    
            if (this._criterio2.value !== '') {
                let newItem = {
                    text: this._criterio2.value,
                    key: Date.now()
                };
    
    
                this.setState({ items: [...state.items, newItem] });
            }
    
            if (this._criterio3.value !== '') {
                let newItem = {
                    text: this._criterio3.value,
                    key: Date.now()
                };
    
    
                this.setState({ items: [...state.items, newItem] });
            }
    
            if (this._criterio4.value !== '') {
                let newItem = {
                    text: this._criterio4.value,
                    key: Date.now()
                };
    
    
                this.setState({ items: [...state.items, newItem] });
            }
    
    
            firebase.database().ref('projects').child(firebase.auth().currentUser.uid).child(this.state.projeto).set({
                position: '',
                R1: this.state.retornoOtimista,
                R2: this.state.retornoMaisProvavel,
                R3: this.state.retornoPessimista,
                C1: this.state.criterio1,
                C2: this.state.criterio2,
                C3: this.state.criterio3,
                C4: this.state.criterio4});
    
            e.preventDefault();
            this.setState({ projeto: '', retornoOtimista:'', retornoMaisProvavel: '', retornoPessimista: '',
             criterio1: '', criterio2: '',criterio3: '',criterio4: ''});
        }
        
    }

    render() {
        return (
            <div>
                {this.state.user
                    ?
                    <div>
                        <form>
                            <label>Novo projeto</label><br />
                            <input type="text" placeholder=" " name="projeto"
                                value={this.state.projeto} onChange={(ev) => this.setState({ projeto: ev.target.value })}
                                ref={(event) => this._projetoInput = event} />
                        </form>


                        <form>
                            <label>Retorno Otimista:</label><br />
                            <input type="number" placeholder=" " name="R1"
                                value={this.state.retornoOtimista} onChange={(ev) => this.setState({ retornoOtimista: ev.target.value })}
                                ref={(event) => this._retornoOtimista = event} />

                        </form>


                        <form>
                            <label>Retorno mais Provável:</label><br />
                            <input type="number" placeholder=" " name="R2"
                                value={this.state.retornoMaisProvavel} onChange={(ev) => this.setState({ retornoMaisProvavel: ev.target.value })}
                                ref={(event) => this._retornoMaisProvavel = event} />

                        </form>

                        <form>
                            <label>Retorno Pessimista:</label><br />
                            <input type="number" placeholder=" " name="R3"
                                value={this.state.retornoPessimista} onChange={(ev) => this.setState({ retornoPessimista: ev.target.value })}
                                ref={(event) => this._retornoPessimista = event} />

                        </form>


                        <form>
                            <label>Critério 1:</label><br />
                            <input type="number" placeholder="C1" name="C1"
                                value={this.state.criterio1} onChange={(ev) => this.setState({ criterio1: ev.target.value })}
                                ref={(event) => this._criterio1 = event} />

                        </form>

                        <form>
                            <label>Critério 2:</label><br />
                            <input type="number" placeholder="C2" name="C2"
                                value={this.state.criterio2} onChange={(ev) => this.setState({ criterio2: ev.target.value })}
                                ref={(event) => this._criterio2 = event} />

                        </form>

                        <form>
                            <label>Critério 3:</label><br />
                            <input type="number" placeholder="C3" name="C3"
                                value={this.state.criterio3} onChange={(ev) => this.setState({ criterio3: ev.target.value })}
                                ref={(event) => this._criterio3 = event} />

                        </form>

                        <form>
                            <label>Critério 4:</label><br />
                            <input type="number" placeholder="C4" name="C4"
                                value={this.state.criterio4} onChange={(ev) => this.setState({ criterio4: ev.target.value })}
                                ref={(event) => this._criterio4 = event} />

                        </form>

                        <button onClick={this.addItem}>Adicionar</button> <br/>
                        <button onClick={this.downloadPDF}>Resultado</button> <br />
                        <button onClick={this.sair}>Sair</button>
                    </div>
                    :
                    <div>
                        <Redirect to='/' />
                    </div>
                }
            </div>
        );

    }
}

export default Todolist;