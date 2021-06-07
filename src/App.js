import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { Button, Table } from 'semantic-ui-react'
import { makeDate, openModal} from './state'
import ModalExampleModal from './modal'

function App(props) {
  return (
    <div className="App">
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Имя</Table.Cell>
            {props.users.map((u) => {
              return (
                <Table.Cell>{u.name}</Table.Cell>
              )
            })}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Фамилия</Table.Cell>
            {props.users.map((u) => {
              return (
                <Table.Cell>{u.lastName}</Table.Cell>
              )
            })}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Дата Рождения</Table.Cell>
            {props.users.map((u) => {
              return (
                <Table.Cell>{makeDate(u.DateOfBirth)}</Table.Cell>
              )
            })}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Локация</Table.Cell>
            {props.users.map((u) => {
              return (
                <Table.Cell>{u.location.city} from</Table.Cell>
              )
            })}
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Button.Group basic size='small'>
                <Button icon='file' />
              </Button.Group>
            </Table.Cell>
            {props.users.map((u) => {
              return (
                <Table.Cell>
                  <Button.Group basic size='small'>
                  <button class="ui button" >Show Modal</button>
                  </Button.Group>
                </Table.Cell>
              )
            })}
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default App;
