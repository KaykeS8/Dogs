import React from 'react';

interface PropsError {
  error:string | null
}
export const Error = ({error}:PropsError) => {
  if (!error) return null
  return <p style={{ color: '#f31', margin: '1rem 0' }}>{error}</p>
}
