const candidateService = require('../services/candidate.service');

function getCandidates(req, res) {
  try {
    const allCandidates = candidateService.getAllCandidates();
    res.status(200).json(allCandidates); // 200 OK
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' }); // 500 quando ocorrer um erros
  }
}

function createCandidate(req, res) {
  try {
    const { name, email, phone } = req.body;

    // Validação do s campos name, emial, phone
    if (!name || !email || !phone) {
      return res.status(400).json({
        error: 'Todos os campos (name, email e phone) são obrigatórios',
      });
    }

    // aqui vou validr o enmail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    const newCandidate = candidateService.createCandidate({ name, email, phone });
    res.status(201).json(newCandidate); // 201 quando criares bem sem erro
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' }); // 500 quando ocorrer um erro no servidor ou outro erro tambem.
  }
}

module.exports = { getCandidates, createCandidate };