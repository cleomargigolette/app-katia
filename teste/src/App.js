import React, { Component } from 'react';
import { Site } from './site/page/site/Site.js';
import { Login } from './site/page/login/Login.js';
import { ConsultaMae } from './site/page/consultaMae/ConsultaMae.js';
import { ListarMaes } from './system/pages/listar/ListarMaes.js';
import { CadastroMae } from './system/pages/cadastro/CadastroMae.js';
import { CadastroConsultor } from './system/pages/cadastro/CadastroConsultor.js';
import { Perfil } from './system/pages/perfil/Perfil.js';
import { LoginSystem } from './system/pages/login/LoginSystem.js';
import { DeletarConsultor } from './system/pages/deletarConsultor/DeletarConsultor.js';
import './App.css';
import { Route } from 'react-router-dom';
import Service from './service/ConsultorService.js';


class App extends Component {

  up=()=>{
    this.service = new Service();
    this.service.buscarConsultoresAtivos().then(()=>{

    })
  }

  render() {
    this.up();
    return (
      <div className="App">
        <Route component={Site} path='/' exact />
        <Route component={Login} path='/login'/>
        <Route component={ConsultaMae} path='/consultaprocesso' />
        <Route component={ListarMaes} path='/listar' />
        <Route component={CadastroMae} path='/cadastrar' />
        <Route component={CadastroConsultor} path='/cadastrarConsultor' />
        <Route component={Perfil} path='/perfil' />
        <Route component={LoginSystem} path='/loginSystem' />
        <Route component={DeletarConsultor} path='/deletarConsultor'/>
      </div>
    );
  }
}

export default App;
