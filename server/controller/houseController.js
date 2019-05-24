module.exports = {
    get_houses: async (req, res) => {
        const db = req.app.get('db')
        const result = await db.get_houses()
        
    }
}