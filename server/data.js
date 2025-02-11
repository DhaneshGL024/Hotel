const categories = [
  { label: "All", icon: "<BiWorld />" },
  { img: "assets/beach_cat.jpg", label: "Beach", icon: "<TbBeach />", description: "This property is close to the beach!" },
  { img: "assets/windmill_cat.webp", label: "Windmill", icon: "<GiWindmill />", description: "This property is has windmill!" },
  { img: "assets/island_cat.webp", label: "Islands", icon: "<GiIsland />", description: "This property is on an island!" },
  { img: "assets/lake_cat.webp", label: "Lake", icon: "<GiBoatFishing />", description: "This property is near a lake!" },
  { img: "assets/castle_cat.webp", label: "Castles", icon: "<GiCastle />", description: "This property is an ancient castle!" },
  { img: "assets/cave_cat.jpg", label: "Caves", icon: "<GiCaveEntrance />", description: "This property is in a spooky cave!" },
  { img: "assets/camping_cat.jpg", label: "Camping", icon: "<GiForestCamp />", description: "This property offers camping activities!" },
  { img: "assets/arctic_cat.webp", label: "Arctic", icon: "<BsSnow />", description: "This property is in arctic environment!" },
  { img: "assets/desert_cat.webp", label: "Desert", icon: "<GiCactus />", description: "This property is in the desert!" },
  { img: "assets/barn_cat.jpg", label: "Barns", icon: "<GiBarn />", description: "This property is in a barn!" },
  { img: "assets/lux_cat.jpg", label: "Luxury", icon: "<IoDiamond />", description: "This property is brand new and luxurious!" }
];

const types = [
  { name: "Entire place", icon: "<FaHouseUser />" },
  { name: "Apartment", icon: "<FaUsers />" },
  { name: "Room", icon: "<BsFillDoorOpenFill />" },
  { name: "Shared Room", icon: "<FaPeopleRoof />" }
];

const facilities = [
  { name: "Bath tub", icon: "<PiBathtubFill />" },
  { name: "Washer", icon: "<BiSolidWasher />" },
  { name: "Dryer", icon: "<BiSolidDryer />" },
  { name: "Hangers", icon: "<PiCoatHangerFill />" },
  { name: "Iron", icon: "<TbIroning3 />" },
  { name: "TV", icon: "<PiTelevisionFill />" },
  { name: "Heating", icon: "<GiHeatHaze />" },
  { name: "Wifi", icon: "<BiWifi />" },
  { name: "Stove", icon: "<GiToaster />" },
  { name: "Camp fire", icon: "<GiCampfire />" },
  { name: "Garden", icon: "<MdYard />" },
  { name: "Parking", icon: "<AiFillCar />" }
];

module.exports = { categories, types, facilities };
