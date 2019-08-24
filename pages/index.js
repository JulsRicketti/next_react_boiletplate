import React from 'react'
import { Page } from '../components/Page'

export default class Main extends React.Component {
  render () {
    const { pathname } = this.props.url
    return (
      <Page pathname={pathname}>
        TODO
      </Page>
    )
  }
}