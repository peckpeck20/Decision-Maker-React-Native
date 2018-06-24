import React from 'react';
// import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Content, Footer, Text,Input, Icon,Item,Button } from 'native-base'; 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.clearAllFields = this.clearAllFields.bind(this);
    this.state = {
      optionOne : '',
      optionTwo : ''
    }
  }

  randomize(){
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(randomNumber);
    
  }

  clearAllFields(){
    this.setState({
      optionOne : '',
      optionTwo : ''
    })
  }

  async componentWillMount() { await Expo.Font.loadAsync({ 'Roboto': require('native-base/Fonts/Roboto.ttf'), 'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'), }); }

  render() {
    return (
    <Container > 
      <Header /> 
        <Content padder> 
          <Item>
              <Icon active name='home' />
              <Input placeholder='Option 1'
              onChangeText={optionOne => this.setState({ optionOne })} value={this.state.optionOne}/>
          </Item>
          <Item>
              <Icon active name='home' />
              <Input placeholder='Option 2'
              onChangeText={optionTwo => this.setState({ optionTwo })} value={this.state.optionTwo}/>
          </Item>
          <Item>
            <Button iconLeft onPress={this.randomize}>
              <Icon name='home' />
              <Text>GO!</Text>
            </Button>
            <Button iconLeft dark onPress={this.clearAllFields}>
              <Icon name='cog' />
              <Text>clear</Text>
          </Button>
          </Item>
          <Text>{this.state.optionOne}</Text>
        </Content> 
       <Footer /> 
      </Container>
      )
  }
}


