import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  Text,
  Input,
  Icon,
  Item,
  H1,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Switch,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import customStyles from '../css/styles';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

export class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionOne: '',
      optionTwo: '',
      isRemainder: '',
      allOptions: [],
      language: {
        english: {
          title: 'Randomizer',
          madeBy: 'Made by ',
          vs: 'Versus',
          clearBt: 'Clear',
          alertTxt: 'Go for',
          emptyAlert: 'Field empty, Try again',
          optionTxt: 'Option',
        },
        spanish: {
          title: 'Aleatorizador',
          madeBy: 'Echo por ',
          vs: 'Contra',
          clearBt: 'limpiar',
          alertTxt: 'Anda por',
          emptyAlert: 'Las opciones estan vacias, intenta de nuevo',
          optionTxt: 'Opción',
        },
      },
      defaultLanguage: false,
      toggleSubmit: true,
    };
  }

  randomize = () => {
    const {
      defaultLanguage,
      language,
      optionOne,
      optionTwo,
      allOptions,
    } = this.state;
    const optionsLength = allOptions.length;
    const randomNumber = Math.floor(Math.random() * 10 + 1);

    //check if number has a Remainder after division
    const isRemainder = randomNumber % 2;
    this.setState({ isRemainder });

    //input field validation
    if (optionOne && optionTwo) {
      if (isRemainder === 1) {
        alert(
          `${
          defaultLanguage
            ? language.spanish.alertTxt
            : language.english.alertTxt
          } ${optionOne}`
        );
      } else {
        alert(
          `${
          defaultLanguage
            ? language.spanish.alertTxt
            : language.english.alertTxt
          } ${optionTwo}`
        );
      }
      // this.clearAllFields();
    } else {
      alert(
        `${
        defaultLanguage
          ? language.spanish.emptyAlert
          : language.english.emptyAlert
        }`
      );
    }
  };

  clearAllFields = () => {
    this.setState({ optionOne: '', optionTwo: '', randomNumber: 0 });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      defaultLanguage: !prevState.defaultLanguage,
    }));
  };

  render() {
    const {
      language,
      defaultLanguage,
      optionOne,
      optionTwo,
      allOptions,
    } = this.state;
    return (
      <Container>
        <Header style={[customStyles.main]}>
          <Left />
          <Body>
            <Title style={customStyles.text}>
              {defaultLanguage
                ? language.spanish.title
                : language.english.title}
            </Title>
            <Subtitle style={customStyles.text}>
              Version 2.1
            </Subtitle>
          </Body>
          <Right>
            <Switch
              value={defaultLanguage}
              onValueChange={this.handleToggle}
            />
            <Icon
              name='flag-checkered'
              type='FontAwesome'
              style={[
                customStyles.text,
                { marginHorizontal: 15 },
              ]}
            />
          </Right>
        </Header>
        <Content padder>
          <Grid>
            <Row
              size={2}
              style={{
                padding: 20,
              }}
            >
              <Col>
                <Item>
                  <Icon
                    active
                    name='thumbs-up'
                    style={{
                      color: 'green',
                    }}
                  />
                  <Input
                    placeholder={`${
                      defaultLanguage
                        ? language.spanish.optionTxt
                        : language.english.optionTxt
                      } 1`}
                    onChangeText={optionOne =>
                      this.setState({ optionOne })
                    }
                    value={optionOne}
                    autoFocus={true}
                    returnKeyType={'next'}
                  />
                </Item>
              </Col>
            </Row>
            <Row size={1}>
              <Col size={1} />
              <Col size={1}>
                <H1 style={customStyles.italic}>
                  {defaultLanguage
                    ? language.spanish.vs
                    : language.english.vs}
                </H1>
              </Col>
              <Col size={1} />
            </Row>
            <Row
              size={1}
              style={{
                padding: 20,
              }}
            >
              <Col>
                <Item>
                  <Icon
                    active
                    name='thumbs-down'
                    style={{
                      color: 'red',
                    }}
                  />
                  <Input
                    placeholder={`${
                      defaultLanguage
                        ? language.spanish.optionTxt
                        : language.english.optionTxt
                      } 2`}
                    onChangeText={optionTwo =>
                      this.setState({ optionTwo })
                    }
                    value={optionTwo}
                    onSubmitEditing={this.randomize}
                  />
                </Item>
              </Col>
            </Row>
            <Row
              size={2}
              style={{
                padding: 20,
              }}
            >
              <Col>
                <AwesomeButtonRick
                  type='secondary'
                  onPress={this.clearAllFields}
                  stretch={true}
                >
                  <Icon
                    name='format-clear'
                    type='MaterialCommunityIcons'
                  />
                  <Text>
                    {defaultLanguage
                      ? language.spanish.clearBt
                      : language.english.clearBt}
                  </Text>
                </AwesomeButtonRick>
              </Col>
              <Col />
              <Col>
                <AwesomeButtonRick
                  type='anchor'
                  onPress={next =>
                    setTimeout(() => {
                      next();
                      this.randomize();
                    }, 300)
                  }
                  stretch={true}
                  progress={true}
                  progressLoadingTime={300}
                >
                  <Icon
                    name='check'
                    type='MaterialCommunityIcons'
                    style={{ color: 'white' }}
                  />
                </AwesomeButtonRick>
              </Col>
            </Row>
          </Grid>
        </Content>
        <Footer
          style={[
            customStyles.dark,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
        >
          <Subtitle
            style={[
              customStyles.text,
              {
                paddingTop: 10,
              },
            ]}
          >
            {defaultLanguage
              ? language.spanish.madeBy
              : language.english.madeBy}
            Jose Zapata 2018
                    </Subtitle>
        </Footer>
      </Container>
    );
  }
}
