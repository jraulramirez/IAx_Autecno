import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
dameimport { saveAs } from 'file-saver';

const PersuasionGPT = () => {
  const [producto, setProducto] = useState('');
  const [sector, setSector] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [email, setEmail] = useState('');

  const generarEmail = () => {
    const asunto = `¿Tu ${sector} sigue usando soluciones de hace 10 años?`;
    const cuerpo = `Hola,

Sabemos que en el mundo de los ${sector}, todo cambia rápido. Pero muchos siguen usando tecnología del siglo pasado.

En AuTecno, tenemos ${producto} diseñados para solucionar eso desde el primer día.

Nada de promesas vacías. Solo resultados reales.

¿Te gustaría ver cómo funcionaría esto en tu caso?

Respóndeme este correo con la palabra “Interesa” y te lo explico en 5 minutos.

Un saludo sin rodeos,
Equipo AuTecno.`;
    const generado = `📩 Asunto:
${asunto}

✉️ Cuerpo:
${cuerpo}`;
    setEmail(generado);
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(email);
  };

  const descargarArchivo = (formato) => {
    const blob = new Blob([email], {
      type: formato === 'txt' ? 'text/plain' : 'application/pdf',
    });
    saveAs(blob, `email_autecno.${formato}`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img src="/logoAutecnoNuevo127x71.png" alt="Logo AuTecno" className="mb-4 w-32" />
      <Card className="rounded-2xl shadow-md border-green-500">
        <CardContent className="space-y-4">
          <h1 className="text-xl font-bold text-green-700">Generador de Emails Persuasivos - AuTecno</h1>
          <Input placeholder="Producto o servicio" value={producto} onChange={e => setProducto(e.target.value)} />
          <Input placeholder="Sector o tipo de cliente" value={sector} onChange={e => setSector(e.target.value)} />
          <Input placeholder="Objetivo del email" value={objetivo} onChange={e => setObjetivo(e.target.value)} />
          <Button onClick={generarEmail} className="bg-green-600 hover:bg-green-700 text-white w-full">Generar Email</Button>
          {email && (
            <div className="space-y-2">
              <Textarea rows={10} value={email} readOnly className="w-full" />
              <div className="flex gap-2">
                <Button onClick={copiarAlPortapapeles} className="bg-yellow-500 hover:bg-yellow-600 text-white">📋 Copiar</Button>
                <Button onClick={() => descargarArchivo('txt')} className="bg-blue-600 hover:bg-blue-700 text-white">📄 Descargar TXT</Button>
                <Button onClick={() => descargarArchivo('pdf')} className="bg-red-600 hover:bg-red-700 text-white">📄 Descargar PDF</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PersuasionGPT;
