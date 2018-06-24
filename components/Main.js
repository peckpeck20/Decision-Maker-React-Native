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
    Subtitle
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
            optionOne: 'Apple',
            optionTwo: 'Bananas',
            isRemainder: ''
        }
    }

    randomize() {
        const randomNumber = Math.floor((Math.random() * 10) + 1);
        //check if number has a Remainder after division
        const isRemainder = randomNumber % 2;
        this.setState({isRemainder});

        //input field validation
        if (this.state.optionOne && this.state.optionTwo) {

            if (isRemainder === 1) {
                alert(`Go for ${this.state.optionOne}`)
            } else {
                alert(`Go for ${this.state.optionTwo}`)
            }
            // this.clearAllFields();
        } else {
            alert('Field empty, Try again')
        }

    }

    clearAllFields() {
        this.setState({optionOne: '', optionTwo: '', randomNumber: 0})
    }

    render() {
        return (
            <Container style={{
                paddingTop: 24
            }}>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Randomizer</Title>
                        <Subtitle>Version 1.0</Subtitle>
                    </Body>
                    <Right/>
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
                                        placeholder='Option 1'
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
                                <H1>Versus</H1>
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
                                        placeholder='Option 2'
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
                                    <Text>clear</Text>
                                </Button>
                            </Col>
                            <Col></Col>
                            <Col>
                                <Button success iconLeft onPress={this.randomize}>
                                    <Icon name='check' type="MaterialCommunityIcons"/>
                                    <Text>Go!!</Text>
                                </Button>
                            </Col>

                        </Row>
                    </Grid>
                </Content>
                <Footer>

                    <Subtitle
                        style={{
                        paddingTop: 10
                    }}>Made by Jose Zapata 2018</Subtitle>
                </Footer>
            </Container>
        )
    }
};
