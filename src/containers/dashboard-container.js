import React from 'react';
import {connect} from 'react-redux';
import {
  updateReports,
} from '../actions/dashboard';
import Dashboard from '../pages/dashboard';

const mapStateToProps = (state) => {
  return {
    reports: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateReports: (reports) => {
      dispatch(updateReports(reports));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
