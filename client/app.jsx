import React from 'react';
import ReactDom from 'react-dom';

import HypothesisList from './components/HypothesisList.jsx';

const contentNode = document.getElementById('app');
ReactDom.render(<IssueList />, contentNode);
