import Texto from '../../models/TextoModel.js';

export function listarTextos(req, res) {
    Texto.findAll((err, textos) => {
        if (err) return res.status(500).json({ message: 'Erro ao listar textos.' });
        return res.status(200).json(textos);
    });
}

export function criarTexto(req, res){
    const { titulo, conteudo, nivel } = req.body;

    if (!titulo || !conteudo || !nivel) {
        return res.status(400).json({ message: 'Título e conteúdo são obrigatórios.' });
    }

    Texto.createTexto({ titulo, conteudo, nivel }, (err, novoTexto) => {
        if (err) return res.status(500).json({ message: 'Erro ao criar texto.' });
        return res.status(201).json({ message: 'Texto criado com sucesso!', texto: novoTexto });
    });
}

export function editarTexto(req, res){
    const { id } = req.params;
    const { titulo, conteudo, nivel } = req.body;

    if (!titulo || !conteudo || !nivel) {
        return res.status(400).json({ message: 'Título e conteúdo são obrigatórios.' });
    }

    Texto.updateTexto(id, { titulo, conteudo, nivel }, (err, textoAtualizado) => {
        if (err) return res.status(500).json({ message: 'Erro ao atualizar texto.' });
        return res.status(200).json({ message: 'Texto atualizado com sucesso!', texto: textoAtualizado });
    });
}

export function deletarTexto(req, res){
    const { id } = req.params;

    Texto.deleteTexto(id, (err, result) => {
        if (err) return res.status(500).json({ message: 'Erro ao deletar texto.' });
        return res.status(200).json(result);
    });
}