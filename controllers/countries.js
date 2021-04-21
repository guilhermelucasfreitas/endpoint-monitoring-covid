import Countries from '../models/Countries.js';
import axios from 'axios';

class CountriesController {
  
  // feito com essa lógica, pois não encontrei outro modo com mongoose para atualizar a collection toda de uma vez
  async getCountriesDisease() {
    const { data } = await axios('https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true');
    const isDBPopulated = await Countries.find({})
    if (isDBPopulated == null) {
      for (let country of data) {
        let c = new Countries(country)
        c.save();
      }
    }
    else {
      let res = await Countries.remove({})
      for (let country of data) {
        let c = new Countries(country)
        c.save();
      }
    }
    
  }
  
  async get(req, res) {
    this.getCountriesDisease()
    Countries.find({}).then((todo) => {
      return res.json(todo);
    }).catch((error) => {
      return res.status(400).json({
        error: true,
        message: "No countries found"
      })
    })
  }
  
  async create(req, res) {
    const countries = Countries.create(req.body, (err) => {
      if (err) return res.status(400).json({
        error: true,
        message: "Error: Item not registered"
      });
      return res.status(200).json({
        error: false,
        message: "Country registered!"
      })
    });
  }
  
  async update(req, res) {
    const countries = Countries.updateOne({ _id: req.params.id }, req.body, (err) => {
      if (err) return res.status(400).json({
        error: true,
        message: "Error: Country not edited"
      });
      
      return res.json({
        error: false,
        message: "Country edited!"
      });
    });
  }
  
  async delete(req, res) {
    try {
      await Countries.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  
}

export default new CountriesController();