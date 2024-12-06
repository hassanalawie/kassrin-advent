import GiftPage from "../../components/GiftPage";

export interface Gift {
  id: string;
  title: string;
  subTitle: string;
  giftText: string;
  giftUrl: string;
  day: number;
  isAvailable: boolean;
}


async function getGift(day: number): Promise<Gift> {
  const gifts: Array<Gift> = [
    {
      id: "aaaaaaaaaaaaa01",
      title: "Hi pretty girlfriend",
      subTitle:
        "Welcome to the first day of wonderful surprises 0.0 I hope you like this secret gifty ",
      giftText: "Penguinring! I drew u as a penguin hehehe",
      giftUrl:
        "../../kassrinPengy.jpg",
      day: 1,
      isAvailable: true, // Availability depends on the current date logic
    },
    {
      id: "aaaaaaaaaaaaa02",
      title: "The Adventures of Australian Psyduck",
      subTitle:
        "!!! Australian Psyduck hijacked todays gift!! I wonder what he wants to show you",
      giftText: "Check out the video here!! https://drive.google.com/file/d/1TyMjGU9ZDI3mgEoiHVvhD8Eddepuu-5U/view?usp=sharing",
      giftUrl:
        "../../AustralianPsyduck1.png",
      day: 2,
      isAvailable: true, // Availability depends on the current date logic
    },
    {
      id: "aaaaaaaaaaaaa03",
      title: "~Wo Ai Ni Kassrin~",
      subTitle:
        "This is a fun one, and one I think you'll be proud of me for",
      giftText: "Check out the SONG here!! https://drive.google.com/file/d/1RRfJF6hG1ma4aq9fnmr4TNXvZfNvz1Kp/view?usp=sharing",
      giftUrl:
        "../../woAiNiKassrin.png",
      day: 3,
      isAvailable: true, // Availability depends on the current date logic
    },
    {
      id: "aaaaaaaaaaaaa05",
      title: "Some things come from the heart",
      subTitle:
        "This was a lot of work :') I hope you like it",
      giftText: "Check out my poem here!! https://drive.google.com/file/d/1Uu_u4R4Z3Cg6iuubrPzINsQHGHBGEJ6c/view?usp=sharing",
      giftUrl:
        "../../heart.webp",
      day: 5,
      isAvailable: true, // Availability depends on the current date logic
    },
    {
      id: "aaaaaaaaaaaaa04",
      title: "Feeling Bored?",
      subTitle:
        "What's something we like to do? Hmmmmmm? Open the gift to see a personalized version of one of our favourite games ;p",
      giftText: "Good luckkkkkk",
      giftUrl:
        "../../theMini.jpeg",
      day: 4,
      isAvailable: true, // Availability depends on the current date logic
    },
    {
      id: "aaaaaaaaaaaaa06",
      title: "Its a good idea to rap your presents",
      subTitle:
        "Don't you love Christmas Carols :)",
      giftText: "https://drive.google.com/file/d/1vFHXBbhdwB_DA310yE5f3llwkJZoKGzD/view?usp=sharing",
      giftUrl:
        "../../coolPsyduck.png",
      day: 6,
      isAvailable: true, // Availability depends on the current date logic
    },
    {
      id: "aaaaaaaaaaaaa20",
      title: "A Cozy Christmas Surprise!",
      subTitle:
        "Things are probably getting cold, and unfortunately, some days my hands won't be there to warm yours up :( Open your gift for a potential solution to your dilemma.",
      giftText: "peeppee",
      giftUrl:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1FSyK2oIMPSDlF8J9s09p43jiZ0GNKvbzSfz51P5FkxyQKcVDs7xIkKd24Iqi_tHMr-yGy0wl-5sP9qgRQl98b7uUGU-ynZ6FhLuuV7fox0Y91yTF7ttouK4",
      day: 20,
      isAvailable: true, // Availability depends on the current date logic
    },
    // Add objects for other days...
  ];
  const today = new Date();
  const currentDay = today.getMonth() === 11 ? today.getDate() : 0; // 11 is December

  const gift = gifts.find((gift) => gift.day === day);

  if (!gift || day > currentDay) {
    return {
      id: "unavailable",
      title: "Gift Not Available Yet",
      subTitle: "Check back on the day for a new surprise!",
      giftText: "",
      giftUrl: "",
      day,
      isAvailable: false,
    };
  }

  return gift;
}

export default async function GiftPageWrapper({ params }:{params:Promise<{day: string}>}) {
  const { day } = await params;
  const gift = await getGift(parseInt(day));
  return <GiftPage gift={gift} day={day} />;
}
