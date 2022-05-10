import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDw-kF7v6Is6D_SI1LTovDVvuH7I-eumP0',
  authDomain: 'uber-food-2c252.firebaseapp.com',
  projectId: 'uber-food-2c252',
  storageBucket: 'uber-food-2c252.appspot.com',
  messagingSenderId: '790062855888',
  appId: '1:790062855888:web:cd434e259a06f6151f90d5',
  measurementId: 'G-MJ5FG7CB5E',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// NOTE: Test firebase
// const getData = async () => {
//   const querySnapshot = await getDocs(collection(db, 'orders'));
//   const resultList = querySnapshot.docs.map((doc) => doc.data());
//   console.log('🚀 ~ resultList', resultList);
// };
// useEffect(() => {
//   getData();
// }, []);  
