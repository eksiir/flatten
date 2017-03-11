# Flatten/Unflatten object using Angular - Typescript.
This is a Plunker project at https://plnkr.co/edit/UIJYnllgy2uSbOBQx6T4?p=info

## Description
The first function, flatten would takes an object, like below:

{
  "firstName": "John",
  "lastName": "Green",
  "car": {
    "make": "Honda",
    "model": "Civic",
    "revisions": [
      {
        "miles": 10150,
        "code": "REV01",
        "changes": []
      },
      {
        "miles": 20021,
        "code": "REV02",
        "changes": [
          {
            "type": "asthetic",
            "desc": "Left tire cap"
          },
          {
            "type": "mechanic",
            "desc": "Engine pressure regulator"
          }
        ]
      }
    ]
  },
  "visits": [
    {
      "date": "2015-01-01",
      "dealer": "DEAL-001"
    },
    {
      "date": "2015-03-01",
      "dealer": "DEAL-002"
    }
  ]
}    

and flatten it to:

{
  "firstName": "John",
  "lastName": "Green",
  "car.make": "Honda",
  "car.model": "Civic",
  "car.revisions.0.miles": 10150,
  "car.revisions.0.code": "REV01",
  "car.revisions.0.changes": [],
  "car.revisions.1.miles": 20021,
  "car.revisions.1.code": "REV02",
  "car.revisions.1.changes.0.type": "asthetic",
  "car.revisions.1.changes.0.desc": "Left tire cap",
  "car.revisions.1.changes.1.type": "mechanic",
  "car.revisions.1.changes.1.desc": "Engine pressure regulator",
  "visits.0.date": "2015-01-01",
  "visits.0.dealer": "DEAL-001",
  "visits.1.date": "2015-03-01",
  "visits.1.dealer": "DEAL-002"
}

The second function, unflatten when given the flattened object, must return the original object. 

## Testing
For testing, try samples from www.json-generator.com
