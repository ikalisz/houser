module.exports = {
    get_houses: async (req, res) => {
        console.log('Get!')
        const db = req.app.get('db')
        const result = await db.get_houses()
        res.status(200).send(result)
    },
    create_house: async (req, res) => {
        console.log('Here!')
        const {propertyName, address, city, stateProperty, zip, imageURL, mortgageAmt, monthlyRent} = req.body
        const db = req.app.get('db')
        await db.create_house([propertyName, address, city, stateProperty, zip, imageURL, mortgageAmt, monthlyRent])
        res.status(201).send(`Created!`)
    }
}