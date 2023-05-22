// const { createApplyService } = require("../services/apply.service");

// exports.createApply = async (req, res) => {
//     try {
//         const id = req.params.id;        
//         const data = req.body;
//         // console.log('data>>> ', data)
//         const apply = await createApplyService(id, data);
//         res.status(200).send({
//             status: "Success",
//             data: apply
//         })
//     } catch (error) {
//         res.status(400).json({
//             status: "Fail",
//             message: error.message
//         })
//     }
// }