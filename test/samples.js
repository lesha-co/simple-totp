const pairs = [
  // ascii       base32
  ["T",          "KQ======"        ],
  ["Th",         "KRUA===="        ],
  ["The",        "KRUGK==="        ],
  ["The",        "KRUGK==="        ],
  ["The ",       "KRUGKIA="        ],
  ["The q",      "KRUGKIDR"        ],
  ["The qu",     "KRUGKIDROU======"],
  ["The qui",    "KRUGKIDROVUQ===="],
  ["The quic",   "KRUGKIDROVUWG==="],
  ["The quick",  "KRUGKIDROVUWG2Y="],
  ["The quick ", "KRUGKIDROVUWG2ZA"],
];

module.exports.pairs = pairs
