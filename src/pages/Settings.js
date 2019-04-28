import React, { Component, Fragment } from 'react'
import { Divider, Tab } from 'semantic-ui-react'
import PageHeader from '../containers/PageHeader'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

class Settings extends Component {
  state = { color: 'blue' }

  handleColorChange = e => this.setState({ color: e.target.value })

  render() {
    const { color } = this.state

    return (
      <Fragment>
        <PageHeader title="Settings" />
        <Divider hidden />

        <Tab menu={{ color, inverted: true, attached: false, tabular: false }} panes={panes} />
      </Fragment>
    )
  }
}

export default Settings