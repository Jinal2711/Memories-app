import express from 'express';
const router = express.Router();
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';


router.get('/', getPosts);
router.post('/', auth, createPost);
router.post('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/likePost', auth, likePost);

export default router;