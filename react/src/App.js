import React from 'react';
import $ from 'jquery'
import './App.scss';
import { Container, Row, Col, Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'reactstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: String,
      name: String,
      color: String,
      modal: true
    }
  }

  componentWillMount() {
    this.listner()
  }

  listner = () => {
    window.socket.on('send-id-color', (obj) => {
      this.setState({
        id: obj.id,
        color: obj.color
      })
    })
    window.socket.on('chat message', (obj) => {
      let person = obj.name
      let message = obj.msg
      let color = obj.color
      if (obj.id === this.state.id) {  // if the message is mine
        $('#messages').append($('<li>').text(message).addClass('my-message'))
      }
      else {
        $('#messages').append($('<li>').append($('<p>').attr('id','friend').text(person).css({'color' : color})).append(message).addClass('incoming-message'))
      }
      $('#messages').append($('<br>').css({'clear':'both'}))
    });
  }


  toggle = () => {
    alert("Insert your name")
  }

  gotName = () => {
    if ($('#input-name').val() === '')
      alert("Insert your name")
    else {
      let nm = $('#input-name').val()
      this.setState({
        name: nm,
        modal: false
      })
    }
  }

  send = (e) => {
    e.preventDefault(); // prevents page reloading)
    let obj_message = {
      id: this.state.id,
      name: this.state.name,
      msg: $('#input-message').val(),
      color: this.state.color
    }
    window.socket.emit('chat message', obj_message)
    $('#input-message').val('')
    return false;
  }

  render() {

    return (
      <Container id="box" fluid='true' className="App">
        <Row id="header"><Col id="p-header">Chat Home Group</Col></Row>
        <Row id="contents">
          <Col sm='12'>
            <ul id="messages"></ul>
          </Col>
        </Row>
        <Row id="form-new-messages">
          <input id="input-message" autoComplete="off" />
          <button id="button-send" onClick={(e) => { this.send(e) }}></button>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>Welcome to your home chat-group!</ModalHeader>
          <ModalBody>
            Insert your name.
         <Input id="input-name" placeholder="Your name..."></Input>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.gotName}>Join</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }

}
export default App