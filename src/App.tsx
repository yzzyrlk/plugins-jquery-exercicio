import React from 'react';
import { Carousel } from './components/Carousel';
import { ContactForm } from './components/ContactForm';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80',
    title: 'Carro Esportivo',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    title: 'Carro Clássico',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80',
    title: 'Carro Moderno',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Galeria de Carros</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Carousel slides={slides} />
        </div>

        <div className="mt-8 bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

export default App;