import Joi from "joi";

export const ConsultarVehiculoSchema = () => Joi.object().keys({
  id: Joi.string().required()
    .message('el id es requerido')
})