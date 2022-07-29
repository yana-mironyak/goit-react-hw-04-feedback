import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }; 

    feedbackKeys = Object.keys(this.state);
    feedbackValue = Object.values(this.state);

    onClick = (evt) => {
        this.setState(prevState => ({ [evt.target.name]: prevState[evt.target.name] + 1 }))
    };

    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage() {
        return Math.round(this.state.good / this.countTotalFeedback() * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;
    
        return (
            <div>
                <Section title="Please leave feedback">
                <FeedbackOptions
                    options={this.feedbackKeys}
                    onLeaveFeedback={this.onClick}>
                </FeedbackOptions>
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() <= 0 ? <Notification message='There is no feedback' /> :
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}>
                        </Statistics>
                    }
                    </Section>   
            </div>
        )
    }
}
