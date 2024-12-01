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
