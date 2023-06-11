const findAll = async (req, res) => {
    try {
      const jobs = await req.context.models.jobs.findAll();
      return res.send(jobs);
    } catch (error) {
      return res.send(error);
    }
  };
  
  const findOne = async (req, res) => {
    try {
      const jobs = await req.context.models.jobs.findOne({
        where: { job_id: req.params.id },
      });
      return res.send(jobs);
    } catch (error) {
      return res.send(error);
    }
  };
  
  const create = async (req, res) => {
    try {
      const jobs = await req.context.models.jobs.create({
        
          job_id: req.body.job_id ,
          job_title: req.body.job_title
      });
      return res.send(jobs);
    } catch (error) {
      return res.send(error);
    }
  };
  
  const update = async (req, res) => {
    try {
      const jobs = await req.context.models.jobs.update(
        {
          job_id: req.body.job_id ,
          job_title: req.body.job_title
        },
        { returning: true, where: { job_id: req.params.id} }
      );
      return res.send(jobs);
    } catch (error) {
      return res.send(error)
    }
  };
  
  const deleted = async(req,res) => {
      try {
          const jobs = await req.context.models.jobs.destroy({
              where:{job_id: req.params.id}
          })
          return res.send('delete '+jobs+' row')
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

  
