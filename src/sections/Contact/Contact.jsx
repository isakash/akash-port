import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="https://formspree.io/f/mwkggzbr" method="post">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name"
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Email
                </label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Email"
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder="Messsage"
                    required></textarea>
            </div>
            <input className="hover btn" type="submit" value='Submit' />
        </form>
    </section>
  );
}

export default Contact