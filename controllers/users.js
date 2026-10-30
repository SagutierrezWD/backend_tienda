const usuarios = {}

usuarios.get = (req, res) => {
    res.json({
        msg: "Get - Usuarios  Controllers"
    })
}

usuarios.post = (req, res) => {
    res.json({
        msg: "Post - Usuarios  Controllers"
    })
}

usuarios.put = (req, res) => {
    res.json({
        msg: "Put - Usuarios  Controllers"
    })
}

usuarios.delete = (req, res) => {
    res.json({
        msg: "Delete - Usuarios  Controllers"
    })
}

export default usuarios