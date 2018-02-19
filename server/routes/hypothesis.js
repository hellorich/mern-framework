const { Router } = require('express');
const HypothesisController = require('../controllers/hypothesis');

const router = Router();

// Get all Hypothesis
router.route('/hypothesis').get(HypothesisController.getHypothesis);

// Add new Hypothesis
router.route('/hypothesis').post(HypothesisController.addHypothesis);

// Delete Hypothesis
router.route('/hypothesis/:slug').delete(HypothesisController.deleteHypothesis);

module.exports = router;
