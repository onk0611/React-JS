import { React, useState } from "react";

export default function UserUseState() {
    const [name, setName] = useState('');

    const nameChange = event => {
        setName(event.target.value);
    };

    const styles = {
        input: {
            backgroundColor: '#282c34',
            border: '1px solid #61dafb',
            color: '#61dafb',
            padding: '10px',
            borderRadius: '24px',
        },
        paragraph: {
            fontSize: '16px',
        }
    };

    return (
        <div>
            <p style={styles.paragraph}>Nom : {name}</p>
            <input 
                placeholder="E.g : John Doe"
                style={styles.input}
                type="text" 
                id="name"
                name="name"
                onChange={nameChange}
                value={name}
            />
        </div>
    )
}
