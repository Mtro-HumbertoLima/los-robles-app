import { db } from "./firebase";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc
} from "firebase/firestore";

const discusionesCollection = collection(db, "discusiones");

export const agregarDiscusion = async (discusion) => {
  await addDoc(discusionesCollection, discusion);
};

export const obtenerDiscusiones = async () => {

  const data = await getDocs(discusionesCollection);

  return data.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

};

export const votarDiscusion = async (
  id,
  nuevosDatos
) => {

  const discusionDoc = doc(
    db,
    "discusiones",
    id
  );

  await updateDoc(
    discusionDoc,
    nuevosDatos
  );
};