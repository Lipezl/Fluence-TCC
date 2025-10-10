import TesteModel from '../models/TesteModel.js';
import multer from 'multer';
import fs from 'fs';
import path from "path";
import fetch from 'node-fetch';
const upload = multer({ dest: 'uploads/' });


export const transcreverAudio = [
  upload.single("audio"),
  async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "Arquivo não enviado" });
    const inputPath = req.file.path;

    try {
      const audioBuffer = fs.readFileSync(inputPath);

      const response = await fetch('https://api-inference.huggingface.co/models/openai/whisper-large-v3', {
        method: 'POST',
        headers: {
          'Authorization': `bearer ${process.env.TOKEN}`,
          'Content-Type': 'audio/wav'
        },
        body: audioBuffer
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro da API HuggingFace: ${errorText}`);
      }

      const data = await response.json();
      const transcription = data.text || data.transcription || "";

      fs.unlinkSync(inputPath);

      return res.json({ transcription });

    } catch (err) {
      if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
      console.error('Erro na transcrição HuggingFace:', err);
      return res.status(500).json({ message: "Erro na transcrição", error: err.message });
    }
  }
];
export function iniciarTeste(req, res) {
  const userId = req.session.userId;
  if (!userId) {
    return res.redirect('/login');
  }

  TesteModel.sortearTextoParaUsuario(userId, (err, textoSorteado) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao sortear texto.' });
    }
    if (!textoSorteado) {
      return res.status(200).json({ message: 'Todos os textos já foram realizados por este usuário.' });
    }
    return res.render('teste', {
      user: { id: userId },
      teste: textoSorteado
    });
  });
}

export function realizarTeste(req, res) {
  const userId = req.session.userId;
  const { textoId,nivel, resultado, feedback, transcricao } = req.body;
  if (!userId || !textoId || !resultado) {
    return res.status(400).json({ message: 'Todos os campos obrigatórios.' });
  }
  const teste = {
    userId,
    textoId,
    nivel,
    resultado,
    transcricao,
    feedback
  };
  TesteModel.salvarTeste(teste, (err, novoTeste) => {
    if (err) return res.status(500).json({ message: 'Erro ao salvar teste.' });
    console.log('Teste salvo:', novoTeste);
    return res.status(201).json({ message: 'Teste realizado com sucesso!', teste: novoTeste });
  });
}

export function historicoUsuario(req, res) {
  const userId = req.session.userId;
  if (!userId) {
    return res.redirect('/login');
  }
  TesteModel.listarTestesPorUsuario(userId, (err, testes) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar histórico.' });

    return res.render('desempenho', { testes });
  });
}

export function detalhesTeste(req, res) {
  const testeId = parseInt(req.params.testeId);
  TesteModel.buscarDetalhesTeste(testeId, (err, detalhes) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar detalhes do teste.' });
    if (!detalhes) return res.status(404).json({ message: 'Teste não encontrado.' });
    return res.status(200).json({ status: 'ok', detalhes });
  });
}
