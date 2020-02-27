import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/login";

const routes = [
    { path: '/', component: Login }
];

const getComponent = () => {
    const { pathname } = window.location;
    let route = routes.filter(rt => rt.path === pathname)[0];

    if (!route) window.location.href = '/';

    return route.component;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.Component = getComponent();
    }

    render() {
        const { Component } = this;
        return <Component />;
    }
}

ReactDOM.render(<App />, document.getElementById('content'));