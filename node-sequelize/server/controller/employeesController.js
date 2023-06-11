const findAll = async (req, res) => {
    try {
      const employees = await req.context.models.employees.findAll();
      return res.send(employees);
    } catch (error) {
      return res.send(error);
    }
  };
  
  const findOne = async (req, res) => {
    try {
      const employees = await req.context.models.employees.findOne({
        where: { employee_id: req.params.id },
      });
      return res.send(employees);
    } catch (error) {
      return res.send(error);
    }
  };
  
  const create = async (req, res) => {
    try {
      const employees = await req.context.models.employees.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email:req.body.email
      });
      return res.send(employees);
    } catch (error) {
      return res.send(error);
    }
  };
  
  const update = async (req, res) => {
    try {
      const employees = await req.context.models.employees.update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email:req.body.email
        },
        { returning: true, where: { employee_id: req.params.id} }
      );
      return res.send(employees);
    } catch (error) {
      return res.send(error)
    }
  };
  
  const deleted = async(req,res) => {
      try {
          const employees = await req.context.models.employees.destroy({
              where:{employee_id: req.params.id}
          })
          return res.send('delete '+employees+' row')
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
