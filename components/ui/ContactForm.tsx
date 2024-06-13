import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xknddznq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
    <h1 className='text-2xl font-bold'>Contact Me</h1>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='rounded-md bg-zinc-700 border border-white/[0.3] focus:outline-1 focus:outline-white/[0.4]'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className='rounded-md bg-zinc-700 border border-white/[0.3] focus:outline-1 focus:outline-white/[0.4]'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='w-full bg-zinc-800 p-2 mt-4 rounded-md border border-white/[0.3] hover:bg-zinc-600'>
        Submit &rarr;
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;