import React, {Component} from 'react'
import PropTypes from "prop-types";

export default class FooterExam extends Component {

    static propTypes = {
        exercices: PropTypes.array.isRequired,
    };

    state = {
        bareme: 0,
        estimatedTime: 0,
        nbQuestion: 0
    };

    componentDidMount() {
        let bareme = this.state.bareme;
        let estimatedTime = this.state.estimatedTime;
        let nbQuestion = this.state.nbQuestion;
        for (let i in this.props.exercices) {
            for (let j in this.props.exercices[i].questions) {
                bareme = bareme + this.props.exercices[i].questions[j].scale;
                this.setState({bareme: bareme});
                if (typeof this.props.exercices[i].questions[j].estimatedTime !== 'undefined') {
                    estimatedTime = estimatedTime + (this.props.exercices[i].questions[j].estimatedTime / 60);
                    this.setState({estimatedTime: estimatedTime});
                }
                nbQuestion = nbQuestion + 1;
                this.setState({nbQuestion: nbQuestion});
            }
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        let bareme = 0;
        let estimatedTime = 0;
        let nbQuestion = 0;
        for (let i in nextProps.exercices) {
            for (let j in nextProps.exercices[i].questions) {
                bareme = bareme + nextProps.exercices[i].questions[j].scale;
                if (typeof nextProps.exercices[i].questions[j].estimatedTime !== 'undefined') {
                    estimatedTime = estimatedTime + (nextProps.exercices[i].questions[j].estimatedTime / 60);
                }
                nbQuestion = nbQuestion + 1;
            }
        }
        this.setState({bareme: bareme});
        this.setState({nbQuestion: nbQuestion});
        this.setState({estimatedTime: estimatedTime});
    }

    render() {
        return (
            <footer className="footer is-info is-fixed-bottom">
                <div className="columns">
                    <div className="column is-1">
                    </div>
                    <div className="column is-4">
                        <span className="title is-5">
                            Barème total : {this.state.bareme}
                        </span>
                    </div>
                    <div className="column is-4">
                        <span className="title is-5">
                            Temps estimé total : {this.state.estimatedTime}
                        </span>
                    </div>
                    <div className="column is-4">
                        <span className="title is-5">
                            Nombre de question : {this.state.nbQuestion}
                        </span>
                    </div>
                </div>
            </footer>
        );
    }
}
