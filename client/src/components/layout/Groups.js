import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { setAlert } from '../../actions/alert';
import {setGroups,setLoading} from '../../actions/group';
import "./style.css"
import { Link ,useNavigate} from 'react-router-dom';
const Groups = ({
    groups,
    loading,
    setGroups,
    setLoading,

}) =>{
    const navigate = useNavigate();
    return (
      <div>
      <Row>
      {groups.map((group) => (
       
          <Col key={group.id} sm={12} md={6} lg={4} xl={3}>
            <Card
              className='my-3 p-3 rounded'
              style={{ cursor: 'pointer' }}
              key={group.key}
              onClick = {
                ()=>{
                  navigate(`/dashboard/groups/:${group._id}`)
                }
              }
            >
              <Card.Body>
                <Card.Title>
                  <strong>{group.title}</strong>
                </Card.Title>
                <div>Descp: {group.descp}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    );
}
const mapStateToProps = (state) =>({
    groups: state.groups.groups,
    loading: state.groups.loading,
});
Groups.propTypes = {
    groups: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    setLoading: PropTypes.func.isRequired,
    setGroups: PropTypes.func.isRequired
}
export default connect(mapStateToProps,{
    setLoading,
    setGroups,
})(Groups);