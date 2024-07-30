const router = require('express').Router();
const {
    getAllthoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughts-controller');

router.route('/').get(getAllthoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
