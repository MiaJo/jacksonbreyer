"use strict";
import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="/css/style.css" />

        <Grid>
          <Row>
            <div className="app-container">
              <Col md={2} >
                <Sidebar />
              </Col>
              <Col md={7}>
                <div className="app-content">{this.props.children}</div>
              </Col>
              <Col md={2} />
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}