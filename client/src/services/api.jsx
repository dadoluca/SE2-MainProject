const SERVR_BASE_URL = 'http://localhost:5001';
const API_BASE_URL = `${SERVR_BASE_URL}/api`; 

const logIn = async (credentials) => {
    const response = await fetch(SERVER_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(credentials),
    });
    
    if(response.ok) {
      const user = await response.json();
      return user;
    }
    else {
      const errDetails = await response.text();
      throw errDetails;
    }
};
  
const getUserInfo = async () => {
    /*const response = await fetch(SERVER_URL + '/api/sessions/current', {
      credentials: 'include',
    });
    const user = await response.json();
    if (response.ok) {
      return user;
    } else {
      throw user;  // an object with the error coming from the server
    }*/
   throw new Error('Not authenticated');
};
  
const logOut = async() => {
    const response = await fetch(SERVER_URL + '/logout', {
      method: 'DELETE',
      credentials: 'include'
    });
    if (response.ok)
      return null;
}

export default { logIn, logOut, getUserInfo };

  