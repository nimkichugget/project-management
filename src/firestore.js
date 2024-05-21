import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const addTeam = async (team) => {
  try {
    const docRef = await addDoc(collection(db, 'teams'), team);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const getTeams = async () => {
  const querySnapshot = await getDocs(collection(db, 'teams'));
  const teams = [];
  querySnapshot.forEach((doc) => {
    teams.push({ id: doc.id, ...doc.data() });
  });
  return teams;
};

export { addTeam, getTeams };
