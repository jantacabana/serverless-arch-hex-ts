import Joi from "joi";

export const RegistrarEmpresaSchema = () => Joi.object().keys({
  razonSocial: Joi.string().required()
    .message('el razonSocial es requerido'),
  direccion: Joi.string().required()
    .message('el direccion es requerido')
})