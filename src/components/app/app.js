import React, { Component } from 'react';
import GasList from "../gas-list";
import TokenList from "../token-list";
import EtherscanService from "../../services/etherscan-service"

export default class App extends Component {
  etherscanService = new EtherscanService();
  render() {
    return (
      <div className="app">
        <>
          <GasList
            getGas={this.etherscanService.getGas()}
          >
          </GasList>
          <TokenList
            getToken={this.etherscanService.getToken}
          >
          </TokenList>
        </>
      </div>
    )
  }
}
