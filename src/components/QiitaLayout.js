import React from 'react'
import { Route, Switch } from 'react-router-dom'
import QiitaStocks from './QiitaStocks'
import QiitaDetail from './QiitaDetail'

export default () => {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/qiita" component={ QiitaStocks }/>
        <Route path="/qiita/:post_id" component={ QiitaDetail }/>
      </Switch>
    </main>
  )
}
