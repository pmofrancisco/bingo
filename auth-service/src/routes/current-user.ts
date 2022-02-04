import express from 'express';

const router = express.Router();

router.get('/api/users/current-user', (req, res) => {
  res.send({ id: '1', email: 'pmofrancisco@yahoo.com' });
});

export { router as currentUserRouter };
