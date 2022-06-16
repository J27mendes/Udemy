export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Maria ${codigo}`,
        email: `mariajulia${codigo}@hotmail.com`
    })
}

//https://www.youtube.com/watch?v=TzufYnZUmz4