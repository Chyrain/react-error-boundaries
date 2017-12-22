// Fallback.jsx
import React from 'react'
import Modal from './Modal'

const containerStyl = {
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0,0,0,0.75)',
    color: '#fff',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    overflowY: 'auto',
    padding: '16px'
};
const btnStyl = {
    position: 'absolute',
    right: '16px',
    top: '35px',
    cursor: 'pointer',
    minWidth: '40px',
    minHeight: '30px',
    borderRadius: '5px',
    outlineStyle: 'none'
};
const preSty = {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    padding: '0 6px'
};
const detailSty = {
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    WebkitHighlight: 'none'
};

export default function Fallback(props) {
    const { error, errorInfo, closeErrorModal } = props;
    
    return (
        <Modal>
            <div style={containerStyl}>
                <button style={btnStyl} onClick={closeErrorModal}>Close</button>
                <div>
                    <h2>Something went wrong.</h2>
                    <hr />
                    <p>
                        ErrorMessage
                    </p>
                    <pre style={{...preSty, color: '#ff0404'}}>{error.message}</pre>
                    <hr />
                    <p>
                        Stack
                    </p>
                    <pre style={{...preSty, color: '#ff0404'}}>{error.stack}</pre>
                    <hr />
                    <p>
                        ComponentStack
                    </p>
                    <pre style={{...preSty, color: '#f3d429'}}>{errorInfo.componentStack}</pre>
                    <hr />
                </div>
            </div>
        </Modal>
    )
}