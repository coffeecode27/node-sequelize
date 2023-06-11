const findAll = async (req, res) => {
    try {
      const departments = await req.context.models.departments.findAll();
      return res.send(departments);
    } catch (error) {
      return res.send(error);
    }
  };
  
  const findOne = async (req, res) => {
    try {
      const departments = await req.context.models.departments.findOne({
        where: { department_id: req.params.id },
      });
      return res.send(departments);
    } catch (error) {
      return res.send(error);
    }
  };
  
  const create = async (req, res) => {
    try {
      const departments = await req.context.models.departments.create({
        
          department_id: req.body.department_id ,
          department_name: req.body.department_name
      });
      return res.send(departments);
    } catch (error) {
      return res.send(error);
    }
  };
  
  const update = async (req, res) => {
    try {
      const departments = await req.context.models.departments.update(
        {
           department_name: req.body.department_name
        },
        { returning: true, where: { department_id: req.params.id} }
      );
      return res.send(departments);
    } catch (error) {
      return res.send(error)
    }
  };
  
  const deleted = async(req,res) => {
      try {
          const departments = await req.context.models.departments.destroy({
              where:{department_id: req.params.id}
          })
          return res.send('delete '+departments+' row')
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
  
  
  
  
  
  
  
  
  
  
  
  