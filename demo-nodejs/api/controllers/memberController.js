var Member = require('../model/Member')

exports.list_all_members = async (req, res)=> {
    try {
        const result = await Member.find({})
        res.send(result)
    } catch (error) {
        res.json({
            errorMessage: error
        })
    }
}

exports.create_a_member = async (req, res) => {
    try {
        let data= req.body
        let newMb= new Member(data);
        let saveMb = await newMb.save()
        res.send({
            message:'success',
            saveMb
        })
    } catch (error) {
        res.send(error)
        
    }
}