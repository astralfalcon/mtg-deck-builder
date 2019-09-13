#!/usr/bin/env node

const fetch = require('isomorphic-unfetch')
const { writeFileSync } = require('fs')
const { flatten, take, values } = require('lodash')

const main = async set => {
  const [set1, set2, set3] = await Promise.all(
    [1, 2, 3].map(i =>
      fetch(
        `https://api.scryfall.com/cards/search?q=set:${set}&page=${i}`
      ).then(r => r.json())
    )
  )

  console.log(set1)

  const cards = [...set1.data, ...set2.data, ...set3.data]
  writeFileSync(`${set}.json`, JSON.stringify(cards))
}

const set = process.argv[2]
if (!set) {
  console.log('Usage: ./populate_db.js [dom|grn|m19]')
  process.exit(1)
}
main(set.toLowerCase())
