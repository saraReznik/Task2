// src/services/authService.js

const login = async ({ phone, name }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (phone && name) {
        resolve({
          token: 'mocked-jwt-token-12345',
          user: {
            id: phone === '0000' ? 'admin' : 'user123',
            name,
            phone,
            role: phone === '0000' ? 'admin' : 'user',
          },
        });
      } else {
        reject(new Error('נא למלא את כל השדות'));
      }
    }, 1000);
  });
};

const authService = { login };
export default authService;
