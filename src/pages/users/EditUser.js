import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react'


class EditUser extends Component {
    
    render() {
 
        return (
            <Card>
              <Image src='/images/avatar/large/daniel.jpg' />
              <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  10 Friends
                </a>
              </Card.Content>
            </Card>

    )
}
}

export default connect()(EditUser);

