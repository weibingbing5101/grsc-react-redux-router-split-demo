import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// 组件
import Home from './Home.jsx';

// actions
import * as ReduxDemoActions from '../../store/actions/home.js';

import _ from 'lodash';

const MixActions = _.extend({}, ReduxDemoActions);

export default connect(
	(state) => { return {home: state.home} },   

	(dispatch) => { 
		return MixActions;
	}   
)(Home);