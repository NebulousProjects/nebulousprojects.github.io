import "./Header.css"

interface HeaderInput {
    title: string,
    subtitle: string,
    description: string,
    image: any
}

export function Header(inputs: HeaderInput) {
    return <div className="flavor-img">
        <img src={inputs.image} alt="" style={{ height: "140vh" }} />

        <div className="title-text">{inputs.title}</div>
        <div className="title-text2">{inputs.subtitle}</div>
        <div className="title-subtext">{inputs.description}</div>
    </div>
}