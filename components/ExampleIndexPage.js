import React from 'react'
import { Layout }  from './Layout'
import Config from '../config'

export function ExampleIndexPage () {
  console.warn('CONFIG!', Config)
  return (
    <Layout>
      Contents of Example Index Page
    </Layout>
  )
}
