import { db } from "./firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const adeudosCollection = collection(db, "adeudos");


export const agregarAdeudo = async (adeudo) => {
  await addDoc(adeudosCollection, adeudo);
};


export const obtenerAdeudos = async () => {
  const data = await getDocs(adeudosCollection);
  return data.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};


export const eliminarAdeudo = async (id) => {
  const adeudoDoc = doc(db, "adeudos", id);
  await deleteDoc(adeudoDoc);
};


export const editarAdeudo = async (id, nuevosDatos) => {
  const adeudoDoc = doc(db, "adeudos", id);
  await updateDoc(adeudoDoc, nuevosDatos);
};