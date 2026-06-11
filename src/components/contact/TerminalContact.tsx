'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  'Microsoft Windows [Version 10.0.26200.8457]',
  '(c) Microsoft Corporation. All rights reserved.',
  'C:\\Users\\mrigank> establish_connection.exe',
  '› Connection secured.',
  'C:\\Users\\mrigank> load_protocol.bat',
  '› Ready. Awaiting transmission.',
];

export function TerminalContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);

  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isTransmitting) return;

    setIsTransmitting(true);
    
    // Simulate terminal transmission process
    setTimeout(() => {
      setTransmissionSuccess(true);
      setIsTransmitting(false);
    }, 2500);
  };

  return (
    <div className="terminal-wrap">
      <div className="terminal">
        <div className="terminal-bar">
          <span>&rsaquo;_&nbsp;&nbsp;Command Prompt</span>
          <span className="terminal-buttons" style={{ marginLeft: 'auto' }}>&minus; &nbsp; &#9633; &nbsp; &times;</span>
        </div>
        <div className="terminal-body">
          {bootLines.map((line, i) => (
            <motion.div
              key={line}
              className={line.startsWith('›') ? 'output-line' : 'prompt-line'}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.3 }}
            >
              {line}
            </motion.div>
          ))}
          
          <motion.div
            className="terminal-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />

          <AnimatePresence mode="wait">
            {!transmissionSuccess ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="terminal-field">
                  <label className="prompt-label">&rsaquo; set name =</label>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name" 
                    required
                    disabled={isTransmitting}
                  />
                </div>
                <div className="terminal-field">
                  <label className="prompt-label">&rsaquo; set email =</label>
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com" 
                    required
                    disabled={isTransmitting}
                  />
                </div>
                <div className="terminal-field">
                  <label className="prompt-label">&rsaquo; set message =</label>
                  <textarea 
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="what's on your mind?" 
                    required
                    disabled={isTransmitting}
                  />
                </div>

                <button 
                  type="submit" 
                  className={`transmit-btn ${isFormValid ? 'active' : ''}`}
                  disabled={!isFormValid || isTransmitting}
                >
                  {isTransmitting ? '› executing transmission...' : '› transmit.exe'}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="terminal-success-flow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="prompt-line">C:\Users\mrigank&gt; sending_data.exe</div>
                <div className="output-line">› Encrypting packets [AES-256]... done.</div>
                <div className="output-line">› Redirecting protocol through secure tunnels...</div>
                <div className="output-line text-emerald-400">› Transmission successful. Connection closed.</div>
                <div className="terminal-divider" />
                <div className="prompt-line mt-4">C:\Users\mrigank&gt; <span className="terminal-cursor" /></div>
                <button 
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setTransmissionSuccess(false);
                  }}
                  className="transmit-btn active mt-6"
                >
                  › reset_protocol.bat
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
