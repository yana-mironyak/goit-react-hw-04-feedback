import {useState} from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification";

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const keys = { good, neutral, bad };
    
    const feedbackKeys = Object.keys(keys);

    const onClick = (type) => {
        switch (type) {
            case 'good':
                setGood(prevGood => prevGood + 1);
                break;
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            case 'bad':
                setBad(prevBad => prevBad + 1);
                break;
            default:
                break;
        }
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round(good / countTotalFeedback() * 100);
    };

    return (
        <div>
            <Section title="Please leave feedback">
            <FeedbackOptions
                options={feedbackKeys}
                onLeaveFeedback={onClick}>
            </FeedbackOptions>
            </Section>
            <Section title="Statistics">
                {countTotalFeedback() <= 0 ? <Notification message='There is no feedback' /> :
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}>
                    </Statistics>
                }
                </Section>   
        </div>
    )
}

export default App;