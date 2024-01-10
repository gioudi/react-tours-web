import { useState } from 'react';
import { type MessageContact } from '../interfaces';
import Title from './Title';

import '../i18n/config'
import { useTranslation } from 'react-i18next';

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<MessageContact>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { t } = useTranslation()

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (error) {
      throw new Error("Something it's wrong!!");
    }
  };

  return (
    <section className="container">
         <section className="columns is-flex is-justify-content-left is-mobile">
      <article className="column is-6  ">
        <Title
          title={t('Contact')}
          subTitle=""
        />
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label
              className="label"
              htmlFor="name"
            >
              Nombre
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                onChange={handleChangeInput}
                value={formData.name}
                required
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label"
              htmlFor="email"
            >
              Correo
            </label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Email input"
                onChange={handleChangeInput}
                value={formData.email}
                required
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label"
              htmlFor="subject"
            >
              Asunto
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                onChange={handleChangeInput}
                value={formData.subject}
                required
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label"
              htmlFor="message"
            >
              Descipción
            </label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Message"
                id="message"
                name="message"
                onChange={handleChangeArea}
                value={formData.message}
                required
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button primary">Submit</button>
            </div>
          </div>
        </form>
      </article>
    </section>
    </section>
  );
};

export default Contact;
