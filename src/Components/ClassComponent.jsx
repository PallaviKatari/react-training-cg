import React from 'react';

export default class ClassComponent extends React.Component {
render(){
    return (
        <div>
            <h1>This is a class component</h1>
            <ClassComponent1 />
        </div>
    );
}
}
class ClassComponent1 extends React.Component {
    render(){
        return (
            <div>
                <h1>This is a class component1</h1>
            </div>
        );
    }
    }
