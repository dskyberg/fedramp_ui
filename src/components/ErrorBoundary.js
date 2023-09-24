import { Component } from 'react'
import UncaughtError from './UncaughtError';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch({ error, errorInfo }) {
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.error) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            else {
                return (<UncaughtError error={this.state.error} errorInfo={this.state.errorInfo} />)
            }
        }
        return this.props.children;
    }
}