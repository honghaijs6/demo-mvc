import React from 'react';
import { iMVCController, iMVCModel } from './interface';

class MVCView extends React.Component {

    constructor(mvcControler:iMVCController, mvcModel:iMVCModel) {
        super(mvcControler);

        this.state = mvcControler.stateBuilder(mvcModel._name);
        mvcControler.connectView(this);
    }
}

export default MVCView; 
