import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Footer,
    Text,
    Input,
    Icon,
    Item,
    Button,
    H1,
    Left,
    Body,
    Right,
    Title,
    Subtitle,
    Switch
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.clearAllFields = this
            .clearAllFields
            .bind(this);
        this.randomize = this
            .randomize
            .bind(this);
        this.state = {
            optionOne: '',
            optionTwo: '',
            isRemainder: '',
            allOptions : [],
            language : {
                english : {title: 'Randomizer', madeBy: 'Made by ', vs: 'Versus', clearBt : 'Clear',alertTxt : 'Go for', emptyAlert : 'Field empty, Try again',optionTxt: 'Option'}, 
                spanish : {title: 'Aleatorizador', madeBy: 'Echo por ', vs: 'Contra', clearBt : 'limpiar',alertTxt : 'Anda por', emptyAlert : 'Las opciones estan vacias, intenta de nuevo',optionTxt: 'Opción'}},
            langToggle : false
        }
    }

    randomize() {
        const defaultLanguage = this.state.langToggle;
        const language = this.state.language;
        const randomNumber = Math.floor((Math.random() * 10) + 1);
        //check if number has a Remainder after division
        const isRemainder = randomNumber % 2;
        this.setState({isRemainder});

        //input field validation
        if (this.state.optionOne && this.state.optionTwo) {

            if (isRemainder === 1) {
                alert(`${defaultLanguage ? language.spanish.alertTxt : language.english.alertTxt} ${this.state.optionOne}`)
            } else {
                alert(`${defaultLanguage ? language.spanish.alertTxt : language.english.alertTxt} ${this.state.optionTwo}`)
            }
            // this.clearAllFields();
        } else {
            alert(`${defaultLanguage ? language.spanish.emptyAlert : language.english.emptyAlert}`)
        }

    }

    clearAllFields() {
        this.setState({optionOne: '', optionTwo: '', randomNumber: 0})
    }

    handleToggle = () => {
        this.setState(prevState =>({
            langToggle: !prevState.langToggle
        }))
    }

    render() {
        const defaultLanguage = this.state.langToggle;
        const language = this.state.language;
        return (
            <Container style={{
                paddingTop: 24
            }}>
                <Header>
                    <Left/>
                    <Body>
                        <Title>{defaultLanguage ? language.spanish.title : language.english.title}</Title>
                        <Subtitle>Version 1.1</Subtitle>
                    </Body>
                    <Right>
                        <Switch value={this.state.langToggle} onValueChange={this.handleToggle}/>
                        <Icon name='flag-checkered' type='FontAwesome' style={{color: 'white'}} />      
                    </Right>
                </Header>
                <Content padder>
                    <Grid>
                        <Row
                            size={2}
                            style={{
                            padding: 20
                        }}>
                            <Col>
                                <Item>
                                    <Icon
                                        active
                                        name='thumbs-up'
                                        style={{
                                        color: 'green'
                                    }}/>
                                    <Input
                                        placeholder={`${defaultLanguage ? language.spanish.optionTxt : language.english.optionTxt} 1`}
                                        onChangeText={optionOne => this.setState({optionOne})}
                                        value={this.state.optionOne}/>
                                </Item>
                            </Col>

                        </Row>
                        <Row
                            size={1}
                            style={{
                            padding: 20
                        }}>
                            <Col size={1}></Col>
                            <Col size={1}>
                                <H1>{defaultLanguage ? language.spanish.vs : language.english.vs}</H1>
                            </Col>
                            <Col size={1}></Col>

                        </Row>
                        <Row
                            size={1}
                            style={{
                            padding: 20
                        }}>
                            <Col>
                                <Item>
                                    <Icon
                                        active
                                        name='thumbs-down'
                                        style={{
                                        color: 'red'
                                    }}/>
                                    <Input
                                        placeholder={`${defaultLanguage ? language.spanish.optionTxt : language.english.optionTxt} 2`}
                                        onChangeText={optionTwo => this.setState({optionTwo})}
                                        value={this.state.optionTwo}/>
                                </Item>
                            </Col>
                        </Row>
                        <Row
                            size={2}
                            style={{
                            padding: 20
                        }}>
                            <Col>
                                <Button iconLeft info onPress={this.clearAllFields}>
                                    <Icon name='format-clear' type="MaterialCommunityIcons"/>
                                    <Text>{defaultLanguage ? language.spanish.clearBt : language.english.clearBt}</Text>
                                    
                                </Button>
                            </Col>
                            <Col></Col>
                            <Col>
                                <Button success iconLeft onPress={this.randomize}>
                                    <Icon name='check' type="MaterialCommunityIcons"/>
                                    <Text>OK!</Text>
                                </Button>
                            </Col>

                        </Row>
                    </Grid>
                </Content>
                <Footer>

                    <Subtitle
                        style={{
                        paddingTop: 10
                    }}>{defaultLanguage ? language.spanish.madeBy : language.english.madeBy}Jose Zapata 2018</Subtitle>
                </Footer>
            </Container>
        )
    }
};
