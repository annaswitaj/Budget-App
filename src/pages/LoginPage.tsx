import { createClient } from '@supabase/supabase-js';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const supaBase = createClient(
  'https://uvkgygthopvimmeyerho.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2a2d5Z3Rob3B2aW1tZXllcmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyOTgyNDgsImV4cCI6MTk5MTg3NDI0OH0.dFduv1hQ3JovQaDPkLc3igucMGt4Ysw05MWrr_CQmEk'
);

const LoginPage = () => {
  const navigate = useNavigate();

  supaBase.auth.onAuthStateChange(async (event) => {
    if (event !== 'SIGNED_OUT') {
      //forward to success URL
      navigate('/success');
    } else {
      //forward to http://127.0.0.1:5173/
      navigate('/');
    }
  });
  return (
    <div className='App'>
      <header className='App-header'>
        <Auth
          supabaseClient={supaBase}
          appearance={{ theme: ThemeSupa }}
          theme='dark'
          providers={['google']}
        />
      </header>
    </div>
  );
};

export default LoginPage;
