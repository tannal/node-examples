import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

const ydoc = new Y.Doc();
const ytext = ydoc.getText('shared');

const provider = new WebsocketProvider('ws://localhost:1234/ws', 'quill-demo-5', ydoc);

const textarea = document.querySelector('#shared-text');

// Update textarea from Yjs
ytext.observe(event => {
    textarea.value = ytext.toString();
});

// Update Yjs from textarea
textarea.addEventListener('input', event => {
    const delta = event.inputType === 'insertText' ? event.data : '';
    
    if (delta) {
        const cursorPos = textarea.selectionStart;
        ytext.insert(cursorPos - delta.length, delta);
    } else {
        // Handle other types of changes (e.g., delete)
        ytext.delete(textarea.selectionStart, textarea.selectionEnd);
    }
});

