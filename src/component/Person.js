import React from 'react'

function Person({person}) {
  return (
    <div>
    <h2>
      Iam {person.name} from {person.place} .Iam {person.age} years old
    </h2>
    </div>
  )
}

export default Person
