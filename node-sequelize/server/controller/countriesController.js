const findAll = async (req, res) => {
  try {
    const countries = await req.context.models.countries.findAll();
    return res.send(countries);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const countries = await req.context.models.countries.findOne({
      where: { country_id: req.params.id },
    });
    return res.send(countries);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const countries = await req.context.models.countries.create({
      
        country_id: req.body.country_id ,
        country_name: req.body.country_name
    });
    return res.send(countries);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const countries = await req.context.models.countries.update(
      {
        country_id: req.body.country_id ,
        country_name: req.body.country_name
      },
      { returning: true, where: { country_id: req.params.id} }
    );
    return res.send(countries);
  } catch (error) {
    return res.send(error)
  }
};

const deleted = async(req,res) => {
    try {
        const countries = await req.context.models.countries.destroy({
            where:{country_id: req.params.id}
        })
        return res.send('delete '+countries+' row')
    } catch (error) {
        return res.send(error)
    }
}

export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
};











// const querySQL = async(req,res) => {
//     try {
//         await sequelize.query('select * from countries where region_id = :id',
//         {replacements : {id : req.params.id},type : sequelize.QueryTypes.SELECT}
//         ).then(result => {
//             return res.send(result)
//         })
//     } catch (error) {
//         return res.send(error)
//     }
// }