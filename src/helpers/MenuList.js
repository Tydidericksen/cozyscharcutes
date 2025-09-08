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
    price: 8,
    description: "Individual charcuterie cups perfect for grab-and-go enjoyment. Great for office meetings, quick snacks, or when you want a personal charcuterie experience.",
    serves: "1 person",
    category: "group"
  },
  {
    id: "charcuterie-boxes",
    name: "Charcuterie Boxes",
    image: Boxes,
    price: 15,
    description: "Perfect for small gatherings, office events, or when you want to share the charcuterie love. Each box is thoughtfully curated with premium selections.",
    serves: "10-15 people",
    category: "group"
  },
  {
    id: "small-board",
    name: "Small Board",
    image: Small,
    price: 75,
    description: "Intimate charcuterie board perfect for date nights, small family gatherings, or cozy evenings with friends. A beautiful way to elevate any intimate occasion.",
    serves: "3-5 people",
    category: "board"
  },
  {
    id: "medium-board",
    name: "Medium Board",
    image: MediumBoard,
    price: 150,
    description: "Our most popular option! Ideal for dinner parties, game nights, book clubs, or any gathering where you want to impress. Perfect for creating memorable moments.",
    serves: "10-12 people",
    category: "board"
  },
  {
    id: "large-board",
    name: "Large Board",
    image: Large,
    price: 250,
    description: "Grand charcuterie display perfect for holiday celebrations, housewarming parties, or any special occasion where you want to make a statement. A true centerpiece for your event.",
    serves: "20-25 people",
    category: "board"
  },
  {
    id: "grazing-table",
    name: "Grazing Table",
    image: GrazingTable,
    price: "Price varies",
    description: "The ultimate charcuterie experience! Perfect for weddings, corporate events, baby showers, and large celebrations. Let us create a stunning display that will be the talk of your event.",
    serves: "50+",
    category: "event"
  },
  {
    id: "numbers-letters",
    name: "Numbers & Letters",
    image: NumbersLetters,
    price: "Price varies",
    description: "Custom charcuterie boards shaped as numbers or letters. Perfect for milestone birthdays, anniversaries, graduations, or any celebration where you want to add a personal touch.",
    serves: "8-15 people",
    category: "custom"
  },
  {
    id: "build-your-own",
    name: "Build Your Own",
    image: BuildYourOwn,
    price: "Price varies",
    description: "Create your perfect charcuterie experience! The sky is the limit - just let us know what you're looking for and we'll work with you to create the perfect board.",
    serves: "2-4 people",
    category: "custom"
  }
];
