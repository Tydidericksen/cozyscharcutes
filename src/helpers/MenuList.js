import Small from "../assets/Small.jpg";
import MediumBoard from "../assets/MediumBoard.jpg";
import Large from "../assets/Large.jpg";
import GrazingTable from "../assets/GrazingTable.jpg";
import Boxes from "../assets/Boxes.jpg";
import NumbersLetters from "../assets/NumbersLetters.jpg";
import BuildYourOwn from "../assets/BuildYourOwn.jpg";
import Cups from "../assets/Cups.jpg";

export const MenuList = [
  {
    id: "charcuterie-cups",
    name: "Charcuterie Cups",
    image: Cups,
    price: 8.99,
    description: "Individual charcuterie cups perfect for grab-and-go enjoyment. Each cup features a curated selection of meats, cheeses, and accompaniments.",
    serves: "1 person",
    category: "individual"
  },
  {
    id: "charcuterie-boxes",
    name: "Charcuterie Boxes",
    image: Boxes,
    price: 24.99,
    description: "Perfect for small gatherings or office events. Our signature boxes include premium meats, artisanal cheeses, fresh fruits, nuts, and gourmet crackers.",
    serves: "10-15 people",
    category: "group"
  },
  {
    id: "small-board",
    name: "Small Board",
    image: Small,
    price: 45.99,
    description: "Intimate charcuterie board ideal for date nights or small family gatherings. Features 3-4 premium meats, 3 artisanal cheeses, and seasonal accompaniments.",
    serves: "4-6 people",
    category: "board"
  },
  {
    id: "medium-board",
    name: "Medium Board",
    image: MediumBoard,
    price: 75.99,
    description: "Our most popular option! Perfect for dinner parties and celebrations. Includes 5-6 premium meats, 4-5 artisanal cheeses, fresh fruits, nuts, olives, and gourmet crackers.",
    serves: "8-12 people",
    category: "board"
  },
  {
    id: "large-board",
    name: "Large Board",
    image: Large,
    price: 125.99,
    description: "Grand charcuterie display for special occasions and large gatherings. Features 7-8 premium meats, 6-7 artisanal cheeses, extensive accompaniments, and decorative elements.",
    serves: "15-20 people",
    category: "board"
  },
  {
    id: "grazing-table",
    name: "Grazing Table",
    image: GrazingTable,
    price: 299.99,
    description: "Ultimate charcuterie experience! A full grazing table setup perfect for weddings, corporate events, and large celebrations. Includes multiple boards, decorative elements, and extensive variety.",
    serves: "25-40 people",
    category: "event"
  },
  {
    id: "numbers-letters",
    name: "Numbers & Letters",
    image: NumbersLetters,
    price: 89.99,
    description: "Custom charcuterie boards shaped as numbers or letters. Perfect for birthdays, anniversaries, and special celebrations. Available in various sizes.",
    serves: "8-15 people",
    category: "custom"
  },
  {
    id: "build-your-own",
    name: "Build Your Own",
    image: BuildYourOwn,
    price: 15.99,
    description: "Create your perfect charcuterie experience! Choose from our selection of premium meats, artisanal cheeses, and accompaniments to build your custom board.",
    serves: "2-4 people",
    category: "custom"
  }
];