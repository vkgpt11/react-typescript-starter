import * as React from 'react';

interface IProps{
    name: string;
}
export class App extends React.Component<IProps, any>{
    render(){
        return <h1>Hello {this.props.name}</h1>;
    }
}