type TRecommended = {
  type: string;
  description: string;
};

type TMeal = 'morning' | 'lunch' | 'dinner' | 'snack';

type TTransitButton = {
  iconUrl: string;
  text: string;
  type?: TMeal;
};

type TCard = {
  imgUrl: string;
  text: string;
  type?: TMeal;
  descriptions?: string;
  hashtag?: string[];
};

type TRecord = {
  urlImage: string;
  title: string;
  description: string;
};

type TDiary = {
  date: string;
  hour: string;
  title: string;
  desc: string;
};

type TExercise = {
  title: string;
  time: string;
  kcal: string;
};

export { TRecommended, TMeal, TCard, TTransitButton, TRecord, TDiary, TExercise };
