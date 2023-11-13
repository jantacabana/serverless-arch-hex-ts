'use strict';

import axios from 'axios';

export default abstract class HttpApiBaseRepository<Entity, ModelDb> {
  protected urlBase: string| undefined = '';
  
  public abstract toEntity(model: ModelDb): Entity

  async getOne(url, id) {
    return axios.get(url + '/' + id)
      .then(({data}) => {
        console.log('vehiculo response: ', data)
        return this.toEntity(data)
      })
      .catch((error) => {
        if (error.response.status == 404) {
          return this.toEntity(error.response.data)
        } else {
          console.log(error)
          return error;
        }
      });
  }

  async getAll(url) {
    return axios.get(url)
      .then(({data}) => {
        console.log('** data.result: ', data)
        return data.results.map(this.toEntity)
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status == 404) {
          return error.response
        } else {
          return error;
        }
      });
  }

}