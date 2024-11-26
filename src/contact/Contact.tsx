import { NavBar, Page } from "../navbar/NavBar";
import { Header } from "../utils/Header";
import flavor from "../image/minecraft-flavor.png";
import { Colors } from "../Colors";
import "./Contact.css";

function ContactForm() {
    const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let elements = event.currentTarget.elements;
        let name = (elements[0] as HTMLInputElement).value;
        let email = (elements[1] as HTMLInputElement).value;
        let subject = (elements[2] as HTMLInputElement).value;
        let message = (elements[3] as HTMLInputElement).value;
    }

    return <div className="contact-wrapper">
        <div className="contact-block" style={{ backgroundColor: Colors.offwhite }}>
            <div className="contact-info-title">Contact Us</div>
            <form 
                className="contact-form"
                onSubmit={onSubmit}
                noValidate
            >
                <input
                    type="text"
                    className="contact-form-input"
                    name="name"
                    placeholder="Name"
                    style={{ borderColor: Colors.softblue }}
                />
                
                <input
                    type="text"
                    className="contact-form-input"
                    name="email"
                    placeholder="Email Address"
                    style={{ borderColor: Colors.softblue }}
                />
                
                <input
                    type="text"
                    className="contact-form-input"
                    name="subject"
                    placeholder="Subject"
                    style={{ borderColor: Colors.softblue }}
                />
                
                <textarea
                    className="contact-form-input"
                    name="message"
                    placeholder="Message"
                    style={{ borderColor: Colors.softblue }}
                    rows={3}
                />
                
                <input
                    type="submit"
                    className="contact-form-submit"
                    name="submit"
                    value="Send"
                    style={{ borderColor: Colors.softblue }}
                />
            </form>
        </div>
    </div>;
}

function ContactInfo() {
    return <div className="contact-wrapper">
        <div className="contact-block" style={{ backgroundColor: Colors.offwhite }} >
            <div className="contact-info-title">Contact Information</div>
            <div className="contact-info-text">Email: todo-email@gmail.com</div>
            <div className="contact-info-text">Discord: @daylightnebula</div>
        </div>
    </div>;
}

export function Contact() {
    return <div style={{ backgroundColor: Colors.blue }} >
        <NavBar 
            page={ Page.Contact } 
        />

        <Header 
            title="Daylin"
            subtitle="Software House"
            description="Contact Us"
            image={flavor}
        />

        <div className="contact-list">
            <ContactForm/>
            <ContactInfo/> 
        </div>
    </div>
}