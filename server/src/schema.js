import { gql } from 'apollo-server-express'
import {find, remove} from 'lodash'

const city = [
    {
        "id": 1,
        "location": "Vancouver",
        "month": "January",
        "dayLight": "9:22",
        "hourlyMeanTemperature": "5.4"
    },
    {
        "id": 2,
        "location": "Vancouver",
        "month": "February",
        "dayLight": "10:57",
        "hourlyMeanTemperature": "3.5"
    },
    {
        "id": 3,
        "location": "Vancouver",
        "month": "March",
        "dayLight": "13:11",
        "hourlyMeanTemperature": "6.5"
    },
    {
        "id": 4,
        "location": "Vancouver",
        "month": "April",
        "dayLight": "14:35",
        "hourlyMeanTemperature": "9.8"
    },
    {
        "id": 5,
        "location": "Vancouver",
        "month": "May",
        "dayLight": "15:56",
        "hourlyMeanTemperature": "12.7"
    },
    {
        "id": 6,
        "location": "Vancouver",
        "month": "June",
        "dayLight": "16:16",
        "hourlyMeanTemperature": "17.7"
    },
    {
        "id": 7,
        "location": "Vancouver",
        "month": "July",
        "dayLight": "16:11",
        "hourlyMeanTemperature": "19.2"
    },
    {
        "id": 8,
        "location": "Vancouver",
        "month": "August",
        "dayLight": "15.08",
        "hourlyMeanTemperature": "18.7"
    },
    {
        "id": 9,
        "location": "Vancouver",
        "month": "September",
        "dayLight": "13.27",
        "hourlyMeanTemperature": "14.9"
    },
    {
        "id": 10,
        "location": "Vancouver",
        "month": "October",
        "dayLight": "11.38",
        "hourlyMeanTemperature": "11.5"
    },
    {
        "id": 11,
        "location": "Vancouver",
        "month": "November",
        "dayLight": "9:50",
        "hourlyMeanTemperature": "6.6"
    },
    {
        "id": 12,
        "location": "Vancouver",
        "month": "December",
        "dayLight": "8.37",
        "hourlyMeanTemperature": "5.4"
    },

    {
        "id": 13,
        "location": "West Vancouver",
        "month": "January",
        "dayLight": "9:22",
        "hourlyMeanTemperature": "5"
    },
    {
        "id": 14,
        "location": "West Vancouver",
        "month": "February",
        "dayLight": "10:56",
        "hourlyMeanTemperature": "2.8"
    },
    {
        "id": 15,
        "location": "West Vancouver",
        "month": "March",
        "dayLight": "13:12",
        "hourlyMeanTemperature": "6.1"
    },
    {
        "id": 16,
        "location": "West Vancouver",
        "month": "April",
        "dayLight": "14:35",
        "hourlyMeanTemperature": "9.9"
    },
    {
        "id": 17,
        "location": "West Vancouver",
        "month": "May",
        "dayLight": "15:57",
        "hourlyMeanTemperature": "12.2"
    },
    {
        "id": 18,
        "location": "West Vancouver",
        "month": "June",
        "dayLight": "16:17",
        "hourlyMeanTemperature": "18.3"
    },
    {
        "id": 19,
        "location": "West Vancouver",
        "month": "July",
        "dayLight": "16:11",
        "hourlyMeanTemperature": "19.6"
    },
    {
        "id": 20,
        "location": "West Vancouver",
        "month": "August",
        "dayLight": "15.08",
        "hourlyMeanTemperature": "18.7"
    },
    {
        "id": 21,
        "location": "Vancouver",
        "month": "September",
        "dayLight": "13.27",
        "hourlyMeanTemperature": "14.6"
    },
    {
        "id": 22,
        "location": "West Vancouver",
        "month": "October",
        "dayLight": "11.38",
        "hourlyMeanTemperature": "10.9"
    },
    {
        "id": 23,
        "location": "West Vancouver",
        "month": "November",
        "dayLight": "9:50",
        "hourlyMeanTemperature": "6.1"
    },
    {
        "id": 24,
        "location": "West Vancouver",
        "month": "December",
        "dayLight": "8.37",
        "hourlyMeanTemperature": "5.2"
    },

    {
        "id": 25,
        "location": "Richmond",
        "month": "January",
        "dayLight": "9:22",
        "hourlyMeanTemperature": "5.4"
    },
    {
        "id": 26,
        "location": "Richmond",
        "month": "February",
        "dayLight": "10:57",
        "hourlyMeanTemperature": "3.5"
    },
    {
        "id": 27,
        "location": "Richmond",
        "month": "March",
        "dayLight": "13:12",
        "hourlyMeanTemperature": "6.5"
    },
    {
        "id": 28,
        "location": "Richmond",
        "month": "April",
        "dayLight": "14:34",
        "hourlyMeanTemperature": "9.8"
    },
    {
        "id": 29,
        "location": "Richmond",
        "month": "May",
        "dayLight": "15:55",
        "hourlyMeanTemperature": "12.7"
    },
    {
        "id": 30,
        "location": "Richmond",
        "month": "June",
        "dayLight": "16:15",
        "hourlyMeanTemperature": "17.7"
    },
    {
        "id": 31,
        "location": "Richmond",
        "month": "July",
        "dayLight": "16:09",
        "hourlyMeanTemperature": "19.2"
    },
    {
        "id": 32,
        "location": "Richmond",
        "month": "August",
        "dayLight": "15.08",
        "hourlyMeanTemperature": "18.7"
    },
    {
        "id": 33,
        "location":"Richmond",
        "month": "September",
        "dayLight": "13.27",
        "hourlyMeanTemperature": "14.9"
    },
    {
        "id": 34,
        "location": "Richmond",
        "month": "October",
        "dayLight": "11.38",
        "hourlyMeanTemperature": "11.5"
    },
    {
        "id": 35,
        "location": "Richmond",
        "month": "November",
        "dayLight": "9:51",
        "hourlyMeanTemperature": "6.6"
    },
    {
        "id": 36,
        "location": "Richmond",
        "month": "December",
        "dayLight": "8.37",
        "hourlyMeanTemperature": "5.4"
    }
]

const typeDefs = gql`
    type City{
        id:Int!
        location:String!
        month:String!
        dayLight:String!
        hourlyMeanTemperature:String!
    }

    type Query{
        cities : [City]!
        city(id:Int!) : City
    }
`

const resolvers = {
    Query: {
        cities: () => city,
        city: (parent, args, context, info) => {
            return find(city,{id:args.id})
        },
    }
}  

export { typeDefs,resolvers } 