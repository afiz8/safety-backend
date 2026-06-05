const mongoose = require('mongoose');

const oshRiskAssessmentSchema = new mongoose.Schema({
  activity: { type: String, required: true },
  location: String,
  department: String,
  assessedBy: String,
  assessedById: String,
  assessmentDate: Date,
  hazards: [
    {
      hazardName: String,
      existingControl: String,
      likelihood: { type: Number, min: 1, max: 5 },
      severity: { type: Number, min: 1, max: 5 },
      riskLevel: { type: String, enum: ['Low', 'Medium', 'High', 'Extreme'] },
      recommendedControl: String,
      responsible: String,
      dueDate: Date,
      status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' }
    }
  ],
  reviewDate: Date,
  status: { type: String, enum: ['Active', 'Reviewed', 'Archived'], default: 'Active' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('OSHRiskAssessment', oshRiskAssessmentSchema);