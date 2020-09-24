import React from 'react';

export default function Alert({text,type}) {
  return (
    <div className={`alert alert-${type}`} role='alert'>
      {text}
    </div>
  );
}
