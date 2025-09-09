import Joi from "joi";

export const s3 = {
    import: {
        body: {
          file: Joi.string()
            .required()
            .example('test.csv')
            .description('name of csv file')
        }
      }
};