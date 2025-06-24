import { testes } from '../data/testes.js';
import { textos } from '../data/textos.js';

export function sortearTexto(req, res){
    const userid = parseInt(req.params.userId);
    const feitos = testes.filter(t => t.userId === userid).map(t => t.textoId);
    const textosDisponiveis = textos.filter(t => !feitos.includes(t.id));

    if (textosDisponiveis.length === 0){
        return res.status(200).json({message: 'Todos os textos já foram realizados por este usuário.'});
    }
    const textoSorteado = textosDisponiveis(Math.floor(Math.random()*textosDisponiveis.length));
    return res.status(200).json({
        message: 'Texto sorteado com sucesso.',
        texto: textoSorteado
    });
}

export function realizarTeste(req, res){
    const { userId, textoId, audioUrl, resultado, feedback} = req.body;
    if (!userId || !textoId || !audioUrl || !resultado) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
    const novoTeste = {
        id: testes.length + 1,
        userId: parseInt(userId),
        textoId: parseInt(textoId),
        data: new Date().toISOString(),
        audioUrl,
        resultado,
        feedback
    };
    testes.push(novoTeste);
    return res.status(201).json({ message: 'Teste realizado com sucesso!', teste: novoTeste });
}

export function historicoUsuario(req, res){
    const userId = parseInt(req.params.userId);
   const historico = testes.filter(t => t.userId === userId);

    if (historico.length === 0) {
        return res.status(404).json({ message: 'Nenhum teste encontrado para este usuário.' });
    }
    return res.status(200).json({
        status: 'ok',
        message: 'Histórico de testes do usuário',
        testes: historico
    });
}