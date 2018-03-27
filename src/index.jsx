import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory  } from 'react-router'
import ImgLazy from './components/imgLazy'
import ImgPreview from './components/imgPreview'
import './css/common.scss';

render((
    <Router history={hashHistory}>
        <Route path="/" component={ImgLazy} />
        <Route path="/imgPreview" component={ImgPreview} />
    </Router>
), document.getElementById('main'));

