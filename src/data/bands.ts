import type { Band } from "@/types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "Linkin Park",
    genre: "Nu Metal / Alternative Rock",
    formedYear: 1996,
    imageUrl: "/images/bands/band1.jpg",
    description: "Linkin Park is an American rock band from Agoura Hills, California, widely recognized for their influential blend of alternative rock, hip hop, and electronic elements.",
    members: [
      {
        id: 1,
        name: "Chester Bennington",
        role: "Lead Vocalist",
        imageUrl: "/images/bands/member/Chester Bennington.jpg",
      },
      {
        id: 2,
        name: "Mike Shinoda",
        role: "Co-vocalist / Rhythm Guitar / Keyboards",
        imageUrl: "/images/bands/member/Mike Shinoda.jpg",
      },
      {
        id: 3,
        name: "Brad Delson",
        role: "Lead Guitarist",
        imageUrl: "/images/bands/member/Brad Delson.jpg",
      },
      {
        id: 4,
        name: "Dave 'Phoenix' Farrell",
        role: "Bassist",
        imageUrl: "/images/bands/member/Dave Phoenix Farrell.jpg",
      },
      {
        id: 5,
        name: "Joe Hahn",
        role: "Turntablist / Samples / Programming",
        imageUrl: "/images/bands/member/Joe Hahn.jpg",
      },
      {
        id: 6,
        name: "Rob Bourdon",
        role: "Drummer",
        imageUrl: "/images/bands/member/Rob Bourdon.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "NewJeans",
    genre: "K-Pop / R&B",
    formedYear: 2022,
    imageUrl: "/images/bands/band2.jpg",
    description: "NewJeans is a South Korean girl group known for their nostalgic easy-listening pop and 90s/2000s R&B style.",
    members: [
      {
        id: 1,
        name: "Minji",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Minji.jpg",
      },
      {
        id: 2,
        name: "Hanni",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Hanni.jpg",
      },
      {
        id: 3,
        name: "Danielle",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Danielle.jpg",
      },
      {
        id: 4,
        name: "Haerin",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Haerin.jpg",
      },
      {
        id: 5,
        name: "Hyein",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Hyein.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Bodyslam",
    genre: "Rock / Alternative Rock",
    formedYear: 2002,
    imageUrl: "/images/bands/band3.jpg",
    description: "Bodyslam is a prominent Thai rock band known for their energetic live performances, profound philosophical lyrics, and stadium-filling anthems.",
    members: [
      {
        id: 1,
        name: "Toon (Artiwara Kongmalai)",
        role: "Lead Vocalist / Rhythm Guitar",
        imageUrl: "/images/bands/member/Toon.jpg",
      },
      {
        id: 2,
        name: "Yod (Thanachai Tantrakul)",
        role: "Lead Guitarist",
        imageUrl: "/images/bands/member/Yod.jpg",
      },
      {
        id: 3,
        name: "Pid (Thanadol Changsawek)",
        role: "Bassist",
        imageUrl: "/images/bands/member/Pid.jpg",
      },
      {
        id: 4,
        name: "Chad (Chad Wachisunthorn)",
        role: "Drummer",
        imageUrl: "/images/bands/member/Chad.jpg",
      },
      {
        id: 5,
        name: "Ohm (Ohm Plengkhum)",
        role: "Keyboardist / Synthesizer",
        imageUrl: "/images/bands/member/Ohm.jpg",
      },
    ],
  },
];