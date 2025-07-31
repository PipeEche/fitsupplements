import { useState } from 'react';
import Papa from 'papaparse';

export default function CSVUploader({ onData }) {
  const [archivoNombre, setArchivoNombre] = useState('');
  const [error, setError] = useState('');

  const handleArchivo = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setArchivoNombre(file.name);
    setError('');

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (resultado) => {
        if (resultado.errors.length) {
          setError('❌ Error al procesar el archivo CSV');
          console.error(resultado.errors);
        } else {
          onData(resultado.data); // Envía los datos al componente padre
        }
      }
    });
  };

  return (
    <div className="p-4 border rounded shadow">
      <label className="block mb-2 font-semibold">📁 Subir archivo CSV:</label>
      <input type="file" accept=".csv" onChange={handleArchivo} className="mb-2" />
      {archivoNombre && <p>✅ Archivo cargado: <strong>{archivoNombre}</strong></p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
