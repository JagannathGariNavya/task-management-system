import authService from '../services/authService.js';


export const register = async (req, res) => {
    try {
      const { email, username, password } = req.body;  // Include username
      const newUser = await authService.register(email, username, password);  // Pass username to the service
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;  
      const token = await authService.login(email, password);
      res.status(200).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

export const refreshToken = (req, res) => {
  // Implement refresh token logic here
};

export const getProfile = (req, res) => {
  res.json(req.user);
};

export const logout = (req, res) => {
  // Implement logout logic
};
