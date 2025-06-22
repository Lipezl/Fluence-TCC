import { textos } from '../../data/textos.js';

export function criarTexto(req, res){
    const { titulo, conteudo } = req.body;
    if (!titulo || !conteudo) {
        return res.status(400).json({ message: 'Título e conteúdo são obrigatórios.' });
    }
    const novoTexto = {
        id: textos.length + 1,
        titulo,
        conteudo
    };
    textos.push(novoTexto);
    return res.status(201).json({ message: 'Texto criado com sucesso!', texto: novoTexto });
}

export function listarTextos(req, res) {
    return res.status(200).json({
        status: 'ok',
        message: 'Lista completa de textos',
        data: textos
    });
}

export function editarTexto(req, res){
    const { id } = req.params;
    const { titulo, conteudo } = req.body;

    const textoIndex = textos.findIndex(texto => texto.id === parseInt(id));
    if (textoIndex === -1) {
        return res.status(404).json({ message: 'Texto não encontrado.' });
    }

    if (!titulo || !conteudo) {
        return res.status(400).json({ message: 'Título e conteúdo são obrigatórios.' });
    }

    textos[textoIndex] = { id: parseInt(id), titulo, conteudo };
    return res.status(200).json({ message: 'Texto atualizado com sucesso!', texto: textos[textoIndex] });
}

export function deletarTexto(req, res){
    const { id } = req.params;

    const textoIndex = textos.findIndex(texto => texto.id === parseInt(id));
    if (textoIndex === -1) {
        return res.status(404).json({ message: 'Texto não encontrado.' });
    }

    textos.splice(textoIndex, 1);
    return res.status(200).json({ message: 'Texto deletado com sucesso!' });
}