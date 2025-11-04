export interface PraxisAlignment {
  economic: string;
  narrative: string;
  spiritual: string;
  design: string;
}
export interface OperationalFuturity {
  definition: string;
  application: string[];
}
export interface EthicalProtocols {
  [key: string]: string;
}
export interface ValueSeed {
  seed_id: string;
  title: string;
  core_principle: string;
  praxis_alignment: PraxisAlignment;
  operational_futurity: OperationalFuturity;
  ethical_protocols: EthicalProtocols;
}
export const valueSeeds: ValueSeed[] = [
  {
    "seed_id": "economic_seed_001",
    "title": "Reciprocal Economies",
    "core_principle": "Wealth is not accumulation; it is circulation aligned with community wellbeing.",
    "praxis_alignment": {
      "economic": "Build cooperative and transparent infrastructures that redistribute value and agency.",
      "narrative": "Shift the story of profit toward shared prosperity and interdependence.",
      "spiritual": "Honor the sacred exchange between giving, receiving, and sustaining life.",
      "design": "Architect financial and digital systems that make equity measurable and repeatable."
    },
    "operational_futurity": {
      "definition": "Practicing future economics by enacting fair exchange and open accountability today.",
      "application": [
        "Tokenized mutual aid networks",
        "Community credit ledgers",
        "Co-op investment dashboards"
      ]
    },
    "ethical_protocols": {
      "1": "Compensate labor fairly and transparently.",
      "2": "Reinvest surplus into local ecosystems.",
      "3": "Reject exploitative or opaque profit models."
    }
  },
  {
    "seed_id": "narrative_seed_001",
    "title": "Liberation Logic",
    "core_principle": "Narrative is infrastructure — the code that decides who is seen, heard, and human.",
    "praxis_alignment": {
      "economic": "Challenge narratives that naturalize scarcity or exploitation.",
      "narrative": "Create frameworks that restore collective authorship over meaning.",
      "spiritual": "Speak truth as ritual — the act of remembering freedom.",
      "design": "Craft language, visuals, and systems that make justice legible."
    },
    "operational_futurity": {
      "definition": "Designing communication systems that prefigure liberated societies.",
      "application": [
        "Narrative engineering labs",
        "Decentralized media cooperatives",
        "Liberation storytelling protocols"
      ]
    },
    "ethical_protocols": {
      "1": "Prioritize truth over virality.",
      "2": "Use language to build bridges, not barriers.",
      "3": "Protect memory as infrastructure."
    }
  },
  {
    "seed_id": "spiritual_seed_001",
    "title": "Sacred Systems",
    "core_principle": "Technology is ceremony — each interaction a chance to restore balance between matter and meaning.",
    "praxis_alignment": {
      "economic": "Treat energy, time, and attention as sacred resources.",
      "narrative": "Frame creation as devotion — code as prayer, design as offering.",
      "spiritual": "Remember that justice and harmony share the same root.",
      "design": "Embed reverence in systems so efficiency never replaces empathy."
    },
    "operational_futurity": {
      "definition": "Bridging ancestral knowledge with digital architectures of care.",
      "application": [
        "Eco-spiritual data sanctuaries",
        "Ceremonial coding practices",
        "Community healing interfaces"
      ]
    },
    "ethical_protocols": {
      "1": "Center life in every algorithm.",
      "2": "Preserve the integrity of creation.",
      "3": "Practice gratitude in design and deployment."
    }
  },
  {
    "seed_id": "design_seed_001",
    "title": "Humanized Interfaces",
    "core_principle": "Design is not decoration — it is how dignity is rendered visible.",
    "praxis_alignment": {
      "economic": "Design interfaces that reveal value flows and decision logic.",
      "narrative": "Translate complexity into clarity without erasing nuance.",
      "spiritual": "Treat usability as an act of compassion.",
      "design": "Make systems intuitive, transparent, and liberatory by default."
    },
    "operational_futurity": {
      "definition": "Designing for tomorrow’s justice through today’s accessible and ethical UX.",
      "application": [
        "Civic design dashboards",
        "AI-assisted accessibility layers",
        "Data visualization for accountability"
      ]
    },
    "ethical_protocols": {
      "1": "Reduce cognitive load, not agency.",
      "2": "Design for comprehension before compliance.",
      "3": "Prototype with the people, not for them."
    }
  }
];