import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import ReactDOM from 'react-dom';
import Person from './person.js';

describe('My Test Suite', function(){
    it('Test in  increment button event', function(){
        const shallowREnder = new ShallowRenderer();
        shallowREnder.render(<Person/>);
        const result = shallowREnder.getRenderOutput();
        expect(result.props.children[3].onClick).toEqual(    
            this.increment      
        );
    });
    it('Test in  Decrement button event', function(){
        const shallowREnder = new ShallowRenderer();
        shallowREnder.render(<Person/>);
        const result = shallowREnder.getRenderOutput();
        expect(result.props.children[4].onClick).toEqual(    
            this.decrement      
        );
    });
    
});