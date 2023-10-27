
import { useState } from "react"
import { MessageContact } from "../interfaces"
import Title from "./Title"


const Contact = () => {
    const [formData, setFormData] = useState<MessageContact>({
        name:'',
        email: '',
        subject: '',
        message: ''

    })

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>)=> {
        console.log('entro')
        e.preventDefault();
        try {
            console.log(formData)
        }catch (error) {
            throw new Error("Something it's wrong!!");
            
        }
    }

    return (
     <section className="columns is-flex is-justify-content-center is-mobile">
        <article className="column  ">
            <Title title='Contact' subTitle='us'/>
            <form onSubmit={handleSubmit}>
            <div className="field">
            <label className="label" htmlFor="name">Name</label>
                <div className="control">
                    <input className="input" type="text" name="name" id="name" onChange={handleChangeInput}  value={formData.name} required placeholder="Text input" />
                </div>
            </div>
            <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control">
                <input className="input" type="email" name="email"  id="email" placeholder="Email input" onChange={handleChangeInput}  value={formData.email} required/>
            </div>
            </div>
            <div className="field">
            <label className="label" htmlFor="subject">Subject</label>
                <div className="control">
                    <input className="input" type="text" name="subject" id="subject" placeholder="Subject" onChange={handleChangeInput}  value={formData.subject} required/>
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="message">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Message" id="message" name="message" onChange={handleChangeArea}  value={formData.message} required/>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button  className="button primary">Submit</button>
                </div>
            </div>
        </form>
        </article>
     </section>
    )
}

export default Contact