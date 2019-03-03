import React, {Component} from 'react';
import {Card, CardHeader, CardBody, Form, Input, Label, Button} from 'reactstrap';

class Login extends Component {

    constructor(props){

        super(props);

    }

    render(){

        return(
<div className="debajo-barra">
<Card>

  <CardHeader className="card-header info-color white-text text-center">
    <strong>Iniciar sesión en Temple</strong>
  </CardHeader>

  <CardBody>

  <Form action="/">
  <div className="form-group">
    <Label for="email">Email address:</Label>
    <Input type="email" className="form-control" id="email"/>
  </div>
  <div className="form-group">
    <Label for="pwd">Password:</Label>
    <Input type="password" className="form-control" id="pwd"/>
  </div>
  <div className="form-group form-check">
    <Label className="form-check-label">
      <Input className="form-check-input" type="checkbox"/> Remember me
    </Label>
  </div>
  <Button type="submit" className="btn btn-primary">Submit</Button>
</Form>

  </CardBody>

</Card>
</div>
        );

    }

}

export default Login;