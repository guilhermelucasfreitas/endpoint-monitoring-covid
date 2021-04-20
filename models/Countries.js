import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    updated: {
        type: Number,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    countryInfo: {
        _id: {
            type: String,
            required: false,
        },
        iso2: {
            type: String,
            required: false,
        },
        iso3: {
            type: String,
            required: false,
        },
        lat: {
            type: Number,
            required: false,
        },
        long: {
            type: Number,
            required: false,
        },
    },
    cases: {
        type: Number,
        required: false
    },
    todayCases: {
        type: Number,
        required: false
    },
    deaths: {
        type: Number,
        required: false
    },
    todayDeaths: {
        type: Number,
        required: false
    },
    recovered: {
        type: Number,
        required: false
    },
    todayRecovered: {
        type: Number,
        required: false
    },
    active: {
        type: Number,
        required: false
    },
    critical: {
        type: Number,
        required: false
    },
    casesPerOneMillion: {
        type: Number,
        required: false
    },
    deathsPerOneMillion: {
        type: Number,
        required: false
    },
    tests: {
        type: Number,
        required: false
    },
    testsPerOneMillion: {
        type: Number,
        required: false
    },
    population: {
        type: Number,
        required: false
    },
    continent: {
        type: String,
        required: false
    },
    oneCasePerPeople: {
        type: Number,
        required: false
    },
    oneDeathPerPeople: {
        type: Number,
        required: false
    },
    oneTestPerPeople: {
        type: Number,
        required: false
    },
    activePerOneMillion: {
        type: Number,
        required: false
    },
    recoveredPerOneMillion: {
        type: Number,
        required: false
    },
    criticalPerOneMillion: {
        type: Number,
        required: false
    },
});

const Countries = mongoose.model('Countries', schema);

export default Countries;