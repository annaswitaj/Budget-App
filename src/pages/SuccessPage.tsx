import { createClient } from '@supabase/supabase-js';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const supaBase = createClient(
  'https://uvkgygthopvimmeyerho.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2a2d5Z3Rob3B2aW1tZXllcmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyOTgyNDgsImV4cCI6MTk5MTg3NDI0OH0.dFduv1hQ3JovQaDPkLc3igucMGt4Ysw05MWrr_CQmEk'
);

const SuccessPage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supaBase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);

          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supaBase.auth.signOut();
    navigate('/');
  }
  return (
    <div className='App'>
      <header className='App-header'>
        {Object.keys(user).length !== 0 ? (
          <>
            <h1>Success</h1>
            <button onClick={() => signOutUser()}>Sign Out</button>
          </>
        ) : (
          <>
            <h1>User is not logged in</h1>
            <button
              onClick={() => {
                navigate('/');
              }}
            >
              Go back home
            </button>
          </>
        )}
      </header>
    </div>
  );
};

export default SuccessPage;
