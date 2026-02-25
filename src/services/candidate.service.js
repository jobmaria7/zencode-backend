const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {v4: uuidv4} = require('uuid');

const filePath = path.join(__dirname, 'candidates.json');

function generateId() {
  return 'id-' + crypto.randomBytes(8).toString('hex');
}

// Função para ler os candidatos do arquivo
function readCandidates() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler candidatos:', error);
    return [];
  }
}

// aFunção para salvar candidatos no arquivo
function writeCandidates(candidates) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(candidates, null, 2));
  } catch (error) {
    console.error('Erro ao salvar candidatos:', error);
  }
}

function getAllCandidates() {
  return readCandidates();
}

function createCandidate(candidate) {
  const candidates = readCandidates();
  const newCandidate = {
    id: uuidv4() + generateId(),
    ...candidate,
  };
  candidates.push(newCandidate);
  writeCandidates(candidates);
  return newCandidate;
}

module.exports = {
  getAllCandidates,
  createCandidate,
};