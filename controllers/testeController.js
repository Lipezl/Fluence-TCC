import TesteModel from '../models/TesteModel.js';
import multer from 'multer';
import fs from 'fs';
import { initWhisper } from 'whisper-onnx-speech-to-text';
import path from "path";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const upload = multer({ dest: "uploads/" });

// Será necessário arrumar
function converterParaWav(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions(["-ar 16000", "-ac 1", "-f wav"])
      .on("end", () => resolve(outputPath))
      .on("error", err => reject(err))
      .save(outputPath);
  });
}

export const transcreverAudio = [
  upload.single("audio"),
  async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "Arquivo não enviado" });
    const inputPath = req.file.path;
    const wavPath = path.join(path.dirname(inputPath), "convertido.wav");

    try {
      await converterParaWav(inputPath, wavPath);

      const whisper = await initWhisper("base");
      const transcription = await whisper.transcribe(wavPath, "portuguese");

      whisper.disposeModel();

      fs.unlinkSync(inputPath);
      fs.unlinkSync(wavPath);

      return res.json({ transcription });
    } catch (err) {
      if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
      if (fs.existsSync(wavPath)) fs.unlinkSync(wavPath);
      console.error(err);
      return res.status(500).json({ message: "Erro na transcrição", error: err.message });
    }
  },
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
  const { textoId, resultado, feedback, transcricao } = req.body;
  if (!userId || !textoId || !resultado) {
    return res.status(400).json({ message: 'Todos os campos obrigatórios.' });
  }
  const teste = {
    userId,
    textoId,
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
  const userId = parseInt(req.params.userId);
  TesteModel.listarTestesPorUsuario(userId, (err, testes) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar histórico.' });
    if (!testes || testes.length === 0) {
      return res.status(404).json({ message: 'Nenhum teste encontrado para este usuário.' });
    }
    return res.status(200).json({ status: 'ok', message: 'Histórico de testes do usuário', testes });
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
