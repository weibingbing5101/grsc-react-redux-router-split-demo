import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// 组件
import Counter from './Counter.jsx';

// actions
import * as ReduxDemoActions from 'actions/counter.js';

import _ from 'lodash';

const MixActions = _.extend({}, ReduxDemoActions);

export default connect(
	(state) => { return {counter: state.counter} },   

	(dispatch) => {
		return MixActions;
	}   
)(Counter);