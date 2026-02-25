const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');

// preferi comentar para a documentracao ser mais legivel e perceberem melhor .
/**
 * @swagger
 * components:
 *   schemas:
 *     Candidate:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do candidato
 *         name:
 *           type: string
 *           description: Nome do candidato
 *         email:
 *           type: string
 *           description: Email do candidato
 *         phone:
 *           type: string
 *           description: Telefone do candidato
 */

/**
 * @swagger
 * /candidates:
 *   get:
 *     summary: Retorna todos os candidatos
 *     tags: [Candidates]
 *     responses:
 *       200:
 *         description: Lista de candidatos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Candidate'
 */
router.get('/candidates', candidateController.getCandidates);

/**
 * @swagger
 * /candidates:
 *   post:
 *     summary: Cria um novo candidato
 *     tags: [Candidates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Candidate'
 *     responses:
 *       201:
 *         description: Candidato criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidate'
 *       400:
 *         description: Dados inválidos
 */
router.post('/candidates', candidateController.createCandidate);

module.exports = router;