import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Download } from 'lucide-react';

export default function EmailForm({ source = 'hero' }) {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');
  const [ebookUrl, setEbookUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('http://localhost:8080/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source,
          website, // honeypot
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message || '¡Te has registrado con éxito!');
        if (data.ebookUrl) {
          setEbookUrl(data.ebookUrl);
        }
      } else {
        setStatus('error');
        setMessage(data.detail || 'Hubo un problema. Inténtalo de nuevo.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('Error de conexión. Inténtalo más tarde.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-6 rounded-xl glass border-glow-mint/30 flex flex-col items-center text-center space-y-4 animate-fade-in">
        <CheckCircle2 className="w-12 h-12 text-glow-mint drop-shadow-[0_0_10px_rgba(125,249,196,0.5)]" />
        <div>
          <h3 className="font-display font-bold text-xl text-text-primary">¡Ya casi está!</h3>
          <p className="text-sm text-text-secondary mt-1 max-w-sm">{message}</p>
        </div>
        {ebookUrl && (
          <a
            href={ebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-glow-mint hover:bg-glow-mint/80 text-dark-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(125,249,196,0.3)]"
          >
            <Download className="w-5 h-5" />
            Descargar eBook Ahora
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-3">
      {/* Honeypot anti-bot oculto */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -top-96 left-0 opacity-0 pointer-events-none"
      />

      <div className="flex flex-col md:flex-row gap-2.5">
        <div className="relative flex-grow">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tú@ejemplo.com"
            className="w-full px-4 py-3.5 rounded-lg bg-dark-900/80 border border-white/10 text-text-primary placeholder-text-muted focus:outline-none focus:border-glow-lavender/50 focus:ring-1 focus:ring-glow-lavender/30 transition-all duration-300"
            disabled={status === 'loading'}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold transition-all duration-300 transform hover:scale-[1.02] ${
            status === 'loading'
              ? 'bg-dark-600 text-text-muted cursor-not-allowed'
              : 'bg-glow-lavender hover:bg-glow-lavender/90 text-dark-950 shadow-[0_0_20px_rgba(200,182,255,0.3)]'
          }`}
        >
          {status === 'loading' ? (
            <div className="w-5 h-5 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Empezar desafío
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm mt-1 px-1">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{message}</span>
        </div>
      )}

      <p className="text-xs text-text-muted px-1">
        Fricción cero. 1 campo. Puedes desuscribirte en 1 clic.
      </p>
    </form>
  );
}
