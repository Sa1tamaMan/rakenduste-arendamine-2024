import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <div>
                    <input type="email" name="email" placeholder='email...'/>
                </div>
                <div>
                    <textarea name="message" placeholder='message...'></textarea>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button type='Submit'
                        style={{
                            backgroundColor: '#4CAF50', 
                            color: 'white', 
                            padding: '10px 20px', 
                            border: 'none', 
                            borderRadius: '5px', 
                            fontSize: '16px',
                            cursor: 'pointer'
                        }} onClick={() => alert('Message sent! (not really)')}>Send message</button>
                </div>
            </form>
            
        </div>
        
    );
}

export default Contact;