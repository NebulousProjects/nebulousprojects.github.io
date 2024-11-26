import { Colors } from "../Colors";
import "./Topics.css"

interface TopicInput {
    title: string,
    description: string,
    image: any,
    side: boolean
}

interface TopicInfo {
    title: string,
    description: string,
    image: any
}

interface Topics {
    topics: TopicInfo[]
}

export function TopicList(input: Topics) {
    return <div className="topics-list">
        {
            input.topics.map((input, idx) => {
                return <Topic 
                    title={input.title} 
                    description={input.description} 
                    image={input.image} 
                    side={idx % 2 == 0}
                />
            })
        }
    </div>;
}

export function Topic(input: TopicInput) {
    const image = <img src={input.image} alt="" className="topic-image" />;
    const text = <div className="topic-text">
        <div className="topic-title">{input.title}</div>
        <div className="topic-description">{input.description}</div>
    </div>;

    return <div className="topic-wrapper">
        <div className="topic-element" style={{ backgroundColor: Colors.offwhite }}>
            {input.side ? text : image}
            <div style={{ width: "1em" }} />
            {input.side ? image : text}
        </div>
    </div>;
}