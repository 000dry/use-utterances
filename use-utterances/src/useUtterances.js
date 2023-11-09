import React, { useRef, useEffect } from 'react';

export default function useUtterances () {
  const Comments = () => {
    const ref = useRef(null);
    useEffect(() => {
      const scriptElement = document.createElement('script');
      scriptElement.async = true;
      scriptElement.crossOrigin = 'anonymous';
      scriptElement.src = 'https://utteranc.es/client.js';
  
      scriptElement.setAttribute('issue-term', 'url');
      scriptElement.setAttribute('label', 'comment');
      scriptElement.setAttribute(
        'repo',
        '000dry/000dry.dev',
      );
      scriptElement.setAttribute(
        'theme',
        'github-light',
      );
  
      ref.current?.appendChild(scriptElement);
    }, []);
  
    return <div ref={ref} />;
  }
  return Comments;

}